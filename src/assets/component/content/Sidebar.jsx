import React from "react";
import profile from "../../img/profile.svg";
import profileSide from "../../img/profile-side.svg";
import profileCard from "../../img/profile-card.svg";
import profilePassword from "../../img/profile-password.svg";
import profileBooking from "../../img/profile-booking.svg";
import profileList from "../../img/profile-list.svg";
import profileSetting from "../../img/profile-setting.svg";
import profileLogout from "../../img/profile-logout.svg";
import profileCreate from "../../img/profile-create.svg";
import { Link } from "react-router-dom";
import { FaPen, FaUser, FaAddressCard, FaLockOpen } from "react-icons/fa";
import { FaCirclePlus, FaBook, FaHeart, FaGear } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-1/4">
      <div className="flex gap-[16px]">
        <div className="">
          <img
            src={profile}
            alt=""
            className="rounded-full border-2 border-[#3366FF]"
          />
        </div>
        <div className="flex flex-col gap-[8px] items-center mb-[50px]">
          <div className="text-sm text-[#373A42] font-semibold ">
            Jhon Tomson
          </div>
          <div className="text-xs text-[#666971]">Entrepreneur, ID</div>
        </div>
      </div>
      <div className="flex gap-[24px] hover:text-[#3366FF] items-center text-[#373A42] tracking-[1px] font-semibold mb-[28px]">
        <div className="">
          <FaUser />
        </div>
        <div className="">Profile</div>
      </div>
      <div className="flex gap-[24px] text-[#373A42] hover:text-[#3366FF] items-center  tracking-[1px] font-semibold mb-[28px] pl-[50px]">
        <div className="">
          <FaAddressCard />
        </div>
        <div className="">Card</div>
      </div>
      <Link to="/profile" className="">
        <div className="flex gap-[24px] hover:text-[#3366FF] text-[#373A42] items-center tracking-[1px] font-semibold mb-[28px] pl-[50px]">
          <div className="">
            <FaPen />
          </div>
          <div className="">Edit Profile</div>
        </div>
      </Link>
      <Link to="/change-password">
        <div className="flex hover:text-[#3366FF] items-center gap-[24px] text-[#373A42] tracking-[1px] font-semibold mb-[28px] pl-[50px]">
          <div className="">
            <FaLockOpen />
          </div>
          <div className="">Change Password</div>
        </div>
      </Link>
      <Link to="/my-create-event">
        <div className="hover:text-[#3366FF] items-center flex gap-[24px] text-[#373A42] tracking-[1px] font-semibold mb-[28px]">
          <div className="">
            <FaCirclePlus />
          </div>
          <div className="">Create Event</div>
        </div>
      </Link>
      <Link to="/my-booking">
        <div className="hover:text-[#3366FF] items-center flex gap-[24px] text-[#373A42] tracking-[1px] font-semibold mb-[28px]">
          <div className="">
            <FaBook />
          </div>
          <div className="">My Booking</div>
        </div>
      </Link>
      <Link to="/my-wishlist">
        <div className="hover:text-[#3366FF] items-center flex gap-[24px] text-[#373A42] tracking-[1px] font-semibold mb-[28px]">
          <div className="">
            <FaHeart />
          </div>
          <div className="">My Wishlist</div>
        </div>
      </Link>
      <div className="hover:text-[#3366FF] items-center flex gap-[24px] text-[#373A42] tracking-[1px] font-semibold mb-[28px]">
        <div className="">
          <FaGear />
        </div>
        <div className="">Settings</div>
      </div>
      <div className="flex gap-[24px] text-[#373A42] tracking-[1px] font-semibold mb-[28px]">
        <div className="">
          <img src={profileLogout} alt="" />
        </div>
        <div className="text-[#F03800]">Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
