import "./App.css";

import { useState } from "react";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { FirstLastName } from "./components/FirstLastName.js";
import { Email } from "./components/Email.js";

const App = () => {

  const [step, useStep] = useState(0);
  const renderContents = () => {
    switch(step) {
      case 0:
        return <FirstLastName useStep={useStep}> </FirstLastName>
      case 1:
        return <Email/>
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
