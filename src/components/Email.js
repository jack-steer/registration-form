import { useState } from "react";

import { ProgressButton } from "./ProgressButton/ProgressButton";
import { InputTextField } from "./InputTextField/InputTextField";

import "./Email.css";

export const Email = ({ useStep, inputData, useInputData }) => {
  const [buttonDisabled, useButtonDisabled] = useState(true);
  const [fieldValue, useFieldValue] = useState([""]);

  const isEmailValid = (e) => {
    if (e.nativeEvent.srcElement.validity.valid) {
      useButtonDisabled(false);
      useFieldValue(e.target.value);
    } else useButtonDisabled(true);
  };

  const onClick = () => {
    useStep(2);
    useInputData( { ...inputData, email: fieldValue });
  };

  return (
    <>
      <h2>Step 2 - Contact Information</h2>
      <div className="form">
        <InputTextField
          id={"input-text-field-email"}
          type={"email"}
          labelText={"Email"}
          placeholder={"john.smith@email.com"}
          onChange={isEmailValid}
        ></InputTextField>
      </div>
      <ProgressButton buttonDisabled={buttonDisabled} onClick={onClick}>
        Next
      </ProgressButton>
      <p>Already have an account? Login here</p>
    </>
  );
};
