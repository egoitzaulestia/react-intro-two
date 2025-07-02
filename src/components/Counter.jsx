import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
