const GITHUB_API = "https://api.github.com";
const DEFAULT_USERNAME = "Eswar-2629";
const CACHE_SECONDS = 15 * 60;

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`GitHub API request failed with status ${response.status}`);
  }
  return response.json();
}

async function verifyDemo(url) {
  if (!/^https?:\/\//i.test(url)) return null;

  try {
    const parsed = new URL(url);
    if (["github.com", "www.github.com"].includes(parsed.hostname)) return null;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    let response;
    try {
      response = await fetch(parsed.toString(), {
        method: "HEAD",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": "Portfolio-Repository-Catalog" }
      });
    } catch {
      response = null;
    }
    clearTimeout(timeout);

    if (response && response.ok && response.url) {
      const verifiedUrl = new URL(response.url);
      if (/\/login(?:\/|\?|$)/i.test(verifiedUrl.pathname + verifiedUrl.search)) return null;
      if (verifiedUrl.hostname === "vercel.com") return null;
      return response.url;
    }
    if (response && response.status >= 300 && response.status < 400) return parsed.toString();

    return null;
  } catch {
    return null;
  }
}

module.exports = async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  const manualRefresh = request.query?.refresh;
  response.setHeader("Cache-Control", manualRefresh ? "no-store" : `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`);

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }
  if (request.method !== "GET") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const token = process.env.GITHUB_TOKEN;
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "Eswar-Portfolio"
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    let repositories;
    let page = 1;
    if (token) {
      repositories = [];
      while (page <= 10) {
        const batch = await fetchJson(`${GITHUB_API}/user/repos?affiliation=owner,collaborator,organization_member&visibility=all&sort=updated&per_page=100&page=${page}`, { headers });
        repositories.push(...batch);
        if (batch.length < 100) break;
        page += 1;
      }
    } else {
      repositories = await fetchJson(`${GITHUB_API}/users/${DEFAULT_USERNAME}/repos?sort=updated&per_page=100`, { headers });
    }

    const previews = {
      "Portfolio": { url: "assets/previews/portfolio.png", alt: "Live preview of Eswar Devisetty portfolio homepage" },
      "AI-Powered-Phishing-Email-Detection": { url: "assets/previews/phishing-detector.png", alt: "Live preview of the phishing email detection interface" },
      "AptiHire-AI": { url: "assets/previews/aptihire-ai.png", alt: "Live preview of the AptiHire AI recruitment platform" },
      "SIH": { url: "assets/previews/sih-college-portal.png", alt: "Live preview of the SIH student portal login" }
    };

    const mapped = [];
    for (const repo of repositories) {
      if (repo.archived || repo.fork) continue;
      const verifiedDemo = repo.homepage ? await verifyDemo(repo.homepage) : null;
      const preview = previews[repo.name] || null;
      mapped.push({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided",
        language: repo.language || null,
        topics: Array.isArray(repo.topics) ? repo.topics : [],
        htmlUrl: repo.html_url,
        demoUrl: verifiedDemo,
        previewUrl: preview?.url || null,
        previewAlt: preview?.alt || null,
        updatedAt: repo.updated_at,
        stars: repo.stargazers_count || 0
      });
    }

    mapped.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    response.status(200).json({ repositories: mapped, fetchedAt: new Date().toISOString(), authenticated: Boolean(token) });
  } catch (error) {
    console.error("GitHub repository catalog error", error instanceof Error ? error.message : "Unknown error");
    response.status(502).json({ error: "GitHub repository data could not be loaded" });
  }
};
