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
      AddNewTodo(item)
      .then(()=>{
        handleGetTodo(); 
        }).catch((err)=>setLoading(false)) 
    }
    const handleToggle=(id,status)=>{
        setLoading(true)
        ToggleTodo(id,status)
        .then(()=>{
        handleGetTodo(); 
        }).catch((err)=>setLoading(false))   
    }
    const handleDelete=(id)=>{
        setLoading(true)
        DeleteTodo(id)
        .then(()=>{
            handleGetTodo(); 
            }).catch((err)=>setLoading(false))   
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
                handleToggle={handleToggle}
                handleDelete={handleDelete}/>
            ))}
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
            </>
    )
}