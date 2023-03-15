import React ,{useEffect}from 'react';
import TodoInput from './TodoInput';
import axios from "axios";

function Todo() {
    const getTodos=()=>{
      axios.get("http://localhost:8080/todos")
      .then((res)=>{
        //sucess
      }).catch((err)=>{
        //error
      })
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
