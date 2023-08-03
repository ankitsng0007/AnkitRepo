import React, { useEffect, useState } from 'react';
import { getTodos } from './api';

const TodoApp = () => {
  const [todos, setTodos] = useState( [] );

  useEffect(()=>{
    getTodos().then((d) => {
      console.log(d);
    });
  }, []);
  return (
    <div>
      TodoApp
    </div>
  );
}

export default TodoApp;
