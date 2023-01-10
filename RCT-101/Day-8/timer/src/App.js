import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import Timer from "./component/Timer"
function App() {
  const [showtimer,setShowtimer]=useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {showtimer && <Timer/>}
        <button onClick={()=>setShowtimer(!showtimer)}>
          {showtimer ? "HIDE COUNTER" : "SHOW COUNTER"}
        </button>
      </header>
    </div>
  );
}

export default App;
