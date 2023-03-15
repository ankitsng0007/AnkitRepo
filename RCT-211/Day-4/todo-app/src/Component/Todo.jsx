import React ,{useEffect}from 'react';
import TodoInput from './TodoInput';

function Todo() {
    const getTodos=()=>{

    }
    useEffect(()=>{
      getTodos();
    },[])
  return (
    <div>
      <h1>TODO</h1>
      <TodoInput/>
    </div>
  );
}

export default Todo;
