import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import { adminPath, adminRoutes } from "./adminRoutes";
import Contact from "../pages/Contact";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPath } from "./facultyRoutes";
import { studentPath } from "./studentRoutes";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "about",
                element : <About/>
            },
            {
                path : "contact",
                element : <Contact/>
            }
        ]
    },
    {
        path : "/admin",
        element : <App/>,
        children : routesGenerator(adminPath)
    },
    {
        path : "/faculty",
        element : <App/>,
        children : routesGenerator(facultyPath)
    },
    {
        path : "/student",
        element : <App/>,
        children : routesGenerator(studentPath)
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/register",
        element : <Register/>
    }
])

export default router