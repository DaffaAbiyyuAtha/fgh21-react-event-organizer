import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import Popup from "../assets/component/content/Popup";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const dataToken = useSelector((state) => state.auth.token);
  const [show, setShow] = React.useState(true);
  const [event, setEvent] = React.useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!dataToken) {
      navigate("/login");
      return;
    }
  }, [dataToken, navigate]);

  function popUps() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  
  useEffect(() => {
    async function createEventByUser() {
      const response = await fetch("http://103.93.58.89:21211:8080/events/see_one_event", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + dataToken,
        },
      });
      const profileData = await response.json();
      setEvent(profileData.result);
    }
    createEventByUser();
  }, []);
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
          {event.length === 0 ? (
            <div className="h-full w-full">
              <div className="flex flex-col items-center justify-center h-full gap-[16px] ">
                <div className="font-semibold tracking-[1px] text-2xl text-[#468585]">
                  No Created Event
                </div>
                <div className="font-medium tracking-[0.5px] text-center text-sm text-[#50B498]">
                You haven't created an event yet, please create an event by clicking in the top right corner
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-y-scroll shrink-0 h-96">
              {event.map((item) => {
                return (
                <div className="flex flex-row gap-6 mt-14 shrink-0">
                  <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                    <div className="text-[#50B498]">15</div>
                    <div className="text-[#468585]">Wed</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#468585] text-3xl mb-4">
                      {item.title}
                    </div>
                    <div className="text-[#50B498] text-sm">
                      <div>Jakarta, Indonesia</div>
                      <div>{item.date}</div>
                    </div>
                    <div className="text-sm text-[#468585] underline mt-3">
                      Detail
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
      <div className={show ? "hidden" : ""}>
        <Popup />
      </div>
    </div>
  );
}

export default CreateEvent;
