import React ,{forwardRef} from 'react';

const PinInput = forwardRef(({perInputBox,onChange},ref) => {

  const handleKeyUp = (e)=>{
    console.log(e);
    //if the user has clicked on the backspace button;
    //then invoke backspaceHandler;
    //else invoke default onchangehandler
  }
  return(
    <input 
    ref={ref} 
    maxLength={perInputBox}
    onChange={onChange}
    onKeyUp={handleKeyUp}
    />
  )
})

export default PinInput;
