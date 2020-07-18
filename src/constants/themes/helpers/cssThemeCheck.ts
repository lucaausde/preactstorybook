import store from "./store";
import { lightTheme, darkTheme } from "./themes";

const LISTEN_DARK = "(prefers-color-scheme: dark)";
const LISTEN_LIGHT = "(prefers-color-scheme: light)";

const preferencedTheme = window
  .getComputedStyle(document.querySelector("html"))
  .getPropertyValue("content")
  .replace(/"/g, "");

function themeListener({ matches, media }) {
  if (!matches) {
    return;
  }
  if (media === LISTEN_DARK) {
    store.setState(darkTheme);
  } else if (media === LISTEN_LIGHT) {
    store.setState(lightTheme);
  }
}

// check for initial preference

if (
  preferencedTheme != null ||
  preferencedTheme != undefined ||
  preferencedTheme != ""
) {
  if (preferencedTheme == "dark") {
    store.setState(darkTheme);
  } else {
    store.setState(lightTheme);
  }

  // add listeners for media changes
  window.matchMedia(LISTEN_DARK).addListener(themeListener);
  window.matchMedia(LISTEN_LIGHT).addListener(themeListener);
} else {
  store.setState(lightTheme);
}
