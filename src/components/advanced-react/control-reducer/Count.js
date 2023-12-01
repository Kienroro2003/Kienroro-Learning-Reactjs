import React from "react";
import { useCount } from "./count-context";

const Count = () => {
  const { count1 } = useCount();
  return (
    <span className="flex items-center justify-center flex-1 text-3xl font-medium">
      {count1.count}
    </span>
  );
};

export default Count;
