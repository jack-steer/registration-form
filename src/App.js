
import "./App.css";

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { InputTextField } from "./components/InputTextField.js";

const App = () => {
  const renderContents = () => {
    return (
      <>
        <h2>Sign Up</h2>
        <div className="form">
          <InputTextField labelText={"First Name"} placeholder={"John"}></InputTextField>
          <InputTextField labelText={"Surname"} placeholder={"Smith"}></InputTextField>
        </div>
        <button className="cta-button">Next</button>
        <p>Already have an account? Login here</p>
      </>
    );
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
