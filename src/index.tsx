import { h, render } from "preact";

import "./constants/styles/globals.scss";
import App from "./App";

render(<App />, document.getElementById("root"));

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
