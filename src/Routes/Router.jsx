import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";

import Layout from "../Layout";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoutes";

export const router= createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<PrivateRoute><Home/></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            }
        ]
    }
])