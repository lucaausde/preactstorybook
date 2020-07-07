import {
  FunctionalComponent as FC,
  h,
  ComponentChildren,
  createContext,
} from "preact";
import { useState } from "preact/hooks";
export let Theme = createContext("light");

interface IThemeProvider {
  children: ComponentChildren;
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  let [theme, setTheme] = useState("light");
  return (
    <Theme.Provider value={theme}>
      <button
        onClick={() => {
          if (theme == "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        Toggle Theme
      </button>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
