import React from "react";
import ModalBase from "./ModalBase";

const ModelAdvanced = ({ children, ...props }) => {
  return <ModalBase {...props}>{children}</ModalBase>;
};

export default ModelAdvanced;
