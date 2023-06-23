import React, { useRef, useState } from 'react';
import PropTypes from "prop-types";
import PinInput from './PinInput';


const Pin = ({length,perInputBox}) => {
    const [inputBoxLength] = useState(new Array(length).fill(""));
    const inputRef = useRef([]);
    console.log(inputRef);

    const onChangeHandler = ( e,index ) => {
        if(index < length-1){
            inputRef.current[index +1].focus();
        }
    }
  return (
    <div>
      {inputBoxLength.map((item,index)=>{
        return <PinInput ref={(inputRefElement)=>{
            console.log(inputRefElement,index);
            inputRef.current[index] = inputRefElement;
            console.log(inputRef.current);
        }}
            key={index} perInputBox ={perInputBox} 
            onChange={(e) => onChangeHandler(e,index)}/>
      })}
    </div>
  );
}

export default Pin;

Pin.propTypes = {
    length: PropTypes.number.isRequired,
};