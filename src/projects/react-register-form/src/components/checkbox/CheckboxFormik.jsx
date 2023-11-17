import { useField } from "formik";
import React from "react";

const CheckboxFormik = ({ text, setFieldValue, ...props }) => {
  const [field, meta] = useField(props);
  console.log(
    "🚀 ~ file: CheckboxFormik.jsx:6 ~ CheckboxFormik ~ field:",
    field
  );
  return (
    <label className="custom-checkbox cursor-pointer">
      <input
        type="checkbox"
        checked={field.value}
        {...field}
        {...props}
        hidden
      />
      <div className="flex items-center gap-x-3">
        <div className="h-full w-full bg-white rounded-md custom-checkbox-square flex items-center justify-center">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z"
              fill="white"
            />
          </svg>
        </div>
        <label
          htmlFor={props.id || props.name}
          className="text-sm cursor-pointer"
        >
          {text}
        </label>
      </div>
    </label>
  );
};

export default CheckboxFormik;
