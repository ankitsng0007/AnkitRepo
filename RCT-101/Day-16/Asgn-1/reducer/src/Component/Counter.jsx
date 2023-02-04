import {useState,useReducer} from "react";
import { Reducer } from "./Reducer";


const IncAction={type:"IncrementCount"};
const decAction={type:"DecrementCount"};
export const Counter=()=>{
    const [state,dispatch]=useReducer(Reducer,0)
   return(
    <div>
        <h1>Counter : {state}</h1>
        <button onClick={()=>dispatch(IncAction)}>INC</button>
        <button onClick={()=>dispatch(decAction)}>DEC</button>
    </div>
   )
}