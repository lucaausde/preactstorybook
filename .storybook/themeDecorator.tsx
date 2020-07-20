import { h } from "preact";
import "../src/constants/styles/globals.scss";
import ThemeProvider from "../src/constants/themes/ThemeProvider";
import "../src/constants/themes/helpers/cssThemeCheck";

const ThemeDecorator = (storyFn) => (
  <ThemeProvider>
    <div>{storyFn()}</div>
  </ThemeProvider>
);

export default ThemeDecorator;
