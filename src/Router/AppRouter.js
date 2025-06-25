
import { createBrowserRouter } from "react-router-dom"

import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Components/Dashboard/Dashboard";


export const ROUTER_PAGE = createBrowserRouter([
   { 
    path: '/',
    element: <Dashboard/>,
    errorElement: <ErrorPage/> , 
    children:[ 
        { index: true, element: <Home/> },
        { path: 'tareas', element: '' },
        { path: 'eventos', element: '' },
        
        
    ], 
},
]) ;  