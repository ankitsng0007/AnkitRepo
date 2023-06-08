import {legacy_createStore,compose, applyMiddleware} from "redux";
import { reducer } from "./AppData/reducer";
import thunk from "redux-thunk";

const composeEnhancer= window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = legacy_createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);
export {store};