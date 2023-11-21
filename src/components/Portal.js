import React, { useEffect } from "react";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "protal-wrapper";
  return element;
}

const portalWrapperElm = createPortalWrapper();

const Portal = () => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  return <div></div>;
};

export default Portal;
