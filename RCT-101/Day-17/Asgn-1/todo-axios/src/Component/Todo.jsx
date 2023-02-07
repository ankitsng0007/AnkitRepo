import { useState,useEffect } from "react";
import { AddTodo } from "./AddTodo";
import { getTodo,AddNewTodo,ToggleTodo,DeleteTodo } from "./api";
import { TodoList } from "./TodoList";

export const Todo=()=>{
    const [loading,setLoading]=useState(false);
    const [todo,setTodo]=useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        handleGetTodo()
    },[page]);
    const handleGetTodo=()=>{
        setLoading(true)
        getTodo({page,limit:5,sort:"title",order:"asc"})
        .then((res)=> {
        setLoading(false) 
        setTodo(res.data)})
        .catch((err)=>{
        setLoading(false)
        console.log("Error is", err)})
        .finally(()=>
        console.log("Call Completed"))
    };
    const handleAdd=(text)=>{
      const item={
        title:text,
        status:false
      }
      setLoading(true)
      AddNewTodo(item);
      handleGetTodo();
    }
    const handleToggle=(id,status)=>{
        ToggleTodo(id,status)  
        .then(()=>{
        handleGetTodo(); 
        })   
    }
    const handleDelete=(id)=>{
        DeleteTodo(id)  
        .then(()=>{
        handleGetTodo(); 
        })   
    }
    return (
        <>
        <div>
            {loading && "LOADING..."}
        </div>
        <div>
            <AddTodo handleAdd={handleAdd}/>
        <h1>Todo</h1>
        {  todo.map((el)=>(
                <TodoList 
                title={el.title} 
                status={el.status} 
                id={el.id} 
                key={el.id} 
                handleToggle={handleToggle}/>
            ))}
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
            </>
    )
}