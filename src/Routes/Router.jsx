import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/bookings";
import PrivateRoute from "./PrivateRoute";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/book/:id",
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-jwt-recap-sk-sajibs-projects.vercel.app/services/${params.id}`)
        },
        {
          path: "/bookings",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

export default Router;