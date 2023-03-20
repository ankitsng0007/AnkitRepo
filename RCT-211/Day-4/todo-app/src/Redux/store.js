import { legacy_createStore } from "redux";
import { reducer as TodoReducer } from "./reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
const store = legacy_createStore(TodoReducer);

export {store};