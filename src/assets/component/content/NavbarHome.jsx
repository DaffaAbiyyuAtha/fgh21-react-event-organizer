import React from "react";
import Logo from "../content/Logo";
import { Link, ScrollRestoration } from "react-router-dom";
import toggle from "../../img/toggle.svg";

function NavbarHome() {
  const [open, setOpen] = React.useState(true);
  function toggles() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  return (
    <div className="py-4 px-10 md:px-16 flex flex-col gap-4 md:justify-between md:flex-row w-full md:items-center">
      <Link to="/" className="flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <button type="button" onClick={toggles} className="md:hidden">
          <img src={toggle} alt="" />
        </button>
      </Link>
      <div
        className={
          open
            ? "md:flex gap-6 hidden"
            : "flex flex-col justify-center items-center md:flex-row gap-6"
        }
      >
        <Link
          to="/"
          className="text-[#3366FF] text-sm font-semibold tracking-wider border-b-2 border-[#3366FF]"
        >
          <div className="">Home</div>
        </Link>
        <Link to="/my-create-event">
          <div className="text-[#373A42] text-sm font-semibold tracking-wider">
            Create Event
          </div>
        </Link>
        <div className="text-[#373A42] text-sm font-semibold tracking-wider">
          Location
        </div>
      </div>
      <div
        className={open ? "md:flex hidden" : "flex flex-col gap-4 md:flex-row"}
      >
        <Link to="/login" className="">
          <button
            type="button"
            className="h-10 md:w-40 
            w-full text-[#373A42] rounded-lg text-sm tracking-wider"
          >
            Log In
          </button>
        </Link>
        <Link to="/sign-up" className="">
          <button
            type="button"
            className="h-10 md:w-40 w-full bg-[#3366FF] text-white rounded-lg text-sm tracking-wider"
          >
            Sign Up
          </button>
        </Link>
      </div>
      <ScrollRestoration />
    </div>
  );
}
export default NavbarHome;
