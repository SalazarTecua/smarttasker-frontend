import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER_PAGE } from './Router/AppRouter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <RouterProvider router={ROUTER_PAGE} />
    </>
  )
}

export default App
