import "./App.css";

import { useState } from "react";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { FirstLastName } from "./components/FirstLastName.js";
import { Email } from "./components/Email.js";
import { UsernamePassword } from "./components/UsernamePassword.js";

const App = () => {
  const [step, useStep] = useState(0);
  const [inputData, useInputData] = useState([]);

  const renderContents = () => {
    switch (step) {
      case 0:
        return (
          <FirstLastName
            useStep={useStep}
            useInputData={useInputData}
          ></FirstLastName>
        );
      case 1:
        return <Email useStep={useStep} useInputData={useInputData}></Email>;
      case 2:
        return <UsernamePassword useStep={useStep} useInputData={useInputData} ></UsernamePassword>
      case 3:
        return // Review details 
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
