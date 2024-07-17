import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import card from "../assets/img/card.svg";
import arrowUp from "../assets/img/arrow-up.svg";

function Payment() {
  return (
    <div className="bg-[#F4F7FF]">
      <Navbar />
      <div className="">
        <div className="flex mt-[48px] mr-[120px] ml-[120px] mb-[100px] bg-white rounded-[30px] p-[100px]">
          <div className=" w-2/5 h-[486px] mr-[88px]">
            <div className="text-[#373A42] tracking-[1px] font-semibold text-xl">
              Payment Method
            </div>
            <div className="flex gap-[16px]">
              <input type="radio" name="card" id="card" />
              <label htmlFor="card">
                <div className="flex items-center gap-[16px]">
                  <div className="h-[45px] w-[45px] bg-[#E7DBFF] flex justify-center items-center rounded-[10px]">
                    <img src={card} alt="" className="" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="">card</div>
                    <div className="">
                      <img src={arrowUp} alt="" />
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="w-3/5 ml-[88px]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
