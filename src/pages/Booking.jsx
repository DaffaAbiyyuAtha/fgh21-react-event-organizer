import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import dateBlue from "../assets/img/date-blue.svg";
import { FaCalendarDays } from "react-icons/fa6";

function Booking() {
  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex m-10 md:m-16 ">
        <Sidebar />
        <div className="flex-1 bg-[#DEF9C4] rounded-[30px] md:p-10">
          <div className="flex justify-between items-center ">
            <div className="text-xl font-semibold tracking-[1px]">
              My Booking
            </div>
            <div className="flex items-center justify-center rounded-2xl gap-4 w-32 h-12 bg-[#468585]">
              <div className="text-[#DEF9C4]">
                <FaCalendarDays />
              </div>
              <div className="text-[#DEF9C4] font-medium tracking-widest text-xs">
                March
              </div>
            </div>
          </div>
          <div className="h-full w-full hidden">
            <div className="flex flex-col items-center justify-center h-full gap-[16px] ">
              <div className="font-semibold tracking-[1px] text-2xl text-[#468585]">
                No tickets bought
              </div>
              <div className="font-medium tracking-[0.5px] text-center text-sm text-[#50B498]">
                It appears you haven’t bought any tickets yet. Maybe try
                searching these?
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll shrink-0 h-96">
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                <div className="text-[#50B498]">15</div>
                <div className="text-[#468585]">Wed</div>
              </div>
              <div>
                <div className="font-semibold text-[#468585] text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#50B498] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#468585] underline mt-3">
                  Detail
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                <div className="text-[#50B498]">15</div>
                <div className="text-[#468585]">Wed</div>
              </div>
              <div>
                <div className="font-semibold text-[#468585] text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#50B498] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#468585] underline mt-3">
                  Detail
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                <div className="text-[#50B498]">15</div>
                <div className="text-[#468585]">Wed</div>
              </div>
              <div>
                <div className="font-semibold text-[#468585] text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#50B498] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#468585] underline mt-3">
                  Detail
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                <div className="text-[#50B498]">15</div>
                <div className="text-[#468585]">Wed</div>
              </div>
              <div>
                <div className="font-semibold text-[#468585] text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#50B498] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#468585] underline mt-3">
                  Detail
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                <div className="text-[#50B498]">15</div>
                <div className="text-[#468585]">Wed</div>
              </div>
              <div>
                <div className="font-semibold text-[#468585] text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#50B498] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#468585] underline mt-3">
                  Detail
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                <div className="text-[#50B498]">15</div>
                <div className="text-[#468585]">Wed</div>
              </div>
              <div>
                <div className="font-semibold text-[#468585] text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#50B498] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#468585] underline mt-3">
                  Detail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Booking;
