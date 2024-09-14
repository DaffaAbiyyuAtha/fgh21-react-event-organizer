import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Event from "./pages/Event";
import Ticket from "./pages/Ticket";
import Payment from "./pages/Payment";
import Password from "./pages/Password";
import Booking from "./pages/Booking";
import Wishlist from "./pages/Wishlist";
import Popup from "./assets/component/content/Popup";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import CreateEvent from "./pages/CreateEvent";
import { Provider } from "react-redux";
import  {store}  from "./redux/store";
import {persistStore} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const persistor = persistStore(store)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/events/:id",
    element: <Event />,
  },
  {
    path: "/events/section/:id",
    element: <Ticket />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/change-password",
    element: <Password />,
  },
  {
    path: "/my-booking",
    element: <Booking />,
  },
  {
    path: "/my-create-event",
    element: <CreateEvent />,
  },
  {
    path: "/my-wishlist",
    element: <Wishlist />,
  },
  {
    path: "/pop-up",
    element: <Popup />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
