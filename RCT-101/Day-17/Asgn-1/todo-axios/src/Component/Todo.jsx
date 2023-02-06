import { useState,useEffect } from "react";
import { getTodo } from "./api";

export const Todo=()=>{
    const [todo,setTodo]=useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        getTodo({page,limit:2}).then((res)=> setTodo(res.data))
    },[page]);
    return (
        <div>
        <h1>Todo</h1>
        {  todo.map((el)=>(
                <h3 key={el.id}>{el.title}</h3>
            ))}
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
    )
}