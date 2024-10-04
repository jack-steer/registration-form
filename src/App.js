import "./App.css";

import { useState } from "react";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { FirstLastName } from "./components/FirstLastName.js";
import { Email } from "./components/Email.js";
import { UsernamePassword } from "./components/UsernamePassword.js";
import { ReviewDetails } from "./components/ReviewDetails.js";

const App = () => {
  const [step, useStep] = useState(0);
  const [inputData, useInputData] = useState({});

  const renderContents = () => {
    switch (step) {
      case 0:
        return (
          <FirstLastName
            useStep={useStep}
            inputData={inputData}
            useInputData={useInputData}
          ></FirstLastName>
        );
      case 1:
        return <Email useStep={useStep} inputData={inputData} useInputData={useInputData}></Email>;
      case 2:
        return <UsernamePassword useStep={useStep} inputData={inputData} useInputData={useInputData} ></UsernamePassword>
      case 3:
        return <ReviewDetails inputData={inputData}></ReviewDetails>
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">{renderContents()}</div>
      <Footer />
    </div>
  );
};

export default App;
