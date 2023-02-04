import {useState,useReducer} from "react";
import { Reducer } from "./Reducer";
import { IncAction } from "./Action";
import { DecAction } from "./Action";
import { ResetAction } from "./Action";

export const Counter=()=>{
    const [state,dispatch]=useReducer(Reducer,0)
   return(
    <div>
        <h1>Counter : {state}</h1>
        <button onClick={()=>dispatch(DecAction)}>DEC</button>
        <button onClick={()=>dispatch(ResetAction)}>RESET</button>
        <button onClick={()=>dispatch(IncAction)}>INC</button>
    </div>
   )
}