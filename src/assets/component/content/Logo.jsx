import React from "react";
import logo from "../../img/logo.svg";

function Logo() {
  return (
    <div className="flex items-center gap-0.5">
      <div className="">
        <img src={logo}></img>
      </div>
      <div className="flex gap-px font-semibold">
        <div className="text-2xl text-[#3366FF]">We</div>
        <div className="text-2xl text-[#FF3D71]">tick</div>
      </div>
    </div>
  );
}

export default Logo;
