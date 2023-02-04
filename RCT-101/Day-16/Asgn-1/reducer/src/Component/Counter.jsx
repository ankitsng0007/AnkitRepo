import {useState,useReducer} from "react";

const reducer=(state,action)=>{
  if(action.type==="IncrementCount"){
    return state +1;
  }
  if(action.type==="DecrementCount"){
    return state - 1;
  }
    return state;
}
const IncAction={type:"IncrementCount"};
const decAction={type:"DecrementCount"};
export const Counter=()=>{
    const [state,dispatch]=useReducer(reducer,0)
   return(
    <div>
        <h1>Counter : {state}</h1>
        <button onClick={()=>dispatch(IncAction)}>INC</button>
        <button onClick={()=>dispatch(decAction)}>DEC</button>
    </div>
   )
}