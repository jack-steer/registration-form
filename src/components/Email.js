import { useState } from "react";

import { ProgressButton } from "./ProgressButton/ProgressButton";
import { InputTextField } from "./InputTextField/InputTextField";

import "./Email.css";

export const Email = ({ useStep }) => {
  const [buttonDisabled, useButtonDisabled] = useState(true);

  const isEmailValid = (e) => {
    if (e.nativeEvent.srcElement.validity.valid) {
      useButtonDisabled(false);
    } else useButtonDisabled(true);
  };

  const onClick = () => {
    useStep(2);
  };

  return (
    <>
      <h2>Step 2</h2>
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
