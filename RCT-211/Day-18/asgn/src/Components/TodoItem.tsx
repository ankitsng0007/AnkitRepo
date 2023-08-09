import React from 'react';
import { Todo, colorMap } from './constants';

type TodoItemProps = Todo ;
const TodoItem = (props : TodoItemProps) => {
  return (
    <div style={{padding:"5px",backgroundColor: colorMap[props.type]}}>
      {props.message} - {props.likes}
    </div>
  );
}

export default TodoItem;
