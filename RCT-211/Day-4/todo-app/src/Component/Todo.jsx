import React ,{useEffect}from 'react';
import TodoInput from './TodoInput';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { getTodosError, getTodosRequest, getTodosSuccess } from '../Redux/action';

function Todo() {
    const dispatch = useDispatch();
    const getTodos=()=>{
        dispatch(getTodosRequest());
      axios.get("http://localhost:8080/todos")
      .then((res)=>{
        dispatch(getTodosSuccess(res.data));
        //sucess
      }).catch((err)=>{
        //error
        dispatch(getTodosError());
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
