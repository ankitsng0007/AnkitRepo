import React, { useState } from 'react';

function TodoInput() { 
    const [text,setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      <button>Add Todo</button>
    </div>
  );
}

export default TodoInput;
