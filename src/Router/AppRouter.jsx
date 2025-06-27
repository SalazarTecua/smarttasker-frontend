
import { createBrowserRouter } from "react-router-dom"

import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Components/Dashboard/Dashboard";
import Content from "../Components/Content/Content";
export const ROUTER_PAGE = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {path: "Dashboard", element: <Dashboard/> },
      { path: "Tareas", element: <Content/>}
    ]
  }
]);