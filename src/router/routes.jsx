import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Stay from './../Layout/Header/Stay/Stay';
import Flights from './../Layout/Header/Flights/Flights';
import Carrentals from "../Layout/Header/Carrentals/Carrentals";
import Attractions from "../Layout/Header/Attraction/Attractions";
import NotFound from "../Components/NotFound/NotFound";
import Signup from "../pages/Auth/Signup/Signup";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/stay',
                element:<Stay/>
            },
            {
                path:'/flights',
                element:<Flights/>
            },
            {
                path:'/carrentals',
                element:<Carrentals/>
            },
            {
                path:'/attractions',
                element:<Attractions/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Signup/>
    },
    {
        path:'*',
        element:<NotFound/>
    },
])

export default routes;

