import React, { useState } from 'react';

const Pin = ({length}) => {
    const [inputBoxLength] = useState(new Array(length).fill(""));

  return (
    <div>
      {inputBoxLength.map((_,index)=>{
        return <input key={index}/>
      })}
    </div>
  );
}

export default Pin;
