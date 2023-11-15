import { useEffect, useState } from "react";

export default function useDebounce(initialValues = "", delay = 500) {
  //   console.log("initialize useDebounce");
  const [debounceValue, setDebounceValue] = useState(initialValues);
  useEffect(() => {
    // console.log("call useEffect");
    const timer = setTimeout(() => {
      setDebounceValue(initialValues);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [initialValues, delay]);
  return debounceValue;
}
