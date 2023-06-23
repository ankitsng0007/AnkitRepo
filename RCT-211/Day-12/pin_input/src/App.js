
import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {
  const [pinInput,setPinInput] = useState("");

  return (
    <div className="App">
     <h1>Pin Input</h1>
     <Pin length={5}/>
     OTP is {pinInput}
     
    </div>
  );
}

export default App;
