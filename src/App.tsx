import { FunctionalComponent as FC, h } from "preact";
import { styled, setPragma } from "goober";
import { media } from "./constants/media/media";

setPragma(h);

interface IText {
  thingy?: boolean;
}

const Text = styled<IText>("div")`
  font-size: 16px;
  ${media.greaterThan("small")} {
    color: green;
  }
`;

const App: FC = () => {
  return <Text>{process.env.WELCOMEMESSAGE}</Text>;
};

export default App;
