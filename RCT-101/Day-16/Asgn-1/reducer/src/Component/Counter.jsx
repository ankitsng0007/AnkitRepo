import {useState,useReducer} from "react";
import { Reducer } from "./Reducer";
import { IncAction } from "./Action";
import { DecAction } from "./Action";
import { ResetAction } from "./Action";
import { IncrementByValue } from "./Action";
import { DecrementByValue } from "./Action";

export const Counter=()=>{
    const [state,dispatch]=useReducer(Reducer,{
        count:0,
        isAuth1:true,
        todo:[]
    });
    const [inputValue,setInputValue]= useState("");
   return(
    <div>
        <h1>Counter : {state.count}</h1>
        <div>
        <button onClick={()=>dispatch(DecAction)}>DEC</button>
        <button onClick={()=>dispatch(ResetAction)}>RESET</button>
        <button onClick={()=>dispatch(IncAction)}>INC</button>
        </div>
        <br/>
        <div>
            <input placeholder="Increase By Value"
             type="number" value={inputValue} onChange={(e)=>setInputValue(Number(e.target.value))}/>
             <button onClick={()=>dispatch(IncrementByValue(inputValue))}>Increase By Value</button>
             <button onClick={()=>dispatch(DecrementByValue(inputValue))}>Decrease By Value</button>
        </div>
    </div>
   )
}