import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import change from "../assets/img/change.svg";
import ticketHp from "../assets/img/ticket-hp.svg";
import ticket1 from "../assets/img/ticket1.svg";
import ticket2 from "../assets/img/ticket2.svg";
import ticket3 from "../assets/img/ticket3.svg";
import stadionticket from "../assets/img/stadionticket.svg";
import { Link } from "react-router-dom";

function Ticket() {
  const [num1, setNum1] = React.useState(0);
  function mins1() {
    if (num1 > 0) {
      setNum1(num1 - 1);
    }
  }
  function plus1() {
    if (num1 < 10) {
      setNum1(num1 + 1);
    }
  }
  const [num2, setNum2] = React.useState(0);
  function mins2() {
    if (num2 > 0) {
      setNum2(num2 - 1);
    }
  }
  function plus2() {
    if (num2 < 10) {
      setNum2(num2 + 1);
    }
  }
  const [num3, setNum3] = React.useState(0);
  function mins3() {
    if (num3 > 0) {
      setNum3(num3 - 1);
    }
  }
  function plus3() {
    if (num3 < 10) {
      setNum3(num3 + 1);
    }
  }

  return (
    <div className="md:bg-[#F4F7FF]">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row md:mt-[48px] md:mr-[120px] md:ml-[120px] md:mb-[100px] bg-white rounded-[30px] p-10">
          <div className="md:flex md:w-1/2 h-[486px] mr-[88px] hidden">
            <img src={stadionticket} alt="" className="w-auto h-full" />
          </div>
          <div className="mb-10 flex justify-center md:hidden">
            <img src={ticketHp} alt="" />
          </div>
          <div className="md:w-1/2 w-full md:ml-[88px]">
            <div className="mb-[25px] border-b-[2px]">
              <div className="flex items-center justify-between mb-[50px]">
                <div className="font-semibold tracking-[1px] text-xl text-[#373A42]">
                  Tickets
                </div>
                <div className="flex items-center gap-[24px]">
                  <button className="font-semibold tracking-[1px] text-xs text-[#FC1055]">
                    BY PRICE
                  </button>
                  <button type="submit" className="">
                    <img src={change} alt="" className="h-[24px] w-[24px]" />
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-[16px]">
                <div className="h-[45px] w-[45px] bg-[#F1EAFF] flex items-center justify-center rounded-[10px] mr-[16px]">
                  <img src={ticket1} alt="" className="" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-sm text-[#373A42] font-semibold">
                      SECTION REG, ROW 1
                    </div>
                    <div className="text-xs text-[#BDC0C4]">
                      12 Seats available
                    </div>
                  </div>
                  <div className="flex flex-col gap-[1px] items-center">
                    <div className="text-[#373A42] font-semibold tracking-[1px]">
                      $15
                    </div>
                    <div className="text-xs tracking-[0.5] text-[#BDC0C4]">
                      per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[50px]">
                <div className="pl-[60px] tracking-[1px] text-xs font-semibold">
                  Quantity
                </div>
                <div className="flex gap-[20px] items-center">
                  <button
                    type="button"
                    onClick={mins1}
                    className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]"
                  >
                    -
                  </button>
                  <div className="">{num1}</div>
                  <button
                    type="button"
                    onClick={plus1}
                    className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-[16px]">
                <div className="h-[45px] w-[45px] bg-[#FFEAEF] flex items-center justify-center rounded-[10px] mr-[16px]">
                  <img src={ticket2} alt="" className="" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-sm text-[#373A42] font-semibold">
                      SECTION REG, ROW 2
                    </div>
                    <div className="text-xs text-[#BDC0C4]">
                      9 Seats available
                    </div>
                  </div>
                  <div className="flex flex-col gap-[1px] items-center">
                    <div className="text-[#373A42] font-semibold tracking-[1px]">
                      $35
                    </div>
                    <div className="text-xs tracking-[0.5] text-[#BDC0C4]">
                      per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[50px]">
                <div className="pl-[60px] tracking-[1px] text-xs font-semibold">
                  Quantity
                </div>
                <div className="flex gap-[20px] items-center">
                  <button
                    type="button"
                    onClick={mins2}
                    className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]"
                  >
                    -
                  </button>
                  <div className="">{num2}</div>
                  <button
                    type="button"
                    onClick={plus2}
                    className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-[16px]">
                <div className="h-[45px] w-[45px] bg-[#FFF4E7] flex items-center justify-center rounded-[10px] mr-[16px]">
                  <img src={ticket3} alt="" className="" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-sm text-[#373A42] font-semibold">
                      SECTION REG, ROW 3
                    </div>
                    <div className="text-xs text-[#BDC0C4]">
                      6 Seats available
                    </div>
                  </div>
                  <div className="flex flex-col gap-[1px] items-center">
                    <div className="text-[#373A42] font-semibold tracking-[1px]">
                      $50
                    </div>
                    <div className="text-xs tracking-[0.5] text-[#BDC0C4]">
                      per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[25px]">
                <div className="pl-[60px] tracking-[1px] text-xs font-semibold">
                  Quantity
                </div>
                <div className="flex gap-[20px] items-center">
                  <button
                    type="button"
                    onClick={mins3}
                    className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]"
                  >
                    -
                  </button>
                  <div className="">{num3}</div>
                  <button
                    type="button"
                    onClick={plus3}
                    className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#373A42] tracking-[1px] font-semibold">
                Ticket Section
              </div>
              <div className="text-[#3366FF] tracking-[1px] font-semibold">
                REG{num1},VIP{num2},VVIP{num3}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#373A42] tracking-[1px] font-semibold">
                Quantity
              </div>
              <div className="text-[#3366FF] tracking-[1px] font-semibold">
                {num1 + num2 + num3}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[50px]">
              <div className="text-[#373A42] tracking-[1px] font-semibold">
                Total Payment
              </div>
              <div className="text-[#3366FF] tracking-[1px] font-semibold">
                ${num1 * 15 + num2 * 35 + num3 * 50}
              </div>
            </div>
            <Link to="/payment">
              <button
                type="submit"
                className="h-[55px] w-full md:max-w-[315px] bg-[#3366FF] text-white rounded-[15px]"
              >
                Checkout
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
export default Ticket;
