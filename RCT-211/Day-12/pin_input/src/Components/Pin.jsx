import React, { useRef, useState } from 'react';
import PropTypes from "prop-types";
import PinInput from './PinInput';


const Pin = ({length,perInputBox=2}) => {

    const [inputBoxLength] = useState(new Array(length).fill(""));
    const [inputBoxValue] = useState(new Array(length).fill(""));
    const inputRef = useRef([]);
    //console.log(inputRef);

    const onChangeHandler = ( e,index ) => {
      inputBoxValue[index]= e.target.value;
        if(e.target.value.length > 0 && index < length-1){
            inputRef.current[index +1].focus();
        }
        console.log(inputBoxValue)
    };
    const backspaceHolder = (e,index ) => {
      if(index > 0){
        inputRef.current[index - 1].focus(); 
      }
      inputBoxValue[index] = e.target.value;
      console.log(inputBoxValue);
    };
  
  return (
    <div>
      {inputBoxLength.map((item,index)=>{
        return <PinInput ref={(inputRefElement)=>{
            //console.log(inputRefElement,index);
            inputRef.current[index] = inputRefElement;
            //console.log(inputRef.current);
        }}
            key={index} perInputBox ={perInputBox} 
            onChange={(e) => onChangeHandler(e,index)}
            backspaceHolder = {(e) => backspaceHolder(e,index)}
            />
      })}
    </div>
  );
}

export default Pin;

Pin.propTypes = {
    length: PropTypes.number.isRequired,
};