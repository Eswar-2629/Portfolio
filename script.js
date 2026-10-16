const themeButtons = document.querySelectorAll("[data-set-theme]");
const availableThemes = new Set(["modern", "traditional", "professional"]);

function setTheme(theme) {
  if (!availableThemes.has(theme)) return;

  document.body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.setTheme === theme));
  });

  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {}
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.setTheme));
});

try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) setTheme(savedTheme);
} catch {}

document.querySelector("#current-year").textContent = String(new Date().getFullYear());