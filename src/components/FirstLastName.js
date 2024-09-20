import "./FirstLastName.css";

import { InputTextField } from "./InputTextField/InputTextField.js";

export const FirstLastName = ({useStep}) => {
  return (
    <>
      <h2>Sign Up</h2>
      <div className="form">
        <InputTextField
          id={"input-text-field-first-name"}
          labelText={"First Name"}
          placeholder={"John"}
        ></InputTextField>
        <InputTextField
          id={"input-text-field-last-name"}
          labelText={"Surname"}
          placeholder={"Smith"}
        ></InputTextField>
      </div>
      <button className="cta-button" onClick={() => { useStep(1)}}>Next</button>
      <p>Already have an account? Login here</p>
    </>
  );
};
