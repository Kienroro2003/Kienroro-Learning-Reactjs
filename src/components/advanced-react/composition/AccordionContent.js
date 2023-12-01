import React from "react";
import { useAccordion } from "./context-accordion";

const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return (
    <>
      {show && (
        <div className="p-4 mt-2 border border-gray-200 rounded-lg content">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionContent;
