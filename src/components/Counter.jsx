import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
