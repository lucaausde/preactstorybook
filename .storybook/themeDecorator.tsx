import { h } from "preact";
import "../src/constants/styles/globals.scss";

const ThemeDecorator = (storyFn) => <div>{storyFn()}</div>;

export default ThemeDecorator;
