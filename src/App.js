import React, { useState } from "react";
import FetchingData from "./components/advanced-react/hoc/FetchingData";
import Title from "./components/advanced-react/render-props/Title";
import HandleValue from "./components/advanced-react/render-props/HandleValue";
import Accordion from "./components/advanced-react/composition/Accordion";
import Editable from "./components/advanced-react/composition/Editable";

import Switch from "./components/switch/Switch";
import useToggle from "./hooks/useToggle";
import Counter from "./components/advanced-react/control-reducer/Counter";

const App = () => {
  const { on, getToggleProps } = useToggle();
  const [value, setValue] = useState(5);
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
      {/* <Switch {...getToggleProps({ on })}></Switch>
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
      </button> */}
      {/* <Counter
      // value={value}
      // onChange={(newValue) => {
      //   setValue((value) => value + newValue);
      // }}
      ></Counter> */}

      <Counter></Counter>
    </>
  );
};

export default App;
