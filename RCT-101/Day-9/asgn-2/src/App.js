import logo from './logo.svg';
import './App.css';
import { useRef } from "react";

function App() {
  const inputRef=useRef(null);
  const addTodo=()=>{

  }
  console.log(inputRef)
  return (
    <div className="App">
        <input Placeholder="Add Something" ref={inputRef}/>
        <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default App;
