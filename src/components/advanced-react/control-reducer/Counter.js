import React, { useEffect, useRef, useState } from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";
import useCounter from "./useCounter";

const Counter = ({ count = 0 }) => {
  const { count: count1, handleIncrement, handleDecrement } = useCounter();
  console.log("🚀 ~ Counter ~ count1:", count1);

  return (
    <CountProvider value={{ count1, handleIncrement, handleDecrement }}>
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
