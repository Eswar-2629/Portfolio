const body = document.body;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const themeToggle = document.querySelector(".theme-toggle");
const progressBar = document.querySelector(".scroll-progress span");
const backToTop = document.querySelector(".back-to-top");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setTheme(theme) {
  const dark = theme === "dark";
  body.dataset.theme = dark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#111916" : "#f3f5ef");
  try { localStorage.setItem("portfolio-theme", theme); } catch {}
}

let savedTheme = "light";
try { savedTheme = localStorage.getItem("portfolio-theme") || "light"; } catch {}
setTheme(savedTheme);

themeToggle.addEventListener("click", () => setTheme(body.dataset.theme === "dark" ? "light" : "dark"));

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  mobileMenu.setAttribute("aria-hidden", String(!open));
  body.classList.toggle("menu-open", open);
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  mobileMenu.setAttribute("aria-hidden", "true");
  body.classList.remove("menu-open");
}));

let previousScroll = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  header.classList.toggle("nav-hidden", currentScroll > previousScroll && currentScroll > 120);
  header.classList.toggle("scrolled", currentScroll > 24);
  previousScroll = currentScroll;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollable > 0 ? currentScroll / scrollable : 0})`;
  backToTop.classList.toggle("visible", currentScroll > 600);
}, { passive: true });

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" }));

const navLinks = [...document.querySelectorAll(".header-nav .nav-link")];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
}, { rootMargin: "-25% 0px -55%", threshold: [0.05, 0.25, 0.5] });
sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .project-card, .skill-group").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
  revealObserver.observe(element);
});

const repositoryGrid = document.querySelector("#repository-grid");
const repositorySearch = document.querySelector("#repository-search");
const repositoryLanguage = document.querySelector("#repository-language");
const repositoryTopic = document.querySelector("#repository-topic");
const repositorySort = document.querySelector("#repository-sort");
const repositoryStatus = document.querySelector("#repository-status");
const repositoryLoading = document.querySelector("#repository-loading");
const repositoryError = document.querySelector("#repository-error");
const repositoryEmpty = document.querySelector("#repository-empty");
const repositoryRefresh = document.querySelector("#repository-refresh");
const repositoryRetry = document.querySelector("#repository-retry");
const repositoryCacheKey = "portfolio-github-repositories-v1";
const repositoryCacheMaxAge = 30 * 60 * 1000;
let repositories = [];

function setRepositoryState(state) {
  repositoryLoading.hidden = state !== "loading";
  repositoryError.hidden = state !== "error";
  repositoryEmpty.hidden = state !== "empty";
  repositoryGrid.hidden = state === "loading" || state === "error";
  repositoryGrid.setAttribute("aria-busy", String(state === "loading"));
}

function readRepositoryCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(repositoryCacheKey));
    if (!cached?.repositories || !cached?.fetchedAt) return null;
    if (Date.now() - new Date(cached.fetchedAt).getTime() > repositoryCacheMaxAge) return null;
    return cached;
  } catch {
    return null;
  }
}

function createRepositoryCard(repo, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.style.setProperty("--reveal-delay", reducedMotion.matches ? "0ms" : `${index % 4 * 70}ms`);

  const top = document.createElement("div");
  top.className = "project-top";
  const type = document.createElement("span");
  type.className = "project-type";
  type.textContent = repo.language ? `Repository · ${repo.language}` : "Repository · Language not listed";
  const id = document.createElement("span");
  id.className = "project-id";
  id.textContent = `Updated ${repo.updatedAt ? new Date(repo.updatedAt).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "date unavailable"}`;
  top.append(type, id);

  if (repo.previewUrl) {
    const media = document.createElement("div");
    media.className = "project-media repository-preview";
    const image = document.createElement("img");
    image.src = repo.previewUrl;
    image.alt = repo.previewAlt || `Live output preview for ${repo.name}`;
    image.width = 1200;
    image.height = 675;
    image.loading = "lazy";
    media.append(image);
    card.append(media);
  }

  const title = document.createElement("h3");
  title.textContent = repo.name || "Unnamed repository";
  const description = document.createElement("p");
  description.textContent = repo.description || "No description provided";

  const tags = document.createElement("div");
  tags.className = "tag-list";
  if (repo.language) {
    const languageTag = document.createElement("span");
    languageTag.textContent = repo.language;
    tags.append(languageTag);
  }
  repo.topics?.slice(0, 6).forEach((topic) => {
    const topicTag = document.createElement("span");
    topicTag.textContent = topic;
    tags.append(topicTag);
  });
  if (!repo.language && (!repo.topics || repo.topics.length === 0)) {
    const pending = document.createElement("span");
    pending.textContent = "No language or topics listed";
    tags.append(pending);
  }

  const actions = document.createElement("div");
  actions.className = "project-actions";
  if (repo.demoUrl) {
    const demo = document.createElement("a");
    demo.className = "project-link live-link";
    demo.href = repo.demoUrl;
    demo.target = "_blank";
    demo.rel = "noopener noreferrer";
    const dot = document.createElement("span");
    dot.className = "live-dot";
    dot.setAttribute("aria-hidden", "true");
    demo.append(dot, document.createTextNode(" Verified Live Demo"));
    actions.append(demo);
  }
  const github = document.createElement("a");
  github.className = "project-link";
  github.href = repo.htmlUrl;
  github.target = "_blank";
  github.rel = "noopener noreferrer";
  github.textContent = "GitHub";
  actions.append(github);

  if (!repo.demoUrl) {
    const label = document.createElement("span");
    label.className = "repository-demo-label";
    label.textContent = "No verified live demo";
    actions.append(label);
  }

  card.append(top, title, description, tags, actions);
  return card;
}

function populateRepositoryFilters() {
  const languages = [...new Set(repositories.map((repo) => repo.language).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const topics = [...new Set(repositories.flatMap((repo) => repo.topics || []))].sort((a, b) => a.localeCompare(b));
  repositoryLanguage.replaceChildren(new Option("All languages", "all"));
  repositoryTopic.replaceChildren(new Option("All topics", "all"));
  languages.forEach((language) => repositoryLanguage.add(new Option(language, language)));
  topics.forEach((topic) => repositoryTopic.add(new Option(topic, topic)));
}

function renderRepositories() {
  const query = repositorySearch.value.trim().toLowerCase();
  const language = repositoryLanguage.value;
  const topic = repositoryTopic.value;
  let visible = repositories.filter((repo) => {
    const searchable = `${repo.name} ${repo.description || ""} ${repo.language || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
    return (!query || searchable.includes(query)) && (language === "all" || repo.language === language) && (topic === "all" || repo.topics?.includes(topic));
  });

  if (repositorySort.value === "name") visible.sort((a, b) => a.name.localeCompare(b.name));
  if (repositorySort.value === "stars") visible.sort((a, b) => (b.stars || 0) - (a.stars || 0));
  if (repositorySort.value === "updated") visible.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  repositoryGrid.replaceChildren();
  visible.forEach((repo, index) => repositoryGrid.append(createRepositoryCard(repo, index)));
  repositoryStatus.textContent = `${visible.length} of ${repositories.length} repositories shown`;
  setRepositoryState(visible.length ? "ready" : "empty");
}

async function loadRepositories(forceRefresh = false) {
  if (!forceRefresh) {
    const cached = readRepositoryCache();
    if (cached) {
      repositories = cached.repositories;
      populateRepositoryFilters();
      renderRepositories();
      return;
    }
  }

  setRepositoryState("loading");
  repositoryStatus.textContent = "Loading repositories from GitHub…";
  repositoryRefresh.disabled = true;
  repositoryRefresh.textContent = "Refreshing…";

  try {
    const url = forceRefresh ? `/api/github-repositories.js?refresh=${Date.now()}` : `/api/github-repositories.js`;
    const response = await fetch(url, { headers: { Accept: "application/json" }, cache: forceRefresh ? "reload" : "default" });
    if (!response.ok) throw new Error(`GitHub request failed (${response.status})`);
    const payload = await response.json();
    if (!Array.isArray(payload.repositories)) throw new Error("GitHub returned an invalid repository list");
    repositories = payload.repositories;
    const cached = { repositories, fetchedAt: payload.fetchedAt || new Date().toISOString() };
    try { localStorage.setItem(repositoryCacheKey, JSON.stringify(cached)); } catch {}
    populateRepositoryFilters();
    renderRepositories();
  } catch {
    try {
      const response = await fetch("https://api.github.com/users/Eswar-2629/repos?sort=updated&per_page=100", { headers: { Accept: "application/vnd.github+json" } });
      if (!response.ok) throw new Error("Public GitHub fallback failed");
      const publicRepositories = await response.json();
      repositories = publicRepositories.filter((repo) => !repo.archived && !repo.fork).map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided",
        language: repo.language || null,
        topics: Array.isArray(repo.topics) ? repo.topics : [],
        htmlUrl: repo.html_url,
        demoUrl: null,
        previewUrl: null,
        previewAlt: null,
        updatedAt: repo.updated_at,
        stars: repo.stargazers_count || 0
      }));
      const cached = { repositories, fetchedAt: new Date().toISOString() };
      try { localStorage.setItem(repositoryCacheKey, JSON.stringify(cached)); } catch {}
      populateRepositoryFilters();
      renderRepositories();
    } catch {
      repositoryStatus.textContent = "GitHub repository data is unavailable";
      setRepositoryState("error");
    }
  } finally {
    repositoryRefresh.disabled = false;
    repositoryRefresh.textContent = "Refresh";
  }
}

[repositorySearch, repositoryLanguage, repositoryTopic, repositorySort].forEach((control) => control.addEventListener("input", renderRepositories));
repositorySearch.addEventListener("search", renderRepositories);
repositoryRefresh.addEventListener("click", () => loadRepositories(true));
repositoryRetry.addEventListener("click", () => loadRepositories(true));
loadRepositories();

const typingElement = document.querySelector(".typing");
if (typingElement && !reducedMotion.matches) {
  const text = typingElement.dataset.text;
  let index = 0;
  const type = () => {
    typingElement.textContent = text.slice(0, index++);
    if (index <= text.length) window.setTimeout(type, 65);
  };
  window.setTimeout(type, 500);
} else if (typingElement) typingElement.textContent = typingElement.dataset.text;

if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorRing = document.querySelector(".cursor-ring");
  let ringX = 0;
  let ringY = 0;
  window.addEventListener("mousemove", (event) => {
    cursorDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    ringX += (event.clientX - ringX) * 0.18;
    ringY += (event.clientY - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  }, { passive: true });
  document.querySelectorAll("a, button, .project-card").forEach((element) => {
    element.addEventListener("mouseenter", () => body.classList.add("cursor-active"));
    element.addEventListener("mouseleave", () => body.classList.remove("cursor-active"));
  });
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    element.addEventListener("mouseleave", () => { element.style.transform = ""; });
  });
}

window.addEventListener("load", () => body.classList.add("page-loaded"));
document.querySelector("#current-year").textContent = String(new Date().getFullYear());