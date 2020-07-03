import { FunctionalComponent as FC, h } from "preact";
import { styled, setPragma } from "goober";

setPragma(h);

const Text = styled("div")`
  font-size: 16px;
`;

const App: FC = () => {
  return <Text>{process.env.WELCOMEMESSAGE}</Text>;
};

export default App;
