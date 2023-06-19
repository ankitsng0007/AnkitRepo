import React from 'react';

const TodoItems = ({ id,title,status }) => {
  return (
    <div style={{display:"flex", justifyContent:"center" }}>
      <div>{title}</div>
      <div>{status ? "True" : "False" }</div>
    </div>
  );
}

export default TodoItems;
