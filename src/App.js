import React from "react";
import FetchingData from "./components/advanced-react/hoc/FetchingData";
import Title from "./components/advanced-react/render-props/Title";
import HandleValue from "./components/advanced-react/render-props/HandleValue";
import Accordion from "./components/advanced-react/composition/Accordion";
import Editable from "./components/advanced-react/composition/Editable";

import Switch from "./components/switch/Switch";
import useToggle from "./hooks/useToggle";

const App = () => {
  const { on, getToggleProps } = useToggle();
  return (
    <>
      {/* <FetchingData></FetchingData> */}
      {/* <Title render={() => <h1>Hello kienroro</h1>}></Title> */}
      {/* <HandleValue></HandleValue> */}
      {/* <Accordion header={"Lorem ipsum dolor sit amet consectetur"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
        repellat possimus. Ullam, inventore libero? Ab incidunt nesciunt nobis
        architecto porro cumque delectus expedita corrupti, unde vitae excepturi
        sequi laboriosam impedit.
      </Accordion>
      <Accordion header={"Lorem ipsum dolor sit amet consectetur"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
        repellat possimus. Ullam, inventore libero? Ab incidunt nesciunt nobis
        architecto porro cumque delectus expedita corrupti, unde vitae excepturi
        sequi laboriosam impedit.
      </Accordion> */}
      <Switch {...getToggleProps({ on })}></Switch>
      <br />
      <button
        aria-label="custom-button"
        {...getToggleProps({
          on,
          onClick: () => {
            console.log("hello");
          },
        })}
      >
        {on ? "on" : "off"}
      </button>
    </>
  );
};

export default App;
