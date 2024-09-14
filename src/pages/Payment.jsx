import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import card from "../assets/img/card.svg";
import arrowUp from "../assets/img/arrow-up.svg";
import arrowDown from "../assets/img/arrow-down.svg";
import payment from "../assets/img/payment.svg";
import bank from "../assets/img/bank.svg";
import retail from "../assets/img/retail.svg";
import money from "../assets/img/money.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  FaCreditCard,
  FaBuildingColumns,
  FaStore,
  FaDollarSign
 } from "react-icons/fa6";

function Payment() {
  const navigate = useNavigate();
  const dataToken = useSelector((state) => state.auth.token);
  const totalPayment = useSelector((state) => state.sectionSelector.totalPayment);
  const totalQuantity = useSelector((state) => state.sectionSelector.qty);
  const dataTicket = useSelector((state) => state.sectionSelector.ticketSection);
  const dataEvent = useSelector((state) => state.sectionSelector.eventTitle);
  const dataQuantity = useSelector((state) => state.sectionSelector.quantity);
  const dataSection = useSelector((state) => state.sectionSelector.sectionId);
  const dataId = useSelector((state) => state.sectionSelector.eventId)
  const [selectedPayment, setSelectedPayment] = React.useState(null);
  const [message, setMessage] = React.useState("");

  const handleCheckout = () => {
    if (dataToken === 0) {
      setMessage("Please log in first!");
    } else {
      setMessage("");
    }
  };

  async function pay(e) {
    e.preventDefault();

    if (!selectedPayment) {
      setMessage("You must choose one payment method!");
      return;
    }

    if (!dataToken) {
      setMessage("Please log in first!");
      return;
    }


    const eventId = dataId.id
    const methodPayment = selectedPayment;
    const quantity = parseInt(dataQuantity)
    const section = parseInt(dataSection)
    const form = new URLSearchParams();
    form.append("eventId", eventId);
    form.append("paymentId", methodPayment);
    form.append("sectionId", section);
    form.append("ticketQuantity", quantity);

    const dataProfile = await fetch("http://localhost:8080/transactions/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + dataToken,
      },
      body: form,
    });
    const listData = await dataProfile.json();
    navigate("/my-booking");
  }

  return (
    <div className="md:bg-[#9CDBA6]">
      <Navbar />
      <div className="">
        <form onSubmit={pay} className="flex flex-col md:flex-row mt-[48px] m-10 md:m-16 mb-[100px] bg-[#DEF9C4] rounded-[30px] p-10">
          <div className="md:w-1/2 h-[486px] md:mr-[88px] mb-20">
            <div className="text-[#468585] tracking-[1px] font-semibold text-xl mb-[50px]">
              Payment Method
            </div>
            <div className="text-red-600 mb-5">{message}</div>
            <label
              htmlFor="card"
              className="flex justify-between items-center mb-[16px]"
            >
              <div className="flex gap-[16px] items-center">
                <input 
                  type="radio" 
                  name="card" 
                  id="card" 
                  value={1}
                  onChange={() => setSelectedPayment(1)}
                />
                <span className="flex items-center justify-center bg-[#884DFF]/20 w-11 h-11 rounded-lg">
                  <FaCreditCard className="h-5 w-5 text-[#884DFF]"/>
                </span>
                <span className="font-semibold text-[#468585] tracking-[1px] text-sm">
                  Card
                </span>
              </div>
              <div className="">
                <img src={arrowUp} alt="" />
              </div>
            </label>
            <div className="flex justify-between pl-[30px] gap-[6px] items-center mb-[40px]">
              <div className="">
                <img src={payment} alt="" />
              </div>
              <div className="w-[45px] h-[45px] border border-dotted border-[#468585] text-3xl rounded-[10px] flex justify-center items-center text-[#468585]">
                +
              </div>
            </div>
            <label
              htmlFor="bank"
              className="flex justify-between items-center mb-[16px]"
            >
              <div className="flex gap-[16px] items-center">
                <input 
                  type="radio" 
                  name="card" 
                  id="bank" 
                  value={2}
                  onChange={() => setSelectedPayment(2)}
                />
                <span className="flex items-center justify-center bg-[#FC1055]/20 w-11 h-11 rounded-lg">
                  <FaBuildingColumns className="h-5 w-5 text-[#FC1055]"/>
                </span>
                <span className="font-semibold text-[#468585] tracking-[1px] text-sm">
                  Bank Transfer
                </span>
              </div>
              <div className="">
                <img src={arrowDown} alt="" />
              </div>
            </label>
            <label
              htmlFor="retail"
              className="flex justify-between items-center mb-[16px]"
            >
              <div className="flex gap-[16px] items-center">
                <input 
                  type="radio" 
                  name="card" 
                  id="retail" 
                  value={3}
                  onChange={() => setSelectedPayment(3)}
                />
                <span className="flex items-center justify-center bg-[#FF8900]/20 w-11 h-11 rounded-lg">
                  <FaStore className="h-5 w-5 text-[#FF8900]"/>
                </span>
                <span className="font-semibold text-[#468585] tracking-[1px] text-sm">
                  Retail
                </span>
              </div>
              <div className="">
                <img src={arrowDown} alt="" />
              </div>
            </label>
            <label
              htmlFor="money"
              className="flex justify-between items-center mb-[16px]"
            >
              <div className="flex gap-[16px] items-center">
                <input 
                  type="radio" 
                  name="card" 
                  id="money" 
                  value={4}
                  onChange={() => setSelectedPayment(4)}
                />
                <span className="flex items-center justify-center bg-[#3366FF]/20 w-11 h-11 rounded-lg">
                  <FaDollarSign className="h-5 w-5 text-[#3366FF]"/>
                </span>
                <span className="font-semibold text-[#468585] tracking-[1px] text-sm">
                  E-Money
                </span>
              </div>
              <div className="">
                <img src={arrowDown} alt="" />
              </div>
            </label>
          </div>
          <div className="md:w-1/2 md:ml-[88px]">
            <div className="text-xl tracking-[1px] text-[#468585] font-semibold mb-[50px]">
              Ticket Detail
            </div>
            <div className="md:flex justify-between mb-[16px] hidden">
              <div className="text-sm text-[#468585] tracking-[0.5px] font-semibold">
                Event
              </div>
              <div className="text-sm text-[#50B498] tracking-[0.5px] font-semibold">
                {dataEvent}
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-[16px]">
              <div className="text-sm text-[#468585] tracking-[0.5px] font-semibold">
                Ticket Section
              </div>
              <div className="text-sm text-[#50B498] tracking-[0.5px] font-semibold">
                {dataTicket}
              </div>
            </div>
            <div className="flex justify-between mb-[16px]">
              <div className="text-sm text-[#468585] tracking-[0.5px] font-semibold">
                Quantity
              </div>
              <div className="text-sm text-[#50B498] tracking-[0.5px] font-semibold">
                {totalQuantity}
              </div>
            </div>
            <div className="flex justify-between mb-[50px]">
              <div className="text-sm text-[#468585] tracking-[0.5px] font-semibold">
                Total Payment
              </div>
              <div className="text-sm text-[#50B498] tracking-[0.5px] font-semibold">
                {`Rp. ${totalPayment.toLocaleString("id")}`}
              </div>
            </div>
              {dataToken === null ? (
                <button
                  onClick={handleCheckout}
                  className="w-full h-[50px] bg-[#468585] text-[#DEF9C4] rounded-[15px]"
                >
                  Payment
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#468585] text-[#DEF9C4] rounded-[15px]"
                >
                  Payment
                </button>
              )} 
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
