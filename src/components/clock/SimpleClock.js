import React, { useEffect, useRef, useState } from "react";

const SimpleClock = () => {
  const timer = useRef(null);
  const [counter, setCounter] = useState(0);

  const handleStart = () => {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    console.log(
      "🚀 ~ file: SimpleClock.js:9 ~ timer.current=setInterval ~ timer.current:",
      timer.current
    );
  };

  useEffect(() => {
    console.log("Rerender with timer value: " + timer.current);
    return () => clearInterval(timer.current);
  }, []);

  const handleStop = () => {
    clearInterval(timer.current);
    console.log("🚀 ~ file: SimpleClock.js:15 ~ handleStop ~ timer:", timer);
  };
  return (
    <div>
      <h3>Timer: {counter}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default SimpleClock;
