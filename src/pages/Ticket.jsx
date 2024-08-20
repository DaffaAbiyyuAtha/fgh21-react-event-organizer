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
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaTicket } from "react-icons/fa6";

function Ticket() {
  const id = useParams("id");
  const [data, setData] = React.useState([]);
  async function datas() {
    const dataSection = await fetch(
      "http://localhost:8080/events/section/" + id.id
    );
    const listData = await dataSection.json();
    setData(listData.result);
    console.log(listData.result);
  }
  useEffect(() => {
    datas();
  }, []);
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
  let section = [];
  if (num1 > 0) {
    section.push(`REG(${num1})`);
  }
  if (num2 > 0) {
    section.push(`VIP(${num2})`);
  }
  if (num3 > 0) {
    section.push(`VVIP(${num3})`);
  }
  let ticket = "";
  section.length > 0 ? (ticket = section.join(", ")) : (ticket = "-");
  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row md:mt-[48px] m-10 md:m16 md:mb-[100px] bg-[#DEF9C4] rounded-[30px] p-10">
          <div className="md:flex md:w-1/2 h-[486px] mr-[88px] hidden">
            <img src={stadionticket} alt="" className="w-auto h-full" />
          </div>
          <div className="mb-10 flex justify-center md:hidden">
            <img src={ticketHp} alt="" />
          </div>
          <div className="md:w-1/2 w-full md:ml-[88px]">
            <div className="mb-[25px] border-b-2 border-[#468585]">
              <div className="flex items-center justify-between mb-[50px]">
                <div className="font-semibold tracking-[1px] text-xl text-[#468585]">
                  Tickets
                </div>
                <div className="flex items-center gap-[24px]">
                  <button className="font-semibold tracking-[1px] text-xs text-[#468585]">
                    BY PRICE
                  </button>
                  <button type="submit" className="text-[#468585]">
                    &#8643;&#8638;
                  </button>
                </div>
              </div>
              {data.map((item) => {
                return (
                  <div className="">
                    <div className="flex items-center mb-[16px]">
                      <div className="h-[45px] w-[45px] bg-[#DEF9C4] border-2 border-[#468585] flex items-center justify-center rounded-[10px] mr-[16px] text-[#468585]">
                        <FaTicket />
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-[4px]">
                          <div className="text-sm text-[#468585] font-semibold">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#50B498]">
                            {item.quantity + " Seats available"}
                          </div>
                        </div>
                        <div className="flex flex-col gap-[1px] items-center">
                          <div className="text-[#468585] font-semibold tracking-[1px]">
                            {"Rp " + item.price}
                          </div>
                          <div className="text-xs tracking-[0.5] text-[#50B498]">
                            per person
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-[50px]">
                      <div className="pl-[60px] text-[#468585] tracking-[1px] text-xs font-semibold">
                        Quantity
                      </div>
                      <div className="flex gap-[20px] items-center">
                        <button
                          type="button"
                          onClick={mins1}
                          className="border border-solid w-[36px] h-[32px] border-[#468585] rounded-[6px] text-[#468585]"
                        >
                          -
                        </button>
                        <div className="text-[#468585]">{num1}</div>
                        <button
                          type="button"
                          onClick={plus1}
                          className="border border-solid w-[36px] h-[32px] border-[#468585] rounded-[6px] text-[#468585]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#468585] tracking-[1px] font-semibold">
                Ticket Section
              </div>
              <div className="text-[#468585] tracking-[1px] font-semibold">
                {ticket}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#468585] tracking-[1px] font-semibold">
                Quantity
              </div>
              <div className="text-[#468585] tracking-[1px] font-semibold">
                {num1 === 0 && num2 === 0 && num3 === 0
                  ? "-"
                  : num1 + num2 + num3}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[50px]">
              <div className="text-[#468585] tracking-[1px] font-semibold">
                Total Payment
              </div>
              <div className="text-[#468585] tracking-[1px] font-semibold">
                {num1 === 0 && num2 === 0 && num3 === 0
                  ? "-"
                  : "Rp " + (num1 * 100000 + num2 * 500000 + num3 * 1000000)}
              </div>
            </div>
            <Link to="/payment">
              <button
                type="submit"
                className="h-[55px] w-full md:max-w-[315px] bg-[#468585] text-[#DEF9C4] rounded-[15px]"
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
