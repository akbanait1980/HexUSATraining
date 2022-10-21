import React, { useState } from "react";

const World = () => {
  const [changedText, setChangedText] = useState(false);

  const onClickHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>World Component</h1>
      {!changedText && <p>Some paragraph</p>}
      {changedText && <p>Changed</p>}
      <button onClick={onClickHandler}>Change Text</button>
    </div>
  );
};
export default World;
