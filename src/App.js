import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/AboutClass";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import ResturantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Instamart = lazy( () => import("./components/Instamart"));


const AppLayout = () => {
  const [user,setUser] = useState({
    username:"new user",
    email:"new email"
  });

  return (
    <>
    <UserContext.Provider value={
      {
        user:user,
        setUser:setUser
      }
    }>

    <Header />
      <Outlet />
    </UserContext.Provider>

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
        element: <About name="Pedhanna"/>,
        children:[{
          path:"profile",// if we add /profile then this will get loaded using /localhost:1234/profile. So not to / before profile.
          element:<Profile/>
        }]
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
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerDefinition} />);
