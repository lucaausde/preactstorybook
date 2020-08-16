import { h } from "preact";
import "../src/constants/styles/globals.scss";
import "../src/constants/themes/helpers/cssThemeCheck";

const ThemeDecorator = (storyFn) => <div>{storyFn()}</div>;

export default ThemeDecorator;
