import React from 'react';
import useTimeout from '../Hooks/useTimeout';

const TimeoutComp = () => {
    const showText = useTimeout();

  return (
    <div>
      {showText && <h3>TimeOut Component</h3>}
    </div>
  );
}

export default TimeoutComp;
