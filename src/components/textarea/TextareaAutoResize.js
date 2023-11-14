import React, { useEffect, useReducer, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("Auto");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [textareaWrapperHeight, setTextareaWrapperHeight] = useState("auto");
  const handleChange = (e) => {
    console.log("change");
    setText(e.target.value);
    setTextareaWrapperHeight(`${textareaRef.current.scrollHeight}px`);
    setTextareaHeight((preHeight) => {
      return preHeight >= textareaRef.current.scrollHeight + "px"
        ? "auto"
        : `${textareaRef.current.scrollHeight}px`;
    });
  };
  const textareaRef = useRef(null);
  useEffect(() => {
    console.log("useEffect");
    if (textareaRef.current) {
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
      setTextareaWrapperHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [text]);
  return (
    <div className="p-5" style={{ minHeight: textareaWrapperHeight }}>
      <textarea
        className="w-full outline-none overflow-hidden max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 resize-none"
        placeholder="Please enter your content..."
        defaultValue={text}
        style={{ height: textareaHeight }}
        ref={textareaRef}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
