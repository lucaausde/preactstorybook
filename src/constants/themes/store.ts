import createStore, { Store } from "unistore";
import light from "./light";

export interface StoreState {
  themeName: string;
  theme: object;
}

export const initialState: StoreState = {
  themeName: "light",
  theme: light,
};

const store: Store<StoreState> = createStore(initialState);

export default store;
