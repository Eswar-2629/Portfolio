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

const projectFilters = [...document.querySelectorAll(".project-filter")];
const projectCards = [...document.querySelectorAll(".project-card[data-category]")];
projectFilters.forEach((filter) => filter.addEventListener("click", () => {
  const selected = filter.dataset.filter;
  projectFilters.forEach((button) => {
    const active = button === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  projectCards.forEach((card, index) => {
    const categories = card.dataset.category.split(" ");
    const visible = selected === "all" || categories.includes(selected);
    card.hidden = !visible;
    card.classList.remove("filter-enter");
    if (visible) {
      card.style.setProperty("--filter-delay", reducedMotion.matches ? "0ms" : `${index % 6 * 45}ms`);
      requestAnimationFrame(() => card.classList.add("filter-enter"));
    }
  });
}));

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