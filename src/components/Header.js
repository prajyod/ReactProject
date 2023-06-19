import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { increment, decrement, increaseValueBy } from "./CartSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between bg-orange-200 shadow-2xl">
      <div>
        <img className="h-28 p-2" src={LOGO_URL} alt="logo" />
      </div>
      <label>{user.username}</label>
      <label>{user.email}</label>
      <div>
        <button
          className="p-5"
          onClick={() => {dispatch(increment())}}
        >
          Increment
        </button>
        <button className="p-5">Decrement</button>
        <button className="p-5">Set Value</button>
      </div>
      <div>
        <ul className="flex p-4">
          <Link to="/home">
            <li className="flex p-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="flex p-4">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="flex p-4">Contact Us</li>
          </Link>
          <Link to="/instamart">
            <li className="flex p-4">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="flex p-4">Cart - {cart.items.length}</li>
          </Link>
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
