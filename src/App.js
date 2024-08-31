import './App.css';

import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
      </div>
      <Footer />
    </div>
  );
}

export default App;
