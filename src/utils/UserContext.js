import {createContext} from "react";

const UserContext = createContext({
    user:{
        username : "prajyod",
        email : "prajyod@gmail.com"
    }
});

UserContext.displayName = "UserContext"

export default UserContext;