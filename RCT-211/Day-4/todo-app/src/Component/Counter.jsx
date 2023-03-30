import React from 'react';
import {store } from "../Redux/store";
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleReduce } from "../Redux/CounterReducer/action"

function Counter() {
    const count = useSelector((store) =>
     store.CountetReducer.count);
    const dispatch = useDispatch();

    const addHandle=()=>{
        dispatch(handleAdd(1));
    }
    const reduceHandle= () =>{
        dispatch(handleReduce(1));
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={addHandle}>ADD</button>
      <button onClick={reduceHandle}>REDUCE</button>
    </div>
  );
}

export default Counter;
