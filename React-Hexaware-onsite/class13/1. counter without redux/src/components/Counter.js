import React, { useState } from "react";
import CounterButton from "./CounterButton";
import CounterOutput from "./CounterOutput";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="my-3">
          <CounterOutput data={counter} />
        </div>
        <div className="my-3">
          <CounterButton
            incrementHandler={increment}
            decrementHandler={decrement}
          />
        </div>
      </div>
    </div>
  );
};
export default Counter;
