import React from "react";
import { useDispatch } from 'react-redux';

const CounterButton = (props) => {

  const dispatch = useDispatch()

  function increment(){
    dispatch({type: 'increment'})
  }

  function decrement(){
    dispatch({type: 'decrement'})
  }

  return (
    <div>
      <button onClick={increment} className="btn btn-primary">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};
export default CounterButton;
