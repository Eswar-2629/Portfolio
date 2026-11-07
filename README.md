# Eswar Devisetty Portfolio

A responsive personal portfolio showcasing Eswar Devisetty's profile, skills, experience, education, and GitHub projects.

## Overview

The website is built with semantic HTML, CSS, and lightweight JavaScript. It includes:

- A responsive one-page portfolio layout
- Professional, dark, and other existing visual themes
- Light and dark theme controls
- Animated hero, skill, navigation, and project elements
- A searchable, sortable GitHub repository catalog
- Language and topic filters
- Loading, empty, error, and retry states
- Accessible labels, keyboard controls, and reduced-motion support

The portfolio also includes a downloadable resume through the `EswarDevisetty.pdf` file stored in the project directory.

## Portfolio Sections

- **Home:** Introduction, role, summary, and primary actions
- **About:** Professional profile and areas of interest
- **Skills:** Languages, web technologies, mobile tools, backend technologies, and platforms
- **Projects:** Automatically loaded GitHub repositories with descriptions, languages, topics, source links, and verified live demos
- **Experience:** Professional internship experience
- **Education:** Degree and certifications
- **Languages:** Spoken languages
- **Contact:** Email and professional links

## Technologies

- HTML5
- CSS
- JavaScript
- Git and GitHub
- GitHub REST API
- Vercel serverless functions

No front-end framework is required.

## Run Locally

### Static preview

From the project directory:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

The static server does not run the `/api` serverless function. It uses the public GitHub REST API fallback, so private and collaborator repositories may not appear.

### Full integration

For the GitHub proxy, live-demo verification, and authenticated repository access, use a Vercel-compatible local runtime such as:

```bash
npx vercel dev
```

## GitHub Repository Integration

The Projects section reads repository information from GitHub. It displays:

- Repository name
- Description or a clear missing-description label
- Primary language, when available
- Repository topics
- GitHub source link
- Verified live demo link, when available

Visitors can search repositories, sort them, and filter them by language or topic. Newly created public repositories appear when repository data is refreshed successfully.

The GitHub proxy is implemented in `api/github-repositories.js`. It does not create, modify, or delete repository content.

### Authentication

The full integration uses this optional server environment variable:

```text
GITHUB_TOKEN
```

Set it to a fine-grained GitHub personal access token with read-only repository metadata access. The token must remain server-side.

Do not add the token to HTML, JavaScript, README files, environment files committed to Git, logs, or browser storage.

### Caching and Refresh

- Server and CDN cache: 15 minutes
- Browser cache: 30 minutes in `localStorage`
- Browser cache key: `portfolio-github-repositories-v1`
- Page load: uses fresh browser data when available
- Refresh button: bypasses caches and requests current GitHub data
- API failure: displays an error message with a Retry button

## Live Project Previews

Representative browser screenshots are stored in `assets/previews/`. They are added only for publicly verified demo pages:

- Portfolio
- AI-Powered Phishing Email Detection
- AptiHire AI
- SIH

A repository without a verified preview or live demo is displayed without a fabricated image or deployment link.

## Project Structure

```text
index.html                 Main portfolio page
styles.css                 Layout, themes, components, and animations
script.js                  Navigation and dynamic repository behavior
api/github-repositories.js Serverless GitHub integration
EswarDevisetty.pdf         Downloadable resume
assets/previews/           Live project preview images
```

## Accessibility and Responsive Design

The portfolio uses visible text alongside icons, semantic controls, keyboard-visible focus states, mobile navigation, responsive project controls, and reduced-motion rules. Animated content remains available when motion is disabled.

## Security Notes

- GitHub integration performs read-only metadata requests.
- Authentication uses a server-side environment variable.
- The browser receives normalized repository information only.
- Missing or unverified live demos are not guessed.