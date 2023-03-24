import { combineReducers, legacy_createStore } from "redux";
import { reducer as TodoReducer } from "./TodoReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

const rootReduccer = combineReducers({TodoReducer,AuthReducer});
const store = legacy_createStore(rootReduccer);

export {store};