import React from 'react';
import useTimeout from '../Hooks/useTimeout';

const TimeoutComp = () => {
    const showText = useTimeout(3000);

  return (
    <div>
      {showText && <h3>TimeOut Component  (Delay 3sec)</h3>}
    </div>
  );
}

export default TimeoutComp;
