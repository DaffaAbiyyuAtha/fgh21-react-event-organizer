import React from "react";
import profile from "../../img/profile.svg";
import profileLogout from "../../img/profile-logout.svg";
import profileCreate from "../../img/profile-create.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaPen, FaUser, FaAddressCard, FaLockOpen } from "react-icons/fa";
import { FaCirclePlus, FaBook, FaHeart, FaGear } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa6";
import { logout } from "../../../redux/reducers/auth";
import { removeData } from "../../../redux/reducers/profile";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataProfile = useSelector((state) => state.profile.data);

  function clearData() {
    dispatch(logout());
    dispatch(removeData());
    navigate("/login");
  }
  return (
    <div className="hidden md:flex flex-col p-6">
      <div className="flex gap-[16px]">
        <div className="">
          <img
            src={dataProfile.picture}
            alt=""
            className="rounded-full border-2 w-12 h-12 border-[#468585]"
          />
        </div>
        <div className="flex flex-col gap-[8px] items-center mb-[50px]">
          <div className="text-sm text-[#468585] font-semibold ">
            {dataProfile.name}
          </div>
          <div className="text-xs text-[#DEF9C4]">Entrepreneur, ID</div>
        </div>
      </div>
      <div className="flex gap-[24px] hover:text-[#468585] items-center text-[#DEF9C4] tracking-[1px] font-semibold mb-[28px]">
        <div className="">
          <FaUser />
        </div>
        <div className="">Profile</div>
      </div>
      <div className="flex gap-[24px] text-[#DEF9C4] hover:text-[#468585] items-center  tracking-[1px] font-semibold mb-[28px] pl-[50px]">
        <div className="">
          <FaAddressCard />
        </div>
        <div className="">Card</div>
      </div>
      <Link to="/profile" className="">
        <div className="flex gap-[24px] hover:text-[#468585] text-[#DEF9C4] items-center tracking-[1px] font-semibold mb-[28px] pl-[50px]">
          <div className="">
            <FaPen />
          </div>
          <div className="">Edit Profile</div>
        </div>
      </Link>
      <Link to="/change-password">
        <div className="flex hover:text-[#468585] items-center gap-[24px] text-[#DEF9C4] tracking-[1px] font-semibold mb-[28px] pl-[50px]">
          <div className="">
            <FaLockOpen />
          </div>
          <div className="">Change Password</div>
        </div>
      </Link>
      <Link to="/my-create-event">
        <div className="hover:text-[#468585] items-center flex gap-[24px] text-[#DEF9C4] tracking-[1px] font-semibold mb-[28px]">
          <div className="">
            <FaCirclePlus />
          </div>
          <div className="">Create Event</div>
        </div>
      </Link>
      <Link to="/my-booking">
        <div className="hover:text-[#468585] items-center flex gap-[24px] text-[#DEF9C4] tracking-[1px] font-semibold mb-[28px]">
          <div className="">
            <FaBook />
          </div>
          <div className="">My Booking</div>
        </div>
      </Link>
      <Link to="/my-wishlist">
        <div className="hover:text-[#468585] items-center flex gap-[24px] text-[#DEF9C4] tracking-[1px] font-semibold mb-[28px]">
          <div className="">
            <FaHeart />
          </div>
          <div className="">My Wishlist</div>
        </div>
      </Link>
      <div className="hover:text-[#468585] items-center flex gap-[24px] text-[#DEF9C4] tracking-[1px] font-semibold mb-[28px]">
        <div className="">
          <FaGear />
        </div>
        <div className="">Settings</div>
      </div>
      <div className="flex gap-[24px] text-[#373A42] tracking-[1px] font-semibold mb-[28px]">
        <div className="">
          <img src={profileLogout} alt="" />
        </div>
        <button onClick={clearData} className="text-[#F03800]">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
