import React, { useRef, useState } from 'react';
import PropTypes from "prop-types";
const Pin = ({length,maxLength}) => {
    const [inputBoxLength] = useState(new Array(length).fill(""));
    const inputRef = useRef([]);
    console.log(inputRef);
  return (
    <div>
      {inputBoxLength.map((item,index)=>{
        return <input ref={(inputRefElement)=>{
            console.log(inputRefElement,index);
            inputRef.current[index] = inputRefElement;
            console.log(inputRef.current);
        }}
            key={index} maxLength={maxLength}/>
      })}
    </div>
  );
}

export default Pin;

Pin.propTypes = {
    length: PropTypes.number.isRequired,
};