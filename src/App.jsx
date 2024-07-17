import React from "react";
import Login from "./pages/Login";
import Event from "./pages/Event";
import Ticket from "./pages/Ticket";
import Payment from "./pages/Payment";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
