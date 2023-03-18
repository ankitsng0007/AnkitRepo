import React ,{useEffect}from 'react';
import TodoInput from './TodoInput';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getTodosError, getTodosRequest, getTodosSuccess, postTodosError, postTodosRequest, postTodosSuccess } from '../Redux/action';
import { store } from '../Redux/store';
import { POST_TODOS_ERROR } from '../Redux/actionTypes';

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((reduxStore)=>reduxStore.todos);
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
    const addTodo = (title)=>{
      if(title){
        const payload={
          title,
          status:false
        }
        dispatch(postTodosRequest());
        axios
          .post("http://localhost:8080/todos",payload)
          .then((res)=>{
            dispatch(postTodosSuccess(res.data));
          }).catch((err)=>{
            dispatch(postTodosError)
          })
      }
    }
    useEffect(()=>{
      getTodos();
    },[])
  return (
    <div>
      <h1>TODO</h1>
      <TodoInput addTodo={addTodo}/>
      {todos.length>0 && 
       todos.map((el)=>{
        return(
            <div key={el.id}>
                {el.title} - {el.status ? "True" : "False"}
            </div>
        )
       })}
    </div>
  );
}

export default Todo;
