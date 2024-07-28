import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import Popup from "../assets/component/content/Popup";

function CreateEvent() {
  const [show, setShow] = React.useState(true);
  function popUps() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex m-10 md:m-16">
        <Sidebar />
        <div className="flex-1 bg-[#DEF9C4] rounded-[30px] md:p-10">
          <div className="flex justify-between items-center ">
            <div className="text-xl text-[#468585] font-semibold tracking-[1px]">
              Create Event
            </div>
            <div className="flex items-center justify-center rounded-2xl gap-4 w-32 h-12 bg-[#468585]">
              <button
                onClick={popUps}
                className="text-[#DEF9C4] font-medium tracking-widest text-xs"
              >
                Create
              </button>
            </div>
          </div>
          <div className="h-full w-full">
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
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
      <div
        className={
          show
            ? "items-center justify-center w-full h-screen hidden"
            : "flex items-center justify-center bg-black/25 w-full h-screen absolute top-0 left-0"
        }
      >
        <Popup />
      </div>
    </div>
  );
}

export default CreateEvent;
