import { useState } from "react";
import "./Email.css";

export const Email = ({ useStep }) => {
  const [buttonDisabled, useButtonDisabled] = useState(true);

  const isEmailValid = (e) => {
    if (e.nativeEvent.srcElement.validity.valid) {
      useButtonDisabled(false);
    } else useButtonDisabled(true);
  };
  return (
    <>
      <h2>Step 2</h2>
      <div className="form">
        <div className="input-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="input-text-field-email"
            placeholder="john.smith@email.com"
            size="30"
            onChange={isEmailValid}
            required
          />
        </div>
      </div>
      <button
        className="cta-button"
        onClick={() => {
          useStep(2);
        }}
        disabled={buttonDisabled}
      >
        Next
      </button>
      <p>Already have an account? Login here</p>
    </>
  );
};
