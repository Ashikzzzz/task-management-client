import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Signup from "../authentication/signup";
import Login from "../authentication/login";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import ManageUser from "../components/ManageUser/ManageUser";
import CreateTask from "../Dashboard/CreateTask/CreateTask";
import DashboardLayout from "../layouts/DashboardLayout";
import SeeAllTask from "../Dashboard/SeeAllTask/SeeAllTask";

// import ManageUser from "../components/Profile/ManageUser";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/profile",
                element:<Profile></Profile>
            },
            {
               path:"/signup",
               element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/manage-user",
                element: <ManageUser></ManageUser>
            }
           
        ]
    },
    {
        path:"/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/create-task",
                element: <CreateTask></CreateTask>
            },
            {
                path: "/dashboard/allTask",
                element: <SeeAllTask></SeeAllTask>
            }
        ]
        
    }
])