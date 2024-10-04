import { useState, useEffect } from "react";

import { InputTextField } from "./InputTextField/InputTextField";
import { ProgressButton } from "./ProgressButton/ProgressButton";
import "./Email.css";

export const UsernamePassword = ({ useStep }) => {
  const [buttonDisabled, useButtonDisabled] = useState(true);
  const [fieldValues, useFieldValues] = useState(["", ""]);

  const validateFields = () => {
    if (fieldValues[0].length > 0 && fieldValues[1].length > 0) {
      useButtonDisabled(false);
    } else {
      useButtonDisabled(true);
    }
  };

  useEffect(() => {
    validateFields();
  }, [fieldValues]);

  const handleChange = (index) => (e) => {
    let newArray = [...fieldValues];
    newArray[index] = e.target.value;
    useFieldValues(newArray);
  };

  const onClick = () => {
    useStep(3)
  }

  return (
    <>
      <h2>Step 3</h2>
      <div className="form">
        <InputTextField
          id={"input-text-field-username"}
          type={"text"}
          labelText={"Username"}
          placeholder={"smith123"}
          onChange={handleChange(0)}
        ></InputTextField>

        <InputTextField
          id={"input-text-field-password"}
          type={"password"}
          labelText={"Password"}
          placeholder={""}
          onChange={handleChange(1)}
        ></InputTextField>
      </div>
      <ProgressButton buttonDisabled={buttonDisabled} onClick={onClick}>
        Next
      </ProgressButton>
    </>
  );
};
