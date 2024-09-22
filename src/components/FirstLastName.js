import "./FirstLastName.css";
import { useState, useEffect } from "react";

import { InputTextField } from "./InputTextField/InputTextField.js";

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

  return (
    <>
      <h2>Sign Up</h2>
      <div className="form">
        <InputTextField
          id={"input-text-field-first-name"}
          labelText={"First Name"}
          placeholder={"John"}
          onChange={handleChange(0)}
        ></InputTextField>
        <InputTextField
          id={"input-text-field-last-name"}
          labelText={"Last Name"}
          placeholder={"Smith"}
          onChange={handleChange(1)}
        ></InputTextField>
      </div>
      <button
        className="cta-button"
        onClick={() => {
          useStep(1);
          useInputData({ firstName: fieldValues[0], lastName: fieldValues[1] });
        }}
        disabled={buttonDisabled}
      >
        Next
      </button>
      <p>Already have an account? Login here</p>
    </>
  );
};
