import {useState,useReducer} from "react";

export const Counter=()=>{
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
   return(
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
    </div>
   )
}