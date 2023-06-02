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

Episode 2:

- Pushed the previous episode code
- created .git package , using git init
- shifted branch to main : git branch -M main
- Added all the files: git add .
- Committed all the files : git commit -m "message"
- linked local repo to git : git remote add origin https://github.com/prajyod/ReactProject.git
- pushed the code: git push origin main.
Setting up the project:
	run: npm init
	Enter the default details, for testing enter jest and others leave as default.
	If any error like it is not installed then 
	install node(from nodejs.org). this is install node and npm
	After entering all the default details we can see package.json file is created.
Package.json : 
The package. json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies. The file provides the npm package manager with various information to help identify the project and handle dependencies.
Package-lock.json:
package-lock.json is a file that is automatically generated by npm when a package is installed. It records the exact version of every installed dependency, including its sub-dependencies and their versions.
	
Bundler: It is used to bundle our app and ship to production.
	Examples of bundler : Webpack,Parcel,Vite etc.
	In this course we use Parcel for bundling the app.
	We can install the parcel in our system using -> npm install -D parcel (If you want to install a specific version then use npm install <package-name>@<version-number>)
	Note : -D is tell npm to install parcel as dev dependency
	After installing we can see package.json file is updated with devDependencies.
```
"devDependencies": {
    "parcel": "^2.9.1"
  }
```
	Difference between tilde(~) and caret(^) : If there is any minor version update caret will update to that version. If you are using tilde if there is any latest version(major/minor) it automatically updates to that. So on safer side it is better to user caret , as sometimes major version can break most of existing implementations.
	Node Modules : It is actually a database of all the dependencies. So when we installed parcel we can see lot of dependencies why because parcel has its own set of dependencies and its dependencies has their own dependencies so all will be downloaded. This is known as Transitive Dependencies .
	
	.gitIgnore : So if we dont want some files/folders go into production then we mention those in this file.
	Ex : add /node_modules 
	now you can see only 2-3 files changes in git changes tab.
	
We can ignite our app using command
	npx parcel index.html
		here npx is used to execute a package.
		
Installing React in our project:
	It is not good way to use cdn links work on React , because there is a request call happening and we are using a specific version of react, if there is any change then we have to update the link . So for these reasons cdn links should be avoided.
	Install : npm install react( observer there is -D is here , because we are using this as dependency for the app to work not as devDependency)
	npm install react-dom.
	Now remove the dom links and try running the app again. In console there will be an error like Uncaught ReferenceError: React is not defined. Before we have dom links and React object was there. but now we have installed the React but we have import it in our App.js
```
import React from "react"; //here react is folder under node_modules
```
	So add an import statement in App.js and save. You will errors in console why because, html treats App.js as normal javascript. So we have to explicitly mention in script tag of index.html by adding type="module" attribute .
	So now once you save it the page automatically refreshes because of Parcel package. Features of parcel are
		- Build
		- Start a server
		- HMR( Hot module replacement).
		- Internally Parcel uses File  Watching Algorithm to check any changes are done to file.
		- Whenever changes are made and saved it is taking very less time also . why because it also does Catching. If you see our project folder there is parcel cache folder which maintains some binary info.
		- Image Optimisation.
		- Minification.
		- Bundling.
		- Compressing.
		- Consistent Hashing.
		- Code Splitting.(Larger chunks of code to smaller chunks which helps in parallel processing)
		- Differential Bundling(this supports old browsers also).
		- Diagnostics(clear indication of error).
		- HTTPS support.
		- Different build for dev and prod.
			- when we run npx parcel index.html  it will build and create minified files in dist folder. 
			- when we run npx parcel build index.html it will be build for production ready use and files are created in dist folder.
			- For both dev and prod 3 important files are created , html,css,js file.
BrowsersList:
- This is used to define what versions of browsers, location of browsers your app should run.
- There are multiple options which you can here https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
- You need to add browserslist as a dependency in package.json.
```
  "browserlsList":[
    "last 2 versions"
  ]
```


Episode 3 : Laying the foundation
to build a project we can run : npx parcel index.html , in case of production we use: npx parcel build index.html.
Instead of writing these commands we can run these lines in scripts in package.json
scripts:{
	start: "parcel index.html" //for dev build.
	build: "parcel build index.html"// for prod build. you can give any names start or build is just how industry standards use.
}
Now to run the project we can give a command : npm run start(we can also use npm start.. start is a keyword). npm run build(we cannot give npm build , it will not work for build)

How are we creating h1 tag or div tag or any other tag in React.?
	we use React.createElement("h1",{<attributes>},[contents inside this tag]). but the complexity will keep increasing when we have multiple and nested tags.
	
	Initially this is how we developed pages in React. but now facebook developers has created JSX which helps in creating these tags.
	Ex syntax : const jsxHeading = <h1>Heading<h1> (JSX is a html /XML LIKE syntax inside java script. This is not html but html like). JSX is not part of React . these 2 are separate .

	How do you think this jsx syntax is rendered on html page. Javascript doesnt understand JSX syntax so when we build/save the project this code is Transpiled before it reaches to JavaScript engine. (Transpiled means converts to JS Engine understandable code). So Babel is responsible to Transpiling the JSX code.
	
	When we create React Element > React.createElement it creates a JS Object -> HTML
	When we create JSX syntax -> babel converts it to React.createElement -> JSObject-> HTML(So babel changes it to React.createElement and every other thing normally works).
	
	You can try to play with code visit https://babeljs.io/
	
	If we have to give attributes in jsx then we need to write it in Camel case. Many attributes which are different with html syntax.
	
	If we writing jsx in one line then we dont have put in curly braces. but if we have multiple lines then content should be in curly braces.
	
	React Components:
	- There are 2 kinds of React Components
		- Class Based Components(Old way)
		- Function Based Components(New way)
	- Functional Component:
		- it is a normal javascript function which returns piece of jsx.
		- we need create the variable name with Capital letter. Ex: const Header = () => {return <h1>Functional Component</h1>}.
		- And it should return jsx code.
		- To render this functional component we write root.render(<Header/>).
		- If we want to render other functional component into another functional component then we can use <<functional compinent name>/>.
		- Component inside component is also called as Component Composition. 
		- We can write any javascript code inside { } in jsx
			- Ex:
```
const Heading = () => {return (
  <h1 className="heading" tabIndex={1}>
    Hello woeld from jsx
  </h1>
)};
const val = 100000;
const Header = () => {return (
  <div>
    <Heading />
    <h1>{ val }</h1>
    <h1>Hello Functional Component</h1>
  </div>
)};
```
		- We can refer React element inside jsx using { }. we can refer React element inside React element using { }. We can refer  Functional Component inside React Element using <<functional component name>/>
		- when referring an element or component in jsx , jsx takes care of XSS(Cross site scripting). So you can freely use it without any security mechanisms.
		- We can refer functional component using closing tag also like<Header></Header> and we can call inside jsx using { Header() } like a normal java function also.
	- jsx can only have one root tag. Example : We cant write like this
```
const Header = () => {return (
  <div>
    <Heading />
    <h1>{ val }</h1>
    <h1>Hello Functional Component</h1>
  </div>
  <div>
    
  </div>
)};
```
	- If we want to write multiple divs then we can place these multiple tags inside a single div. but this is bit weird because just to handle these multiple divs we have to create another div.
	- So to handle this use case we can make use of React Fragments.
- React Fragments:
	- We can place multiple tags inside these React Fragment and this react fragment behaves as a parent tag. It behaves as an empty tag. to simplify this instead of writing <React.Fragment>multiple tags</React.Fragment> jsx has provide an empty tag. So we can <>multiple tags</>

    Lesson 4:

    When you are given a concept to build first thing to do is Planning.
Planning of Online Restaurant : 
	Header
		Logo
		Navigation Items
	Body
		Search
		Restaurant Cards
		Restaurant details
	Footer
		Terms and Conditions
		
		
We can also write inline css style in JSX. but you can write normally how you write inline css style.
We need to write using javascript object only. Ex : const headerStyle = {
	backgroundColor : "Yellow"
}
And we have to use { headerStyle }  to call this in JSX code. But it is not recommended to write inline styles. write it in css file separately and call it in html.

As part of Restaurant cards , we have multiple restaurant cards but as now all are same. So we have to load Restaurant cards as per the Restaurant. So for this we use PROPS.
If we want to pass dynamic data to the component we use PROPS.
Arguments  are passed to a javascript function, likewise PROPS  are passed to Functional Component.

When Props are added to component, React actually created javascript objects and send these props combined argument to component.
Ex:
```
const RestauranCard = (props) => (
    <div className="restaurant-card">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ptsvyzgpyzdwlwxd8pm8"></img>
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h5>{props.rating}</h5>
    </div>
);
const RestaurantContainer = () => (
    <div className="restaurant-container">
        <RestauranCard resName="Meghana Foods" cuisine="Mutton, Chicken Biryani" rating="5.0"/>
        <RestauranCard resName="Burger King" cuisine="Burger, Fires" rating="4.5"/>
    </div>
);
```
So in javascript we can also do destructuring of props on the fly.
we can write something like
```
const RestauranCard = ({resName,cuisine,rating}) => (
    <div className="restaurant-card">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ptsvyzgpyzdwlwxd8pm8"></img>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h5>{rating}</h5>
    </div>
);
const RestaurantContainer = () => (
    <div className="restaurant-container">
        <RestauranCard resName="Meghana Foods" cuisine="Mutton, Chicken Biryani" rating="5.0"/>
        <RestauranCard resName="Burger King" cuisine="Burger, Fires" rating="4.5"/>
    </div>
);
```
Config Driven UI: Based on the data from the backend we receive UI gets displayed according to that.
Get the data from swiggy end point and use it for our restaurant name etc.
If we get Array elements , then we can join element using comma(,)

Copied all the restaurants into an object and calling the jsx component using map. Updated code looks like this
```
onst RestauranCard = (props) => {
  const { restaurantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restaurantData?.data;
  return (
    <div className="restaurant-card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h5>{costForTwo / 100} for Two</h5>
    </div>
  );
};
const RestaurantContainer = () => {
  return (
    <div className="restaurant-container">
        {
            restList.map(item => <RestauranCard key={item.data.id} restaurantData={item}/>)
        }
      
    </div>
  );
};
```
While using map we will get a warning in console to provide a key attribute, so add an attribute key to RestauranCard.
Use of Key attributes:(Key is something to distinguish between siblings)
Assume there are 100's of Restaurants which are displayed on page currently , if there is any new Restaurants comes in without defining Key then React will remove all the 100 Restaurants and re render everything so to avoid this if we use Key then React can identify which is the new Restaurant and place the Restaurant at appropriate position based on the received request.
React recommends not to use index, instead use unique id. but if there is no option then we have to use index.

Assignment Concepts:
Virtual Dom: React takes a copy of Real Dom and place it in memory, whenever there is a change in node it check with the snapshot of just before modification virtual dom. if a node is changed then , only that particular node is updated in Real DOM.  This way the rendering performance on UI is good.
The process in which it check whether there is a change in Virtual DOM to snapshot of Virtual DOM is called Diffing. and the algorithm is called Diffing algorithm.
The Process of updating Real Dom node after checking the changes with Virtual Dom using ReactDOM is Reconciliation. Refer here for any doubts(https://www.youtube.com/watch?v=D3d1lyDR3xc).
React Fiber : Not fully understood this but some basic idea is We have a node and We have dom element both these are connected using React Fiber.

Lesson 5:Lets get hooked

We will start creating src folder and inside that we try to maintain folders based on the functionality.
ex: all components we create in a component folder.
Give the file name as the name of the component.
Then to use the component in existing file use import. First export the component using (export default <component_name>) in the component file.

Create a separate folder for common data like cdn links , data where it can be access by entire project . we can create a folder like utils or common or config etc.

If we want to export multiple from a single file call export on individual lines this is called Named export.
To import a Named export we have to use import { export_name } from "<location".

Simple Requirement:
Add a button below search field and add click functionality , on clicking the page restaurants should be filtered with the restaurants which has rating greater than 4.
Though we have filtered the restData with this filter logic the page is not getting loaded with filtered data. So here comes the hooks.
Hooks :
To Add dynamic features into the pages.This is a utility function given by React to us.There are multiple functions like these.
They are normal java script functions.
Most important of all the hooks are :
- useState()
- useEffect()
useState():
- Import it from react as Named import.
- to use this hook we can define a local state variable.
	- const [restData] = useState();// how to define normal variable? let variable_name = <some value>.
- How to define a local state variable with default value => const [restData] = useState([]). We can pass empty array and it creates with empty array, if we pass null it will create with null.
- We can import it by import {useState} from "react";
- we can now define some default data like const [restData] = useState([
```
{
      type: "restaurant",
      data: {
        type: "F",
        id: "218068",
        name: "Mehfil",
        cloudinaryImageId: "rfngxpkeablm4ses3d0j",
        cuisines: ["Biryani", "North Indian", "Tandoor", "Chinese", "Kebabs"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        promoted: true,
        avgRating: "3.8",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    }
```
- ])
- So the page will load correctly, we cannot define state variable like normal variable . It should follow this syntax.
- To further modify the restData we cannot perform something like restData = <updated_data> we cannot do like this, so we have to call a set function on the restData.
- How to define set function is :
	- const [restData,setRestData] = useState([]); //The bold values are the forming of declaring we call it as array de structuring.
	- whenever you want to modify restData , we call setRestData and pass the updated data.
	- whenever the state variable updates react re renders the component.
- Virtual Dom : this is representation of Actual Dom, it is a Javascript object. So comparing two javascript objects(Virtual dom and snapshot of virtual dom) is easy.
- React Fiber : This is better way of identifying the differences between the virtual DOM. (like checking incrementally in chunks)

Lesson 6: Exploring the World:

MonoLith Vs Microservice Architecture:

Microservices: 
- Separation of concerns. handles Single Responsibility Principle.

We will configure our UI microservice communicates with other services to fetch the data.
There are 2 Approaches how the frontend fetch the data from backend.
	When UI loads -------> it waits for API to load ---------> then it renders UI
	When UI Loads --------> it renders whatever it has --------> it waits for API to load ----------> then re renders.
	
In React we will follow second approach. It has a better UX experience.

To handle this we use a hook called useEffect();
useEffect takes two arguments .
	A callback function.
	A dependency.
useEffect( () => {},[]);
So we can keep this useEffect inside a component and the callback function   is called once the component is loaded. As the array(dependency list) is empty it is only called once. If the array has dependencies added then whenever there is change in elements of dependency list then useEffect method is called again.
We can try using browser provided fetch function to fetch data from an API. Ideally we can use Promises and use the promise is resolved or else we can use async wait functionality and can achieve this.
useEffect : If we dont pass any dependency array like useEffect(()=>{}) then every time component renders useEffect will be called. if we pass any empty array then it is called only once.
Development Steps:
- Import useEffect from react.
- Inside Body component(any component where you want this useEffect) write useEffect function.
- useEffect( () => {}, dependencylist).
	- 
```
const Body = () => {
  const [restData, setRestData] = useState([]);
  const fetchFunction = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4358411&lng=78.3467857&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    console.log(jsonData);
    setRestData(jsonData?.data?.cards[2]?.data?.data?.cards);//(optional chaining)
};
  useEffect( () => {fetchFunction()} , []);
  return (
    <div className="body">
      <Search />
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restData.filter((res) => res.data.avgRating > 4);
            setRestData(filteredData);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restaurant-container">
      {restData.map((item) => (
        <RestauranCard key={item.data.id} restaurantData={item} />
      ))}
    </div>
    </div>
  );
};
export default Body;
```
There is a delay in loading the data to page.
How can we improve the experience?
So we can add before returning the jsx we can print Loading.... text. So once we set the data using useState function method and set the data then component will be reloaded with correct data.
But this is a bad approach of display some loading text or adding a spinner.

Instead we can use shimmer ui. A fake UI which can be displayed before loading the actual UI.
How to create shimmer ui: Like we have create component we can create a Shimmer component.
Add some div and css with fake restaurant cards . So we are rendering the page with Shimmer effect based on a condition this is called Conditional Rendering.

We can also use conditional operator where we check with restData.length === 0 then load shimmer else load the Restaurant container component. 

```
const Body = () => {
  const [restData, setRestData] = useState([]);
  useEffect(()=>{fetchData()},[]);
  
  const fetchData = async () => {
    const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4358411&lng=78.3467857&page_type=DESKTOP_WEB_LISTING");
    const fetchRestData = await fetchData.json();
    setRestData(fetchRestData.data.cards[2].data.data.cards);
  };
  return restData.length === 0? <Shimmer/> : (
    <div className="body">
      <Search />
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restData.filter((res) => res.data.avgRating > 4);
            setRestData(filteredData);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restaurant-container">
      {restData.map((item) => (
        <RestauranCard key={item.data.id} restaurantData={item} />
      ))}
    </div>
    </div>
  );
};
```

One insight we have defined restData as const but we are changing the restData using setRestData but internally how is it getting managed? 
So whenever there is a setRestData called react actually reloads the component with the updated value so there will be no issue.
Try to add a button called Login button , when it is clicked from Login it has to turn to Logout and when clicked again it has to go back to Login and viceversa. Try creating the code for that.
```
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  let btnName = "Login";
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login"
            onClick={() => {
              btnName = "Logout";
              console.log(btnName);
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
```
When you click on login button onClick method is called and in console also we can see changed btnName to Logout is printed but the label is not getting updated. This is because React doesnt know the label has changed and It will not be updated as it doesnt identify a change in dom. This is the reason we have to use useState hook to register this variable and set the variable accordingly.
Updated code is.
```
import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
const Header = () => {
  const [btnName,setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login"
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
```
So here when clicking the button the setBtnName is called and React refreshes the whole component with the updated button value this is called as reconciliation .

Add a search text and button , when text is entered and button is clicked the UI has to be filtered with the searched text restaurants. 
As we have kept the default of searchText as empty in useState, so if we try to enter the value the updated text will not be taken into account , so we have write the in onChangeListener and call setSearchText to update the search text.
```
import Search from "./Search";
import { CDN_URL, SWIGGY_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestauranCard = (props) => {
  const { restaurantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restaurantData?.data;
  return (
    <div className="restaurant-card">
      <img alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} for Two</h4>
    </div>
  );
};
const Body = () => {
  const [restData, setRestData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const fetchData = await fetch(SWIGGY_URL);
    const fetchRestData = await fetchData.json();
    setRestData(fetchRestData.data.cards[2].data.data.cards);
  };
  const [searchText, setSearchText] = useState("");
  return restData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filterSearch">
        <div className="searchText">
          <input
            type="text"
            value={searchText}
            onChange={(val) => {
              setSearchText(val.target.value);
            }}
          />
        </div>
        <div className="searchButton">
          <button
            onClick={() => {
              const data = restData.filter((r) => r.data.name.includes(searchText));
              setRestData(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {/* <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restData.filter((res) => res.data.avgRating > 4);
            setRestData(filteredData);
          }}
        >
          Filter
        </button>
      </div> */}
      <div className="restaurant-container">
        {restData.map((item) => (
          <RestauranCard key={item.data.id} restaurantData={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;
```
We can also filter the rest data dynamically while entering the text also

Lesson 7: Finding the Path

Some important Hooks points:
- Never create a Component inside a component.
- Never use useState inside if condition or forloop.
- useState is used to create a local state variable inside a component so never use useState outside of the component.
- I can create multiple useEffects based on the usecase

React Router:
> npm install react-router-dom

Once installed use import {createBrowserRouting} from "react-router-dom"
createBrowserRouting is a function used to configure routing in react. There are different ways to create routes but in React documentation it says this is the recommended method to be used.
 
Routing logic in App.js. create routing path details with path and element.
```

const routerDefinition = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element:<About/>
  }
]);
```
After defining routerDefinition we need to integrate with RouterProvider so we can render RouterProvider in ReactDOM.
```
import { createBrowserRouter, RouterProvider} from "react-router-dom";
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const routerDefinition = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element:<About/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerDefinition}/>);
```
Add error handling:

```
import Error from "./components/Error";
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const routerDefinition = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerDefinition}/>);
```

Using hooks for showing error with better messaging .
There is a hook for this useRouteError.
```
import { useRouteError } from "react-router-dom";
const Error = () => {
    const {status,statusText} = useRouteError();
    return (
        <div className="Error">
            <h1>{status}</h1>
            <h2>{statusText}</h2>
        </div>
    );
}
export default Error;
```

Single Page Application(SPA):
There are 2 kinds of routing Client Side Routing and Server Side Routing
Client Side: When we route to About page or contact us page from webbrowser , there will no network call and as all the components are there are Client Side so respective pages gets loaded up.
Server Side: When we route to About page or contact us page from webbrowser , the data will come from Server this is called Server Side routing

We will try Client Side routing:
If we add anchor tag the page will completely loads, so we can use Named Import called as Link.
```
import { Link } from "react-router-dom";
import About from "./About";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <Link to="/about"><li>About Us</li></Link>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
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
```

Nested Routing:
we want to load our page dynamically based on the link we selected.
So of this we have to load the pages as children in App.js 
Import Outlet component for react-router-dom and place it in location where the dynamic pages should display.

```
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const routerDefinition = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
```
Dynamic Routing:
whenever we select a RestaurantCard it has to load particular page ex: ResturantCard/<:id>
RestaurantMenu component
```
import { useParams } from "react-router-dom";
const ResturantMenu = () => {
    const params = useParams(); 
    console.log(params);
    return (
        <div className="restaurantMenu">
            <h1>Restaurant: {params.id}</h1>
        </div>
    );
}
export default ResturantMenu;
```
Using this component in App.js
```
const routerDefinition = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <ResturantMenu />,
      }
    ],
  },
]);
```
Provide the id of it and the corresponding restaurant page should loads up.Right now we are entering the ID manually in the url and the corresponding Restaurant Menu is loading up.
```
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
const ResturantMenu = () => {
  const params = useParams();
  const [restData,setRestData] = useState([]);
  useEffect(() => {
    fetchRestaurant();
  }, [params.id]);
  const fetchRestaurant = async () => {
    const urlData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4358411&lng=78.3467857&restaurantId=${params.id}`
    );
    const data = await urlData.json();
    console.log(data);
    setRestData(data.data.cards[0].card.card.info);
  };
  return restData.length === 0 ? <Shimmer/>:(
    <div className="restaurant-menu">
      <img src={CDN_URL+restData.cloudinaryImageId}></img>
      <h1>RestaurantName: {restData.name}</h1>
    </div>
  );
};
export default ResturantMenu;
```
Now we will enhance where we will select the Restaurant and it should load the Restaurant Menu with the corresponding ID.

Revision:

Can we use multiple useEffects inside a component 
Yes

Can we write useState in if statement?
Yes , but it is not recommended.

How to load static images into our app.
create assets/images folder under src. write a import in your component/page use.Image is default export not a named export.

What is the package to use if we want to create forms easily
Formik

How do we setup Routing.
Import RouterProvider from "react-router-dom";
Import createBrowserRouter from "react-router-dom"
and create a variable as
const routerDefinition = createBrowserRouter[
{
path:"/app",
element:<<component>/>
}
]
reactDOM.render(<RouterProvider router={routerDefinition});

How do we setup Error page.
Import {RouterProvider ,createBrowserRouter} from "react-router-dom";
and create a variable as
const routerDefinition = createBrowserRouter[
{
path:"/",
element:<AppLayout/>,
errorElement:<Error/>
}
]
reactDOM.render(<RouterProvider router={routerDefinition});

How to define an Error page with more meaningful error.what is the hook we used
import {useRouteError} from "react-router-dom";

const Error = ()=>{
	const [status,statusText] = userRouteError();
	<use these status and status messages appropriately>
}

How to do nested routing:
Import {Outlet} from "react-router-dom";

```
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
```

const routerDefinition = createBrowserRouter
[
	{
	path:"/",
	element:<AppLayout/>,
	errorElement:<Error/>
	childen://So all the children will go inside Outlet.
		{    
		path:"/home",
		element:<Home/>
		}
	}
]
reactDOM.render(<RouterProvider router={routerDefinition});

How to define dynamic routing:What is the hook to read these ids?
const routerDefinition = createBrowserRouter[
{
path:"/",
element:<AppLayout/>,
errorElement:<Error/>
},
{
path:"/home",
element:<Home/>
},
{
path:"/restaurant/:id",
element:<RestaurantMenu/>
}
]
Inside RestaurantMenu component
import {useParams} from "react-router-dom";
const RestaurantMenu = () => {
const [params] = userParams;//Use can also do destructuring.
const id = params.id;
//use this id and load the respective data.
}

How do we provide a single page navigation when we click on something:
we can use <Link> tag
Ex : <Link to="<path>"></Link>
Assignment:
Build a login page using forms. You can follow documentation and create that.