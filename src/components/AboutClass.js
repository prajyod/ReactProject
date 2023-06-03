import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("parent Component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div className="about">
        <h1>{"Abount " + this.props.name}</h1>
        {/* <Outlet /> */}
        <ProfileFunctionalComponent name="Hulk" />
        <Profile />
      </div>
    );
  }
}

export default About;
