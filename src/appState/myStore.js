import { createStore } from "redux";
import reducer from "./productReducer";

const initialStore = {
  products: [],
  totalProducts: 0,
};

export const store = createStore(reducer, initialStore);
