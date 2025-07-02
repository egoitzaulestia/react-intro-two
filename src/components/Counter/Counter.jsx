import "./Counter.css";
import { useState, useEffect } from "react";

const Counter = ({ start = 0, step = 1 }) => {
  // We initialize from `start` prop
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    console.log("mounted");
  }, [start]);

  const increment = () => {
    setCounter((prev) => prev + step);
  };

  const decrement = () => {
    setCounter((prev) => prev - step);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
