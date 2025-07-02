import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("mounted");
  }, []);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
