import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import { reducer as CounterReducer } from "./CounterReducer/reducer";
import { reducer as TodoReducer } from "./TodoReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

const logger1=(store)=>(next)=>(action)=>{
    console.log("Dispatching action object 1-a")
    const temp= next(action); //go to the next middleware if there is any,else go to the reducer function.
    console.log("after temp 1-b");
    return temp;
}
const logger2=(store)=>(next)=>(action)=>{
    console.log("Dispatching action 2-c");
    const temp=next(action);
    console.log("after temp 2-d");
    return temp;
}
const rootReducer = combineReducers({CounterReducer, TodoReducer,AuthReducer});
const store = legacy_createStore(rootReducer,applyMiddleware(logger1,logger2));

export {store};