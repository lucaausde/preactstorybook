import { FunctionalComponent as FC, h } from "preact";
import { styled, setPragma } from "goober";
import { media } from "./constants/media/media";

// setTheme([string]) also avaliable!
import { toggleTheme } from "./constants/theme/cssThemeCheck";

setPragma(h);

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
        Change Theme
      </button>
      <Text>{process.env.WELCOMEMESSAGE}</Text>
    </div>
  );
};

export default App;
