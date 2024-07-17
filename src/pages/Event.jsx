import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import location from "../assets/img/location.svg";
import clock from "../assets/img/clock.svg";
import map from "../assets/img/map.svg";
import museum from "../assets/img/museum.svg";
import favorite from "../assets/img/favorite.svg";
import profile1 from "../assets/img/profile1.svg";
import profile2 from "../assets/img/profile2.svg";
import profile3 from "../assets/img/profile3.svg";
import profile4 from "../assets/img/profile4.svg";
import { Link } from "react-router-dom";

function Event() {
  return (
    <div className="bg-[#F4F7FF]">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="">
        <div className="flex mt-[48px] mr-[120px] ml-[120px] mb-[100px] bg-white rounded-[30px] p-[100px]">
          <div className=" w-2/5 h-[486px] mr-[88px] ">
            <div className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden">
              <img
                src={museum}
                alt=""
                className=" h-full w-full object-cover"
              />
              <div className="absolute bg-gradient-to-t from-[black] to-[transparent] w-full h-full "></div>
            </div>
            <div className="flex justify-center items-center gap-[16px]">
              <div className="">
                <img src={favorite} alt="" className="w-[36px] h-[36px]" />
              </div>
              <div className="font-semibold text-xl text-[#373A42] tracking-[1px]">
                Add to Wishlist
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <div className="border-b-2 border-solid border-[rgba(193,197,208,0.25)] mb-[25px]">
              <div className="font-semibold text-2xl mb-[30px] tracking-[2px]">
                Sights & Sounds<div>Exhibition</div>
              </div>
              <div className="flex gap-[88px] mb-[30px]">
                <div className="flex gap-[4px] text-sm items-center tracking-[1px] font-medium">
                  <div className="">
                    <img src={location} alt="" />
                  </div>
                  <div className="text-[#373A42] font-medium text-sm">
                    Jakarta, Indonesia
                  </div>
                </div>
                <div className="flex gap-[4px] text-sm items-center tracking-[1px] font-medium">
                  <div className="">
                    <img src={clock} alt="" />
                  </div>
                  <div className="text-[#373A42] font-medium text-sm">
                    Wed, 15 Nov, 4:00 PM
                  </div>
                </div>
              </div>
              <div className="text-sm tracking-[1px] font-medium text-[#373A42] mb-[28px]">
                Attendees
              </div>
              <div className="flex mb-[8px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
            </div>
            <div className="font-semibold tracking-[1px] text-xl mb-[16px]">
              Event Detail
            </div>
            <div className="text-xs text-[rgba(55,58,66,0.75)] mb-[12px]">
              After his controversial art exhibition "Tear and Consume" back in
              November 2018, in which guests were invited to tear up…
            </div>
            <div className="text-xs text-[#3366FF] font-medium mb-[25px]">
              Read More
            </div>
            <div className="text-xl tracking-[1px] text-[#373A42] mb-[16px]">
              Location
            </div>
            <div>
              <img
                src={map}
                alt=""
                className="h-[152px] w-full max-w-[315px] rounded-[20px] mb-[50px]"
              />
            </div>
            <Link to="/ticket">
              <button
                type="submit"
                className="h-[55px] w-full max-w-[315px] bg-[#3366FF] rounde text-white rounded-[15px]"
              >
                Buy Tickets
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Event;
