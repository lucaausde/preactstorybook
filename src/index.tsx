import { h, render } from "preact";

import "./constants/styles/globals.scss";
import App from "./App";
import ThemeProvider from "./constants/themes/ThemeProvider";
import "./constants/themes/helpers/cssThemeCheck";

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// Update on upgrade

if (process.env.NODE_ENV === "production") {
  const runtime = require("offline-plugin/runtime");
  runtime.install({
    onUpdateReady: () => {
      runtime.applyUpdate();
    },
    onUpdated: () => {
      window.location.reload();
    },
  });
}

// Redirect traffic to https

// if (location.protocol === "http:" && localStorage.tried_ssl !== "true") {
//   localStorage.tried_ssl = "true";
//   location.href = "https" + location.href.substring(4);
// }
