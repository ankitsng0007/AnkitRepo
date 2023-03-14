import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
    const count = useSelector((reduxStore) => reduxStore.count);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button>ADD</button>
      <button>REDUCE</button>
    </div>
  );
}

export default Counter;
