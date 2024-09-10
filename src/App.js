import './App.css';

import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <h2>Sign Up</h2>
        <div className='form'>
          <div className="input-form">
            <label>First name</label>
            <input
              type="text"
              placeholder={"eg John"}
              className="input-text-field"
            />
          </div>
          <div className="input-form">
            <label>Last name</label>
            <input
              type="text"
              placeholder={"eg Smith"}
              className="input-text-field"
            />
          </div>
        </div>
        <button className='cta-button'>Next</button>
        <p>Already have an account? Login here</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
