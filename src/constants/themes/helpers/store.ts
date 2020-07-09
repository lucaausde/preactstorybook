import createStore, { Store } from "unistore";
import { lightTheme } from "./themes";

export interface StoreState {
  themeName: string;
  theme: object;
}

const store: Store<StoreState> = createStore(lightTheme);

export default store;
