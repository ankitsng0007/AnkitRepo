import React from "react";
const AddTodo=({handleAdd})=>{
    const [text,setText] = React.useState("")
    const HandleChange=e=>{
        setText(e.target.value)
    };
    const HandleSubmit = ()=>{
        handleAdd(text);
    }
    return (
        <div>
            <input onChange={HandleChange} placeholder="Add Something"/>
            <button onClick={HandleSubmit}>Add Task</button>
        </div>
    )
};
export default AddTodo;