import React from "react";

export const Counter=()=>{
    const [count,setCount]=React.useState(0)
   return(
    <div>
        <h1>Counter : {count}</h1>
        <button>Inc</button>
        <button>Dec</button>
    </div>
   )
}