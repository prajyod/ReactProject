import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

const About = () => {
    
  return (
    <div className="about">
      <h1>About Page....</h1>
      {/* <Outlet /> */}
      <ProfileFunctionalComponent name="Hulk"/>
      <Profile/>
    </div>
  );
};

export default About;
