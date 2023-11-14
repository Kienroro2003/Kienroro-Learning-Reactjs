import React, { useState } from "react";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputChange = (e) => {
  //   setFullname(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <div className="p-5">
      {/* {fullname} */}
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <input type="checkbox" name="hobby" onChange={handleInputChange} />
      {/* {message}
      <textarea
        name="message"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietname">Vietname</option>
        <option value="USA">USA</option>
        <option value="French">French</option>
        <option value="Japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
