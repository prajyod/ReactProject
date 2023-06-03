import React from "react";

class Profile extends React.Component {

    constructor(){
        super();
        // this.state = {
        //     count: 1
        // }
        console.log("child constructor");
    }

    componentDidMount(){
        console.log("child component method");
    }

  render() {
    console.log("child render method");
    return (
      <div>
       {/* <button onClick={
        () => {
            this.setState = {
                count : 5
            }
        }
       }></button> */}
        {/* <h1>{"Prajyod kaka"+this.state.count}</h1> */}
      </div>
    );
  }
}

export default Profile;
