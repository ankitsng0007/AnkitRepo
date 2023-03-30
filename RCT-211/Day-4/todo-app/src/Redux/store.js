import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import { reducer as CounterReducer } from "./CounterReducer/reducer";
import { reducer as TodoReducer } from "./TodoReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

const logger1=(store)=>(next)=>(action)=>{
    console.log("Next" ,action)
    return next(action);
}
const rootReducer = combineReducers({CounterReducer, TodoReducer,AuthReducer});
const store = legacy_createStore(rootReducer,applyMiddleware(logger1));

export {store};