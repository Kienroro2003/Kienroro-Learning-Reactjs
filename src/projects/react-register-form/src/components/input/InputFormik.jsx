import { useField } from "formik";
import React from "react";

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 mb-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 border w-full border-gray-200 rounded-lg bg-white outline-none transition-all focus:border-blue-400"
        {...props}
        {...field}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 text-xs">{meta.error}</p>
      )}
    </div>
  );
};

export default InputFormik;
