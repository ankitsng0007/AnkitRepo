import React, { useState } from 'react';
import TodoItems from './TodoItems';


const initialState = [
  {id:1, title:"Learn React", status:false },
  {id:1, title:"Learn Java", status:false },
  {id:1, title:"Learn Python", status:false },
]
const Todos = () => {
  const [todo,setTodo] = useState(initialState);

  return (
    <div>
      <h1>Todos</h1>
      <input />
      <button>Add</button>
      {Todos.length && Todos.map(item =>{
        return (<TodoItems key={item.id} {...item}/>)
      })}

    </div>
  );
}

export default Todos;
