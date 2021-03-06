import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "../reducer/contactReducer";

export const store = createStore(contactReducer, composeWithDevTools());
