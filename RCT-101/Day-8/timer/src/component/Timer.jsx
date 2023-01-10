import { useState,useEffect } from "react";

function Timer(){
    const[count,setCount] = useState(0);
    useEffect(()=>{
      const intervalId = setInterval(()=>{
        setCount((prevCount)=>prevCount+1);
      },1000)
      const cleanUp = ()=>{
      clearInterval(intervalId);
      }
      return cleanUp;
    },[]);

    return (
    <div style={{backgroundColor:"white",color:"black"}}>
    <h3>Count Timer : {count}</h3>
    </div>
    )
}
export default Timer;