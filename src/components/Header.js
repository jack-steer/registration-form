import '../App.css';
import logo from './logo.png';

export const Header = () => {
    return (
      <div className="header-container">
        <img className="brand-logo" src={logo} />
      </div>
    );
  }