import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
function App() {
  const[count,setCount] = useState(5);
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCount((prevCount)=>{
        if(prevCount===0){
          clearInterval(intervalId)
          return 0;
        }
        return prevCount-1;
      });
    },1000)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        Countdown Timer : {count}
      </header>
    </div>
  );
}

export default App;
