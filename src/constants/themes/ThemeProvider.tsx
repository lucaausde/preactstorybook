import { FunctionalComponent as FC, h, ComponentChildren } from "preact";
import { Provider } from "unistore/preact";
import theme from "./helpers/store";

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
