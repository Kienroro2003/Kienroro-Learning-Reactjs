import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return { values, handleInputChange };
}
