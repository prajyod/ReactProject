import {useState} from "react";

const Section = (props) => {
  const { name, description ,isVisible,setVisibleSection,val} = props;
  return (
    <div className=" w-200 border border-spacing-5">
      <h1>{name}</h1>
      {
        isVisible?<button onClick={() => {
            setVisibleSection(val);
          }} className="cursor-pointer underline">Show</button>:<button onClick={() => {
            setVisibleSection(val)
          }} className="cursor-pointer underline">Hide</button>
      }
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const[visibleSection,setVisibleSection] = useState("profile"); 
  return (
    <>
      <Section
        name="Insta Profile"
        description="PostCSS is a JavaScript tool that transforms your CSS code into an abstract syntax tree (AST) and then provides an API (application programming interface) for analyzing and modifying it using JavaScript plugins.
        " isVisible = {visibleSection === "profile"} setVisibleSection = {() => {setVisibleSection("profile")} } val = "profile"
      />
      <Section
        name="Careers"
        description="PostCSS is a JavaScript tool that transforms your CSS code into an abstract syntax tree (AST) and then provides an API (application programming interface) for analyzing and modifying it using JavaScript plugins.
        " isVisible = {visibleSection === "career"}  setVisibleSection = {() => {setVisibleSection("career")}} val="career"
      />
    </>
  );
};

export default Instamart;
