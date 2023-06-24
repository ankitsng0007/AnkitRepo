import React, { useRef, useState } from 'react';
import PropTypes from "prop-types";
import PinInput from './PinInput';


const Pin = ({length,perInputBox=2,setPin}) => {

    const [inputBoxLength] = useState(new Array(length).fill(""));
    const [inputBoxValue] = useState(new Array(length).fill(""));
    const inputRef = useRef([]);
    //console.log(inputRef);

    const onChangeHandler = ( e,index ) => {
      inputBoxValue[index]= e.target.value;
        if(e.target.value.length > 0 && index < length-1){
            inputRef.current[index +1].focus();
        }
        //console.log(inputBoxValue)
        setPin(inputBoxValue.join(""));
    };
    const backspaceHandler = (e,index ) => {
      if(index > 0){
        inputRef.current[index - 1].focus(); 
      }
      inputBoxValue[index] = e.target.value;
      //console.log(inputBoxValue);
      setPin(inputBoxValue.join(""));
    };
  
    const handlePaste = (e)=>{
      e.preventDefault();
      const data = e.clipboardData.getData("text").split("").filter((item,index)=> index < length );

      data.forEach((item,index)=>{
        inputBoxValue[index] = item;
        inputRef.current[index].value = item;
        if(index < length -1){
          inputRef.current[index + 1].focus();
        }
      })
    }
  return (
    <div onPaste={handlePaste}>
      {inputBoxLength.map((item,index)=>{
        return <PinInput 
            ref={(inputRefElement)=>{
            //console.log(inputRefElement,index);
            inputRef.current[index] = inputRefElement;
            //console.log(inputRef.current);
        }}
            key={index} 
            onChange={(e) => onChangeHandler(e,index)}
            perInputBox ={perInputBox} 
            backspaceHandler = {(e) => backspaceHandler(e,index)}
            />
      })}
    </div>
  );
}

export default Pin;

Pin.propTypes = {
    length: PropTypes.number.isRequired,
};