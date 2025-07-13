
import { createBrowserRouter } from "react-router-dom"

import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Components/Dashboard/Dashboard";
import Calendar from "../Components/Calendar/Calendar";
import Task from "../Components/Task/Task";
import TaskCalendar from "../Components/Task/TaskCalendar/TaskCalendar";
export const ROUTER_PAGE = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {path: "Dashboard", element: <Dashboard/> },
      {path: "Tareas", element: <Task/>},
      {path: "Calendario", element: <TaskCalendar/>}, 
      {path: "Ajustes", element: <Calendar/>}
    ]
  }
]);