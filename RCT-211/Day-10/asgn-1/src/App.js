import logo from './logo.svg';
import './App.css';
import useTimeout from './Hooks/useTimeout';
import TimeoutComp from './Components/TimeoutComp';
import { useState } from 'react';

function App() {
 const showText = useTimeout();
 const [scrollNum,setScrollNum]=useState(0);

 const handleScrollEvent =()=>{
  setScrollNum((prev)=> prev + 1);
 };

  return (
    <div className="App">
  <h1>App Component</h1>
  <TimeoutComp/>  
  <div style={{position:"sticky",top:"100px"}}>
    <h3>Scroll Num :{ scrollNum }</h3>
  </div>
    </div>
  );
}

export default App;
