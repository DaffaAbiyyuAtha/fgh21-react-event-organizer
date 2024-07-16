import React from "react";
import Logo from "../content/Logo";
import profile from "../../img/profile.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center pl-[50px] pr-[50px] bg-white">
      <div className="">
        <Logo />
      </div>
      <div className="flex gap-[48px]">
        <div className="text-sm tracking-[1px] text-[#3366FF] font-semibold border-b-4 border-[#3366FF]">
          Home
        </div>
        <div className="text-sm tracking-[1px] text-[#373A42] font-semibold">
          Create Event
        </div>
        <div className="text-sm tracking-[1px] text-[#373A42] font-semibold">
          Location
        </div>
      </div>
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
    </div>
  );
}
export default Navbar;
