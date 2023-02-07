import { useState,useEffect } from "react";
import { AddTodo } from "./AddTodo";
import { getTodo,AddNewTodo,ToggleTodo } from "./api";
import { TodoList } from "./TodoList";

export const Todo=()=>{
    const [loading,setLoading]=useState(false);
    const [todo,setTodo]=useState([]);
    const [page,setPage] = useState(1);
    const fetchUpdate
    useEffect(()=>{
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
    },[page]);

    const handleAdd=(text)=>{
      const item={
        title:text,
        status:false
      }
      setLoading(true)
      AddNewTodo(item);
    }
    const handleToggle=(id,newStatus)=>{
        ToggleTodo(id,newStatus)      
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