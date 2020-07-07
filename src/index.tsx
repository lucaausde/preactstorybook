import { h, render } from "preact";

import "./constants/styles/globals.scss";
import App from "./App";

render(<App />, document.getElementById("root"));

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
