import { useState, useEffect } from "react";

import { InputTextField } from "./InputTextField/InputTextField";
import { ProgressButton } from "./ProgressButton/ProgressButton";

import { hasValidInputLength } from "../utils/validateFields";
import "./Email.css";

export const UsernamePassword = ({ useStep, inputData, useInputData }) => {
  const [buttonDisabled, useButtonDisabled] = useState(true);
  const [fieldValues, useFieldValues] = useState(["", ""]);

  useEffect(() => {
    hasValidInputLength(fieldValues) ? useButtonDisabled(false) : useButtonDisabled(true);
  }, [fieldValues]);

  const handleChange = (index) => (e) => {
    let newArray = [...fieldValues];
    newArray[index] = e.target.value;
    useFieldValues(newArray);
  };

  const onClick = () => {
    useStep(3)
    useInputData({...inputData, username: fieldValues[0], password: fieldValues[1]});
  }

  return (
    <>
      <h2>Step 3 - Login Details</h2>
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
