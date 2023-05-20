/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy";
import AllToy from "../pages/AllToy";
import Error404 from "../pages/Error404";
import Blogs from "../pages/Home/Blogs";
import CatagoryDetails from "../pages/Home/CatagoryDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MyToy from "../pages/MyToy";
import SingUP from "../pages/SingUp";
import ViewDetails from "../pages/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404></Error404>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <SingUP></SingUP>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allToy",
        element: <AllToy></AllToy>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/myToy",
        element: <MyToy></MyToy>,
      },
      {
        path: "/catagoryDetails/:id",
        element: <CatagoryDetails></CatagoryDetails>,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
      },
    ],
  },
]);
export default router;
