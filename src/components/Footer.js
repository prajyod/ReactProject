import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="footer">
            <h1>Footer</h1>
            <label>{user.username}</label>
      <label>{user.email}</label>
        </div>
        
    );
}

export default Footer;