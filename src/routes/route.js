import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Signup from "../authentication/signup";
import Login from "../authentication/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
               path:"/signup",
               element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])