import React ,{forwardRef} from 'react';

const PinInput = forwardRef(({ perInputBox,
  onChange,backspaceHandler },ref) => {

    const handleKeyUp = (e)=>{
    //console.log(e);

      //if the user has clicked on backspace button
      //then invoke the backspaceHolder
      //else the default onChangeHandler
      if(e.keyCode === 8){
        //backspace Logic
        backspaceHandler(e)
      }else{
        onChangeHandler(e)
      }
    }

  
  return(
    <input 
    ref={ref} 
    maxLength={perInputBox}
    //onChange={onChangeHandler}
    onKeyUp={handleKeyUp}
    />
  )
})

export default PinInput;
