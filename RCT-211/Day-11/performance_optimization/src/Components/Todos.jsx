import React, { useState } from 'react';
import TodoItems from './TodoItems';


const initialState = [
  {id:1, title:"Learn React", status:false },
  {id:1, title:"Learn Java", status:false },
  {id:1, title:"Learn Python", status:false },
]
const Todos = () => {
  const [todos,setTodos] = useState(initialState);
  const [currentTodo,setCurrentTodo] = useState("");
  
  const handleChange = (e)=>{
    setCurrentTodo(e.target.value);
  };
  const handleAddTask = ()=>{
    const payload = {
      id: todos.length +1,
      status: false,
      title: currentTodo
    };
    setTodos([...todos,payload]);
    setCurrentTodo("");
  };
  const handleToggle = ()=>{
    let newtodos = todos.map((item)=>{
      return item.id===id ? {...item,status: !item.status} : item;
    });
    setTodos(newtodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      <input value={currentTodo} onChange={handleChange}/>
      <button onClick={handleAddTask}>Add</button>
      {todos.length && todos.map(item =>{
        return (<TodoItems key={item.id} {...item}/>)
      })}

    </div>
  );
}

export default Todos;
