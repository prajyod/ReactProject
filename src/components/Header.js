import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import UserContext from "../utils/UserContext";

const Header = () => {
  const {user,setUser} = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-orange-200 shadow-2xl">
      <div >
        <img className="h-28 p-2" src={LOGO_URL} alt="logo" />
      </div>
      <label>{user.username}</label>
      <label>{user.email}</label>
      <div>
        <ul className="flex p-4">
        <Link to="/home"><li className="flex p-4">Home</li></Link>
          <Link to="/about"><li className="flex p-4">About Us</li></Link>
          <Link to="/contact"><li className="flex p-4">Contact Us</li></Link>
          <Link to="/instamart"><li className="flex p-4">Cart</li></Link>
          <Link to="/instamart"><li className="flex p-4">Instamart</li></Link>
          <button
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
