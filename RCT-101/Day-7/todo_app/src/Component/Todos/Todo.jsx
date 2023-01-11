import React from "react";
import {useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const getTodo=()=>{
    return fetch("http://localhost:5000/tasks")
    .then(res=>(res.json()))
}

const addTodo=(todo)=>{
    return fetch("http://localhost:5000/tasks",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"  
        },
        body: JSON.stringify(todo)
    })
    .then(res=>res.json())
}

function Todo(){
    const [todo,setTodo]=useState([]);
    useEffect(()=>{
        getTodo()
        .then(res=>{
            setTodo(res)
            console.log(res);
        })
        .catch(err=>{

        })
    },[])

    const handleAdd =(text)=>{
        const item={
            title:text,
            status:false
        }
        addTodo(item)
        .then(res=>{
            console.log(res)
        })
    };
    
    return(
        <div>
        <AddTodo handleAdd={handleAdd} />
        <TodoList/>
        </div>
    )
};
export default Todo;