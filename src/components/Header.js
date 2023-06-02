import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
        <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
