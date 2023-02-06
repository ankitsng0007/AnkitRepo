import React from "react";

export const TodoList=({title,status,id})=>{
    return(
        <div>
            <b>{title}</b> {status? "Done":"Not Done"}
        </div>
    )
}