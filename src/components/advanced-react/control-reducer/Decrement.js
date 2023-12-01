import React from "react";
import { useCount } from "./count-context";
import useCounter from "./useCounter";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      onClick={handleDecrement}
      className="flex items-center justify-center p-5 text-lg cursor-pointer decrement bg-slate-200"
    >
      -
    </button>
  );
};

export default Decrement;
