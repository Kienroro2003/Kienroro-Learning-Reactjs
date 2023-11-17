import React, { useState } from "react";
import useClickOutSide from "../hook/useClickOutSide";
import { useWatch } from "react-hook-form";

const DropdownHook = ({ control, setValue, name, data, ...props }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState("Select your job");
  const jobValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const handleValueClick = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel("Your job is " + e.target.dataset.value);
    setShow(false);
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="flex items-center justify-between w-full p-5 bg-white border rounded-lg cursor-pointer border-gray100"
        onClick={() => setShow(!show)}
      >
        <span>{jobValue ? label : "Select your job"}</span>
      </div>
      {show && (
        <div className="absolute top-full left-0 w-full rounded-lg bg-white">
          {data.map((item) => {
            return (
              <div
                className="p-5 cursor-pointer hover:bg-gray-100"
                onClick={handleValueClick}
                data-value={item.value}
                key={item.id}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownHook;
