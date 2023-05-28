import React from "react";
import ReactDOM from "react-dom/client"
/**
 * <div id="parent">
    <div id="child">
        <h1 id="header">
            Hello from H1 tag.
        </h1>
        <h2 id="header2">
            Hello from H2 tag.
        </h2>
    </div>
    <div id="child2">
        <h1 id="header">
            Hello from H1 tag.
        </h1>
        <h2 id="header2">
            Hello from H2 tag.
        </h2>
    </div>
    </div>
 */

const react = React.createElement("div", { id: "parent" },
 [React.createElement("div", { id: "child" }, 
 [React.createElement("h1", {id:"header"}, "Hello from H1 tag"),React.createElement("h2", {id:"header"}, "Hello from H2 tag")]),React.createElement("div", { id: "child2" }, 
 [React.createElement("h1", {id:"header"}, "Hello from H1tag"),React.createElement("h2", {id:"header"}, "Hello from H2 tag")])]);

const reactDOM = ReactDOM.createRoot(document.getElementById("root"));
reactDOM.render(react);