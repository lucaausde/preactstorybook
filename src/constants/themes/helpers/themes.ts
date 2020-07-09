import { StoreState } from "./store";
import light from "../light";
import dark from "../dark";

const lightTheme: StoreState = {
  themeName: "light",
  theme: light,
};

const darkTheme: StoreState = {
  themeName: "dark",
  theme: dark,
};

export { lightTheme, darkTheme };
