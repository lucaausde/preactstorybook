import { h } from "preact";
import "../src/constants/styles/globals.scss";
import "../src/constants/theme/helpers/cssThemeCheck.ts";

const ThemeDecorator = (storyFn) => <div>{storyFn()}</div>;

export default ThemeDecorator;
