import logo from './logo.svg';
import './App.css';
import {useState,useRef} from "react";

function App() {
  const [timer,setTimer] = useState(0)
  const ref=useRef(null);

  const startTimer=()=>{
    ref.current = setInterval(()=>{
      setTimer((prevTimer)=>prevTimer +1)
    },1000)
  };
  const stopTimer = ()=>{
     clearInterval(ref.current);
  };
  console.log(ref.current);
  return (
    <div className="App">
      <h1>Timer : {timer}</h1>
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button>Reset</button>
    </div>
  );
}

export default App;
