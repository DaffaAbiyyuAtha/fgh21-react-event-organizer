import React from "react";
import Logo from "./Logo.jsx";
import fb from "../../img/sosmed-fb.svg";
import wa from "../../img/sosmed-ig.svg";
import ig from "../../img/sosmed-wa.svg";
import x from "../../img/sosmed-x.svg";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="p-10 md:p-16 w-full pb-[36px] bg-[#DEF9C4]">
      <div className="flex flex-col md:flex-row gap-[10px] mb-[76px]">
        <div className="md:w-2/5">
          <div className="mb-[30px] ">
            <Logo />
          </div>
          <div className="mb-[15px] text-[#468585] font-medium tracking-[1px] text-sm">
            Find events you love with our
          </div>
          <div className="flex gap-[16px] text-[#468585]">
            <div>
              <FaSquareFacebook className="w-6 h-6" />
            </div>
            <div>
              <FaSquareInstagram className="w-6 h-6" />
            </div>
            <div>
              <FaSquareWhatsapp className="w-6 h-6" />
            </div>
            <div>
              <FaSquareTwitter className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="md:w-1/5">
          <div className="font-semibold tracking-[1px] text-[#468585] mb-[20px]">
            Wetick
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            About Us
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Features
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Blog
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Payments
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Mobile App
          </div>
        </div>
        <div className="md:w-1/5">
          <div className="font-semibold tracking-[1px] text-[#468585] mb-[20px]">
            Features
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Booking
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Create Event
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Discover
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Register
          </div>
        </div>
        <div className="md:w-1/5">
          <div className="font-semibold tracking-[1px] text-[#468585] mb-[20px]">
            Company
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Partnership
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Help
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Terms of Service
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Privacy Policy
          </div>
          <div className="font-medium tracking-[1px] text-[#50B498] mb-[16px]">
            Sitemap
          </div>
        </div>
      </div>
      <div className="font-semibold text-[#468585] tracking-[1px]">
        &copy; 2020 Wetick All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
