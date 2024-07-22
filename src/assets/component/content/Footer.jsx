import React from "react";
import Logo from "./Logo.jsx";
import fb from "../../img/sosmed-fb.svg";
import wa from "../../img/sosmed-ig.svg";
import ig from "../../img/sosmed-wa.svg";
import x from "../../img/sosmed-x.svg";

function Footer() {
  return (
    <div className="p-10 p-16 w-full pb-[36px]">
      <div className="flex flex-col md:flex-row gap-[10px] mb-[76px]">
        <div className="md:w-2/5">
          <div className="mb-[30px] ">
            <Logo />
          </div>
          <div className="mb-[15px] text-[#373A42] font-medium tracking-[1px] text-sm">
            Find events you love with our
          </div>
          <div className="flex gap-[16px]">
            <div>
              <img src={fb} alt="" />
            </div>
            <div>
              <img src={wa} alt="" />
            </div>
            <div>
              <img src={ig} alt="" />
            </div>
            <div>
              <img src={x} alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-1/5">
          <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
            Wetick
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            About Us
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Features
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Blog
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Payments
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Mobile App
          </div>
        </div>
        <div className="md:w-1/5">
          <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
            Features
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Booking
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Create Event
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Discover
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Register
          </div>
        </div>
        <div className="md:w-1/5">
          <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
            Company
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Partnership
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Help
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Terms of Service
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Privacy Policy
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Sitemap
          </div>
        </div>
      </div>
      <div className="font-semibold text-[#5A7184] tracking-[1px]">
        &copy; 2020 Wetick All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
