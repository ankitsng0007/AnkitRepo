import {legacy_createStore,compose, applyMiddleware, combineReducers} from "redux";
import { reducer as AppReducer } from "./AppData/reducer";
import { reducer as AuthReducer } from "./AuthData/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({AuthReducer,AppReducer});
const composeEnhancer= window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const customMiddleware = store => next => action =>{
    if(typeof action === "function"){
        //action ->login(dispatch)
        return action(store.dispatch)
    }
}
const store = legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);
export {store};