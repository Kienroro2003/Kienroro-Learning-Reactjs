import React from "react";
import { useAccordion } from "./context-accordion";

const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();

  return (
    <div
      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer header"
      onClick={handleToggleShow}
    >
      {children}
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
