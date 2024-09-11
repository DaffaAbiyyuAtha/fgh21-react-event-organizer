import React from "react";
import logo from "../../img/logo.svg";
import logoGreen from "../../img/logo_green.png";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="">
        <img className="w-14 h-10" src={logoGreen}></img>
      </div>
      <div className="flex gap-px font-semibold">
        <div className="text-2xl text-[#468585]">My</div>
        <div className="text-2xl text-[#50B498]">Tick</div>
      </div>
    </div>
  );
}

export default Logo;
