import React, { useState } from "react";
import useClickOutSide from "../hook/useClickOutSide";
import { useField } from "formik";

const DropdownFormik = ({ data, setFieldValue, labelText, ...props }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState("Select your job");
  const [field] = useField(props);
  const handleValueClick = (e) => {
    setFieldValue(props.name, e.target.dataset.value);
    setLabel("Your job is " + e.target.dataset.value);
    setShow(false);
  };
  console.log(field);
  return (
    <div className="flex flex-col gap-1 mb-2">
      <label htmlFor={props.id || props.name}>{labelText}</label>
      <div className="relative" ref={nodeRef}>
        <div
          className="flex items-center justify-between w-full p-5 bg-white border rounded-lg cursor-pointer border-gray100"
          onClick={() => setShow(!show)}
        >
          <span>{field.value ? label : "Select your job"}</span>
        </div>
        {show && (
          <div className="absolute top-full left-0 w-full rounded-lg bg-white">
            {data.map((item) => {
              return (
                <div
                  className="p-5 cursor-pointer hover:bg-gray-100"
                  data-value={item.value}
                  key={item.id}
                  onClick={handleValueClick}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownFormik;
