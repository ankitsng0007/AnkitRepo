import logo from './logo.svg';
import './App.css';
import {useState,useRef} from "react";

function App() {
  const [timer,setTimer] = useState(0)
  const ref=useRef(null);

  const fixTimeString = (time)=>{
  return time <10 ? `0${time}`: time;
  }
  const formatTimeToString = (time) =>{
    const seconds = time % 60;
    const minutes = Math.floor(time/60)%60;
    const outputString = `00:${fixTimeString(minutes)}:${fixTimeString(seconds)}`;
    return outputString;
  }

  const startTimer=()=>{
    if(ref.current !== null)return;
    ref.current = setInterval(()=>{
      setTimer((prevTimer)=>prevTimer +1)
    },1000)
  };
  const stopTimer = ()=>{
     clearInterval(ref.current);
     ref.current = null;
  };
  const resetTimer = ()=>{
    stopTimer();
    setTimer(0);
  }
  console.log(ref.current);
  return (
    <div className="App">
      <h1>{formatTimeToString(timer)}</h1>
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default App;
