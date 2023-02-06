import { useState } from "react";

export const AddTodo =({handleAdd})=>{
    const [text,setText] = useState("");
    const handleChange=(e)=>{
        setText(e.target.value);
    }
    const handleSubmit=()=>{
        handleAdd(text);
    }
    return(
        <div>
            <input onChange={handleChange} placeholder="Add New Task" type="text" />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}