import React from "react";

const CounterButton = (props) => {
  return (
    <div>
      <button onClick={props.incrementHandler} className="btn btn-primary">
        Increment
      </button>
      <button onClick={props.decrementHandler} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};
export default CounterButton;
