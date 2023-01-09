import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
function App() {
  const[count,setCount] = useState(5);
  useEffect(()=>{
    setInterval(()=>{
      setCount((prevCount)=>prevCount-1);
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
