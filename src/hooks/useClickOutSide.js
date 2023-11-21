import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(
      "🚀 ~ file: useClickOutSide.js:6 ~ useClickOutSide ~ nodeRef:",
      nodeRef
    );
    function handleClickOutSideDropdown(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSideDropdown);
    return () =>
      document.removeEventListener("click", handleClickOutSideDropdown);
  }, []);
  return { show, nodeRef, setShow };
}
