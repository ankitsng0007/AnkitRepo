import React from 'react';

const expensiveOperation =(ms) =>{
    const start = Date.now();
    while(Date.now()-start < ms){
        continue;
    }
    return true;
};

const TodoItems = ({ id,title,status,handleToggle,handleDelete }) => {
  //syncronus function that takes some time
  expensiveOperation(200);

    return (
    <div style={{display:"flex", justifyContent:"center" }}>
      <div>{title}</div>
      <div>{status ? "True" : "False" }</div>
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default React.memo(TodoItems);
