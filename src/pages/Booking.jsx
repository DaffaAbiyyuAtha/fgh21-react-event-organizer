import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import dateBlue from "../assets/img/date-blue.svg";

function Booking() {
  return (
    <div className="md:bg-[#F4F7FF]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex mt-[50px] md:ml-[70px] md:mr-[70px] mb-[100px] ">
        <Sidebar />
        <div className="md:w-3/4 bg-white rounded-[30px] pb-12 px-10 md:p-[50px]">
          <div className="flex justify-between items-center ">
            <div className="text-xl font-semibold tracking-[1px]">
              My Booking
            </div>
            <div className="flex items-center justify-center rounded-2xl gap-4 w-32 h-12 bg-[#EAF1FF]">
              <div className="">
                <img src={dateBlue} alt="" />
              </div>
              <div className="text-[#3366FF] font-medium tracking-widest text-xs">
                March
              </div>
            </div>
          </div>
          <div className="h-full w-full hidden">
            <div className="flex flex-col items-center justify-center h-full gap-[16px] ">
              <div className="font-semibold tracking-[1px] text-2xl text-[#373A42]">
                No tickets bought
              </div>
              <div className="font-medium tracking-[0.5px] text-center text-sm text-[#B3B8B8]">
                It appears you haven’t bought any tickets yet. Maybe try
                searching these?
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll shrink-0 h-96">
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                <div className="text-[#FF8900]">15</div>
                <div>Wed</div>
              </div>
              <div>
                <div className="font-semibold text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#373A42] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#3366FF] mt-3">Detail</div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                <div className="text-[#FF8900]">15</div>
                <div>Wed</div>
              </div>
              <div>
                <div className="font-semibold text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#373A42] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#3366FF] mt-3">Detail</div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                <div className="text-[#FF8900]">15</div>
                <div>Wed</div>
              </div>
              <div>
                <div className="font-semibold text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#373A42] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#3366FF] mt-3">Detail</div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-14 shrink-0">
              <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                <div className="text-[#FF8900]">15</div>
                <div>Wed</div>
              </div>
              <div>
                <div className="font-semibold text-3xl mb-4">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-[#373A42] text-sm">
                  <div>Jakarta, Indonesia</div>
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
                <div className="text-sm text-[#3366FF] mt-3">Detail</div>
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
