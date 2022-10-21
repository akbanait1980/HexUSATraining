import React, { useState } from "react";
import CounterButton from "./CounterButton";
import CounterOutput from "./CounterOutput";

const Counter = () => {
 
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="my-3">
          <CounterOutput />
        </div>
        <div className="my-3">
          <CounterButton />
        </div>
      </div>
    </div>
  );
};
export default Counter;
