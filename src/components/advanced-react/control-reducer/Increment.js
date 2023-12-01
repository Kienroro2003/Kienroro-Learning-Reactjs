import React from "react";
import { useCount } from "./count-context";
import useCounter from "./useCounter";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <button
      onClick={handleIncrement}
      className="flex items-center justify-center p-5 text-lg cursor-pointer increment bg-slate-200"
    >
      +
    </button>
  );
};

export default Increment;
