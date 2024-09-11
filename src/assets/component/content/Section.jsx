import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaTicket } from "react-icons/fa6";
    
    // const plus = () => {
    //   const newData = { ...props.data };
    //   if (num < 10) {
    //     newData.quantity = num + 1;
    //     newData.price = props.data.price * newData.quantity;
    //     dispatch(changeSeat(newData));
    //     setNum(newData.quantity);
    //   }
    // };
    // const min = () => {
    //   const newData = { ...props.data };
    //   if (num > 0) {
    //     newData.quantity = num - 1;
    //     newData.price = props.data.price * newData.quantity;
    //     dispatch(changeSeat(newData));
    //     setNum(newData.quantity);
    //   }
    // };

function TicketSection(props) {
  const [num, setNum] = useState(0);
    useEffect(() => {
        const current = props.currentData;
        current[props.index] = {
          id: props.data.id,
          name: props.data.name,
          price: num * props.data.price,
          quantity: num,
        };
        props.onChange([...current]);
      }, [num]);
  // const plus = () => {
  //   const newData = { ...props.data };
  //   if (num < 10) {
  //     newData.quantity = num + 1;
  //     newData.price = props.data.price * newData.quantity;
  //     dispatch(changeSeat(newData));
  //     setNum(newData.quantity);
  //   }
  // };
  // const min = () => {
  //   const newData = { ...props.data };
  //   if (num > 0) {
  //     newData.quantity = num - 1;
  //     newData.price = props.data.price * newData.quantity;
  //     dispatch(changeSeat(newData));
  //     setNum(newData.quantity);
  //   }
  // };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <div className="flex items-center justify-center rounded-lg h-8 w-8 bg-[#468585] text-[#DEF9C4]">
          <FaTicket />
        </div>
        <div className="flex justify-between w-full text-[#468585]">
          <div className="">
            <div className="font-semibold text-sm">{props.data.name}</div>
            <div className="font-medium text-xs">{props.data.quantity} Seats available</div>
          </div>
          <div className="font-semibold">Rp. {props.data.price.toLocaleString("id")}</div>
        </div>
      </div>
      <div className="flex justify-between items-center pl-11 mb-8 text-[#468585]">
        <div className="font-semibold text-xs">Quantity</div>
        <div className="flex gap-3 items-center">
          <button 
            onClick={() => num > 0 && setNum(num - 1)} 
            className="flex items-center justify-center border-[#468585] rounded-lg border-2 h-7 w-7">
            -
          </button>
          <div className="">{num}</div>
          <button
            onClick={() => num < 4 && setNum(num + 1)}
            className="flex items-center justify-center border-[#468585] rounded-lg border-2 h-7 w-7">
            +
          </button>
        </div>
      </div>
      {/* <div className="flex w-full items-start gap-2 text-[#468585]">
        <FaTicket
          className=""
        />
        <div className="flex w-full flex-col mb-5 ">
          <div className="flex justify-between font-semibold text-sm">
            <span>SECTION {props.data.name}, ROW 1</span>
            <span>Rp{props.data.price.toLocaleString("id")}</span>
          </div>
          <div className="flex justify-between text-xs ">
            <span>{props.data.quantity} Seats available</span>
            <span>per person</span>
          </div>
          <div className="flex items-center mt-2 justify-between text-xs font-semibold">
            <div>Quantity</div>
            <div className="flex gap-4 items-center">
              <button
                onClick={()=> setNum(num -1)}
                className="w-[32px] h-[32px] border-[#468585] border-2 rounded-lg text-xl"
              >
                -
              </button>
              <span>{num}</span>
              <button
                onClick={()=> setNum(num +1)}
                className="w-[32px] h-[32px] border-[#468585] border-2  rounded-lg text-xl"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default TicketSection