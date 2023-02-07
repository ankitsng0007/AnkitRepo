import React from "react";

export const TodoList=({title,status,id,handleToggle,handleDelete})=>{
    return(
        <ul style={{
            display:"flex",
            gap:"1rem",
            justifyContent:"space-around"
        }}>
            <b>{title}</b> {status? "Done":"Not Done"}
            <button onClick={()=>handleToggle(id,!status)}>Toggle Status</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </ul>
     )
}