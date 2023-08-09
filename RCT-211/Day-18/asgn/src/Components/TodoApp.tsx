import React, { useEffect, useState } from 'react';
import { getTodos } from './api';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { Todo } from './constants';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[] >( [] );

  const onAdd = (todo : Todo) => {
    setTodos( [...todos, todo] );
  };

const onUpdate = (updatedTodo : Todo) =>{
  let updatedTodos = todos.map((item) =>{
    if(item.id === updatedTodo.id){
      return updatedTodo;
    }
    return item;
  });
  setTodos(updatedTodos);
};

  useEffect(()=>{
    getTodos().then((d) => {
      setTodos(d);
    });
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAdd={onAdd} />
      {todos.map((item)=> (
          <TodoItem key={item.id} {...item} onUpdate={onUpdate}/>
      ))}
    </div>
  );
}

export default TodoApp;
