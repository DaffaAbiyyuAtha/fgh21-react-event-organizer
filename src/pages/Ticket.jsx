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
import { useState } from "react";
import { useDispatch } from "react-redux";
import Section from "../assets/component/content/Section"
// import Loading from "../assets/component/content/Loading";
import { addQty,
  addEventId,
  addEventTitle,
  addTotalPayment,
  addTicketSection,
  addSectionId,
  addQuantity } from "../redux/reducers/sectionSelector";

function Ticket() {
  const dispatch = useDispatch();
  const id = useParams("id");
  const [data, setData] = React.useState([]);
  // const [section, setSection] = React.useState([]);
  const [wait, setWait] = React.useState(false);

  async function datas() {
    const dataSection = await fetch(
      "http://localhost:8080/events/section/" + id.id
    );
    const listData = await dataSection.json();
    setData(listData.result);
    setWait(false)
  }

  async function dataEvent() {
    const dataEvent = await fetch("http://localhost:8080/events/" + id.id);
    const listDataEvent = await dataEvent.json();
    dispatch(addEventTitle(listDataEvent.result.title));
  }

  useEffect(() => {
    setWait(true)
    datas();
    dataEvent();
  }, []);

  const [selectedSections, setSelectedSections] = useState([]);

  const ticketSection = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(`${curr.name}(${curr.quantity})`);
    }
    return arr;
  }, []);
  const quantity = selectedSections.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
  const price = selectedSections.reduce((prev, curr) => prev + curr.price, 0);

  const sectionId = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.id);
    }
    return arr;
  }, []);
  const quantityArray = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.quantity);
    }
    return arr;
  }, []);

  dispatch(addQuantity(quantityArray));
  dispatch(addQty(quantity));
  dispatch(addEventId(id));
  dispatch(addSectionId(sectionId));
  dispatch(addTotalPayment(price));
  dispatch(addTicketSection(ticketSection));

  // const [num1, setNum1] = React.useState(0);
  // function mins1() {
  //   if (num1 > 0) {
  //     setNum1(num1 - 1);
  //   }
  // }
  // function plus1() {
  //   if (num1 < 10) {
  //     setNum1(num1 + 1);
  //   }
  // }
  // const [num2, setNum2] = React.useState(0);
  // function mins2() {
  //   if (num2 > 0) {
  //     setNum2(num2 - 1);
  //   }
  // }
  // function plus2() {
  //   if (num2 < 10) {
  //     setNum2(num2 + 1);
  //   }
  // }
  // const [num3, setNum3] = React.useState(0);
  // function mins3() {
  //   if (num3 > 0) {
  //     setNum3(num3 - 1);
  //   }
  // }
  // function plus3() {
  //   if (num3 < 10) {
  //     setNum3(num3 + 1);
  //   }
  // }
  // let section = [];
  // if (num1 > 0) {
  //   section.push(`REG(${num1})`);
  // }
  // if (num2 > 0) {
  //   section.push(`VIP(${num2})`);
  // }
  // if (num3 > 0) {
  //   section.push(`VVIP(${num3})`);
  // }
  let ticket = "";
  data.length > 0 ? (ticket = data.join(", ")) : (ticket = "-");
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
              {data.map((item,index) => {
              return (
                <Section
                  key={item.id}
                  data={item}
                  index={index}
                  currentData={selectedSections}
                  onChange={setSelectedSections}
                />
              );
            })}
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#468585] tracking-[1px] font-semibold">
                Ticket Section
              </div>
              <div className="text-[#468585] tracking-[1px] font-semibold">
                {ticketSection.length == 0 ? "-" : ticketSection.join(", ")}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#468585] tracking-[1px] font-semibold">
                Quantity
              </div>
              <div className="text-[#468585] tracking-[1px] font-semibold">
                {quantity === 0 ? "-" : quantity}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[50px]">
              <div className="text-[#468585] tracking-[1px] font-semibold">
                Total Payment
              </div>
              <div className="text-[#468585] tracking-[1px] font-semibold">
                {price === 0 ? "-" : `Rp. ${price.toLocaleString("id")}`}
              </div>
            </div>
            <Link to="/payment">
              <button
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
      {/* {wait ? <Loading /> : ""} */}
    </div>
  );
}
export default Ticket;
