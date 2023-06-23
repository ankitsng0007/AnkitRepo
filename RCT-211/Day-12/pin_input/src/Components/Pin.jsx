import React from 'react';

const Pin = ({length}) => {
  return (
    <div>
      {new Array(length).fill("w").map((item,index)=>{
        return <input key={index}/>
      })}
    </div>
  );
}

export default Pin;
