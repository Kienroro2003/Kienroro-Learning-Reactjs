import React, { useState } from "react";
import useToggle from "./useToggle";

const Accordion = () => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  return (
    <div>
      <div className="cursor-pointer header" onClick={handleToggleShow}>
        Accordion Header
        <span>+</span>
      </div>
      {show && <div className="content">Accordion Content</div>}
    </div>
  );
};

export default Accordion;
