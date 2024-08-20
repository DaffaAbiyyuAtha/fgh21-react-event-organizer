import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ticket from "../../img/ticket.gif";

function Loading() {
  return (
    <div className="bg-white left-0 top-0 w-full h-full absolute flex justify-center items-center">
      <img src={ticket} alt="" className="w-14 h-14" />
    </div>
  );
}

export default Loading;
