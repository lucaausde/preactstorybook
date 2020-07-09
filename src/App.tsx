import { FunctionalComponent as FC, h } from "preact";
import { styled, setPragma } from "goober";
import { media } from "./constants/media/media";
import { connect } from "unistore/preact";
import store from "./constants/themes/helpers/store";
import { lightTheme, darkTheme } from "./constants/themes/helpers/themes";

setPragma(h);

interface IText {
  thingy?: boolean;
  theme?: any;
}

interface IApp {
  themeName?: string;
  theme?: object;
}

const Text = styled<IText>("div")`
  font-size: 16px;
  ${media.greaterThan("small")} {
    color: ${(props) => props.theme.text};
  }
`;

const App: FC<IApp> = ({ themeName, theme }) => {
  return (
    <div>
      <button
        onClick={() => {
          if (themeName == "light") {
            store.setState(darkTheme);
          } else {
            store.setState(lightTheme);
          }
        }}
      >
        Change Theme
      </button>
      <Text theme={theme}>{process.env.WELCOMEMESSAGE}</Text>
    </div>
  );
};

const Export = connect<any, any, any, any>(["themeName", "theme"])(App);

export default Export;
