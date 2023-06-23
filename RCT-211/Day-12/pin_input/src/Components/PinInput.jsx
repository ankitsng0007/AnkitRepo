import React ,{forwardRef} from 'react';

const PinInput = forwardRef(({perInputBox,onChange},ref) => {
  return(
    <input ref={ref} maxLength={perInputBox}
     onChange={onChange}
    />
  )
})

export default PinInput;
