import React, { useState } from 'react';

function TodoInput() { 
    const [text,setText] = useState("");
    const handlePost=()=>{
      
    }
  return (
    <div>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handlePost}>ADD TODO</button>
    </div>
  );
}

export default TodoInput;
