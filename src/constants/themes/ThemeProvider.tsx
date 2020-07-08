import { FunctionalComponent as FC, h, ComponentChildren } from "preact";
import { Provider } from "unistore/preact";
import theme from "./store";

// https://codesandbox.io/s/l7y7w5qkz9?file=/index.js
// https://github.com/developit/unistore

interface IThemeProvider {
  children: ComponentChildren;
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  return (
    <Provider store={theme}>
      <div>{children}</div>
    </Provider>
  );
};

export default ThemeProvider;
