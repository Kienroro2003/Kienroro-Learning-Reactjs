import React, { useState } from "react";
import useHandleChange from "../hooks/useHandleChange";

const Form2 = () => {
  const { values, handleInputChange } = useHandleChange({
    fullname: "",
    email: "",
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(values);
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form className="flex gap-x-3" onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
          {nameError}
        </div>
        <div>
          <input
            type="email"
            name="email"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="w-[100px] p-5 bg-blue-500 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
