import { useState,useEffect } from "react";
import { AddTodo } from "./AddTodo";
import { getTodo } from "./api";
import { TodoList } from "./TodoList";

export const Todo=()=>{
    const [todo,setTodo]=useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        getTodo({page,limit:2,sort:"title",order:"asc"})
        .then((res)=> setTodo(res.data))
        .catch((err)=>console.log("Error is", err))
        .finally(()=>console.log("Call Completed"))
    },[page]);

    const handleAdd=(text)=>{
      const item={
        title:text,
        status:false
      }
      console.log(item);
    }

    return (
        <div>
            <AddTodo handleAdd={handleAdd}/>
        <h1>Todo</h1>
        {  todo.map((el)=>(
                <TodoList 
                title={el.title} 
                status={el.status} 
                id={el.id} 
                key={el.id}/>
            ))}
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
    )
}