import React from "react";
import Logo from "../content/Logo";
import profile from "../../img/profile.svg";
import { Link } from "react-router-dom";
import toggle from "../../img/toggle.svg";

function Navbar() {
  const [open, setOpen] = React.useState(true);
  function toggles() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  return (
    <div className="bg-white py-4 px-10 md:px-16 flex flex-col gap-4 md:justify-between md:flex-row w-full md:items-center">
      <div className="flex justify-between">
        <Link to="/" className="flex justify-between items-center">
          <Logo />
        </Link>
        <button type="button" onClick={toggles} className="md:hidden">
          <img src={toggle} alt="" />
        </button>
      </div>
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
        <div className="text-[#373A42] text-sm font-semibold tracking-wider">
          Create Event
        </div>
        <div className="text-[#373A42] text-sm font-semibold tracking-wider">
          Location
        </div>
      </div>
      <div
        className={
          open
            ? "md:flex gap-6 hidden"
            : "flex flex-col justify-center items-center md:flex-row gap-6"
        }
      >
        <Link to="/profile" className="flex justify-center">
          <div className="flex items-center gap-[8px]">
            <div className="rounded-full">
              <img
                src={profile}
                className="rounded-full border-2 border-[#3366FF] "
              />
            </div>

            <div className="text-sm tracking-[1px] text-[#373A42] font-semibold">
              Jhon Tomson
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
