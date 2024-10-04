import "./FirstLastName.css";
import { useState, useEffect } from "react";

import { InputTextField } from "./InputTextField/InputTextField.js";
import { ProgressButton } from "./ProgressButton/ProgressButton.js";

export const FirstLastName = ({ useStep, useInputData }) => {
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
    useStep(1);
    useInputData({ username: fieldValues[0], password: fieldValues[1] });
  }

  return (
    <>
      <h2>Sign Up</h2>
      <div className="form">
        <InputTextField
          id={"input-text-field-first-name"}
          type={"text"}
          labelText={"First Name"}
          placeholder={"John"}
          onChange={handleChange(0)}
        ></InputTextField>
        <InputTextField
          id={"input-text-field-last-name"}
          type={"text"}
          labelText={"Last Name"}
          placeholder={"Smith"}
          onChange={handleChange(1)}
        ></InputTextField>
      </div>
      <ProgressButton
        buttonDisabled={buttonDisabled}
        onClick={onClick}
        >Next</ProgressButton>
      <p>Already have an account? Login here</p>
    </>
  );
};
