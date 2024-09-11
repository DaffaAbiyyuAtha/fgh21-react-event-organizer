import React from "react";
import loading from "../../img/progress.gif";

function Loading() {
  return (
    <div className="bg-black/50 left-0 top-0 w-full h-full absolute flex justify-center items-center">
      <img src={loading} alt="" className="w-16 h-16 rounded-xl" />
    </div>
  );
}

export default Loading;
