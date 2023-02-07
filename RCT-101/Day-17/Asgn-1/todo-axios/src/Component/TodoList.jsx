import React from "react";

export const TodoList=({title,status,id,handleToggle,handleDelete})=>{
    return(
        <div style={{
            display:"flex",
            gap:"1rem",
            justifyContent:"space-between"
        }}>
            <b>{title}</b> {status? "Done":"Not Done"}
            <button onClick={()=>handleToggle(id,!status)}>Toggle Status</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
     )
}