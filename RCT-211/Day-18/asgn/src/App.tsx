import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './Components/TodoApp';
import { getTodos } from './Components/api';

function App() {

  useEffect(()=>{
    getTodos().then((d)=>{
      console.log(d);
    });
  });
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
