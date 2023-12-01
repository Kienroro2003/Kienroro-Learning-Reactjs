import { useState } from "react";

export default function useToggle() {
  const [on, setToggle] = useState(false);
  const toggle = () => {
    setToggle((on) => !on);
  };
  function getToggleProps({ onClick, ...rest } = {}) {
    console.log("🚀 ~ getToggleProps ~ props:", rest);
    return {
      onClick: () => {
        onClick();
        toggle();
      },
      ...rest,
    };
  }
  return {
    on,
    toggle,
    // toggleProps: {
    //   onClick: toggle,
    // },
    getToggleProps,
  };
}
