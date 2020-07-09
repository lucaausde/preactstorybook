import store from "./store";
import { lightTheme, darkTheme } from "./themes";

const preferencedTheme = window
  .getComputedStyle(document.querySelector("html"))
  .getPropertyValue("content")
  .replace(/"/g, "");

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
} else {
  store.setState(lightTheme);
}
