import React, { useEffect, useState } from 'react';
import { getTodos } from './api';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState( [] );

  useEffect(()=>{
    getTodos().then((d) => {
      console.log(d);
    });
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      {todos.map((item)=> (
        <div key={item.id}>
          <TodoItem />
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
