import { BiMenu, BiX } from "react-icons/bi";
import "../styles/Navigation.css";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-left">
          <img className="logo" src="/Logo.svg" alt="logo" />

          <ul className="menu-big-dev">
            <li>Home</li>
            <li>Company</li>
            <li>Services</li>
          </ul>
        </div>

        <button className="navbar-btn big-dev">Get in touch</button>

        <span className="menu-logo">
          {isMenuOpen ? (
            <BiX onClick={toggleMenu} />
          ) : (
            <BiMenu onClick={toggleMenu} />
          )}
        </span>
      </div>

      {isMenuOpen && (
        <div className="menu">
          <ul className="menu-options">
            <li>Home</li>
            <li>Company</li>
            <li>Services</li>
          </ul>

          <button className="navbar-btn">Get in touch</button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
