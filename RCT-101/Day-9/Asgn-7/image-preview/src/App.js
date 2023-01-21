import logo from './logo.svg';
import './App.css';
import {useRef,useEffect} from "react";

function App() {
  const ref=useRef();
  useEffect(()=>{
  },[])
  const handleSubmit=(e)=>{
  
    console.log(e)
    
  }
  return (
    <div ref={ref} className="App">
        <h1>Image Preview Assignment</h1>
        <input type="file" ref={ref}/>
        <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
export default App;

