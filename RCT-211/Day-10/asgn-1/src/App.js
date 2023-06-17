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
    </div>
  );
}

export default App;
