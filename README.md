# This project is build following Namasthe React course.
Episode 1:
Inception:
- Created a new folder and started with index.html file .Type html:5 in VSCode will generate default html code.Generate simple HelloWorld program using html code.Inside body tag use a div and h1 tag to print HelloWorld program.
	- <div id ="root"></div>
- Create the above HelloWorld program in JavaScript
	- You write javascript code inside script tag. whatever is written inside script your browser runs that.
	- Now to create a h1 tag in javascript we use a function, document.createElement("h1") and assign it to a variable const heading = document.createElement("h1") and add some text it by using heading.innerHtml = "Hello World form java script".
	- Now we can get the div by using its id using const root = document.getElemement("root") and add this heading to the root div using root.appendChild("heading"). This should print the text on the browser.
	- Now if you inspect the code in the browser you can see there is h1 tag created under div tag.
- Create the above HelloWorld program using React.
	- As you can see above document,innetHtml,appendChild etct are globally defined javascript code which are already available in every browser.
	- To setup React we have to use a cdn react link , which basically provides the library hosted on particular cdn(content delivery network).
	- There are 2 links comes as part of cdn react, one is react library and one is react-dom library.react is core development library which contains components,states,props etc. react-dom is bridge between react and dom. majorly this is for web browser. there would be a different library for react-native
	- We will create another script tag and create Heading object. createElement which is used to create header is core for React. But to perform any dom object then we rely on ReactDom.
	- So the create header should be applied to the document then we have to get the root element from the document and attach the header to this root div.
	- Move the java script code written in index.html to a App.js file and call this file in this html file.
	- We can create nested UI structure using React. When we console.log(createElement object) it is actually an object. When we call render Method on ReactDOM then the react object is converted to HTML understandable tags.
	- So React.createElement("tag",{<attributes>},<content to keep inside this tag>) . content to keep can be single or array also.
	- 
```
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
```
		
But the complexity of code keeps increasing if we add the code here.
So we can JSX for handling this. JSX will help in writing tags
Assume we have below code in root
```
<div id="parent">
        <h1 id="header">
            Hello from H1 tag.
        </h1>
        <h2 id="header2">
            Hello from H2 tag.
        </h2>
    </div>
```
And now you render your React object here then React object replace the existing tags.
Make sure Order of the file used Otherwise React will not load correctly.
React is a library(library is which we can plugin and play), Framework will be entire change of how existing system works.


