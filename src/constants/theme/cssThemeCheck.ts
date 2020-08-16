const LISTEN_DARK = "(prefers-color-scheme: dark)";
const LISTEN_LIGHT = "(prefers-color-scheme: light)";

const root = document.querySelector("html");

export function setTheme(type: string) {
  root.setAttribute("data-theme", type);
}

export function toggleTheme() {
  if (root.getAttribute("data-theme") == "dark") {
    root.setAttribute("data-theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
  }
}

if (window.matchMedia(LISTEN_DARK).matches) {
  setTheme("dark");
} else {
  setTheme("light");
}

function themeListener({ matches, media }) {
  if (!matches) {
    return;
  }
  console.log("preferenced theme", media);
  if (media === LISTEN_DARK) {
    setTheme("dark");
  } else if (media === LISTEN_LIGHT) {
    setTheme("light");
  }
}

window.matchMedia(LISTEN_DARK).addListener(themeListener);
window.matchMedia(LISTEN_LIGHT).addListener(themeListener);
