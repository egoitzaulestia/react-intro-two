import { useState, useEffect } from "react";

const Greeting = ({ name }) => {
  const [greeting, setGreeting] = useState(`Wake up, ${name}...`);

  useEffect(() => {
    setTimeout(() => {
      setGreeting("The Matrix has you...");
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("The component has been updated");
  });
  return <p>{greeting}</p>;
};

export default Greeting;
