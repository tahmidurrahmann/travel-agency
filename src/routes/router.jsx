import { createBrowserRouter } from "react-router-dom";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import App from "../App";
import Offer from "../pages/Home/Offer/Offer";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "../private/PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import UserProfile from "../pages/Dashboard/Dashboard/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/offers/:id",
                element: <Offer />
            },
        ]
    },
    {
        path: "/booking/:id",
        element: <PrivateRoute><Bookings /></PrivateRoute>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children : [
           {
            path : "userProfile",
            element : <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
           }
        ]
    },
])

export default router;