import { FunctionalComponent as FC, h } from "preact";
import { styled, setup } from "goober";
import { media } from "./constants/media/media";

// or set a theme with setTheme("yourtheme")
import { toggleTheme } from "./constants/theme/helpers/cssThemeCheck";

setup(h);

interface IText {
  theme?: any;
}

interface IApp {}

const Text = styled<IText>("div")`
  font-size: 16px;
  ${media.greaterThan("small")} {
    color: var(--color-text);
  }
`;

const App: FC<IApp> = () => {
  return (
    <div>
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Toggle Theme
      </button>
      <Text>{process.env.WELCOMEMESSAGE}</Text>
    </div>
  );
};

export default App;
