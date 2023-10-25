import React, { useState } from "react";

const Counter = () => {
const [Count, setCount]=useState(0)

const handleplus = ()=>{
    setCount(Count + 1)
}

const hanldesub = ()=>{
    setCount(Count - 1)
}

  return (
    <div>
      <h2> {Count}</h2>
      <div>
        <button  onClick={handleplus}>+</button>
        <button disabled={Count===0} onClick={hanldesub} >-</button>
      </div>
    </div>
  );
};

export default Counter;
