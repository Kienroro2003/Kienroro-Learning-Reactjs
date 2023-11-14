import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef(null);
  useEffect(() => {
    const links = contentRef.current.querySelectorAll("a");
    links.forEach((item) => {
      item.setAttribute("target", "_black");
    });
  }, []);
  return {
    contentRef,
  };
}
