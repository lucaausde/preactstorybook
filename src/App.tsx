import { FunctionalComponent as FC, h } from "preact";
import { styled, setPragma } from "goober";

setPragma(h);

interface IText {
  thingy?: boolean;
}

const Text = styled<IText>("div")`
  font-size: 16px;
  color: black;
`;

const App: FC = () => {
  return <Text>{process.env.WELCOMEMESSAGE}</Text>;
};

export default App;
