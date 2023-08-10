import React from 'react';
import { Todo, colorMap } from './constants';
import { updateTodo } from './api';


interface TodoItemProps extends Todo {
  onUpdate : (todo: Todo) => void;
}

//type TodoItemProps = Todo ;
const TodoItem = (props : TodoItemProps) => {
  const handleLikeCount = async () =>{
    let updatedTodo = await updateTodo({...props, likes: props.likes +1,});

    props.onUpdate(updatedTodo);
  };

  return (
    <div style={{padding:"5px",backgroundColor: colorMap[props.type]}}>
      {props.message} - {props.likes}
      <button onClick={handleLikeCount}>Like</button>
    </div>
  );
}

export default TodoItem;
