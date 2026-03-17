import { useState, useEffect } from "react";

export default function Clock() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(c => c + 1);
    }, 1000);
  }, []);

  return <p>{counter}</p>;
}