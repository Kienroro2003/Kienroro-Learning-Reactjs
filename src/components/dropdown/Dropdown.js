import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  // const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    function handleClickOutSideDropdown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutSideDropdown);
    return () =>
      document.removeEventListener("click", handleClickOutSideDropdown);
  }, []);
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setDropdown(!dropdown)}
      >
        Selected
      </div>
      {dropdown && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
