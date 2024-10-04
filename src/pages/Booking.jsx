import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import SidebarUser from "../assets/component/content/SidebarUser";
import dateBlue from "../assets/img/date-blue.svg";
import { FaCalendarDays } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Booking() {
  // const updateDataEvent = useSelector((state) => state.event.data);
  const dataToken = useSelector((state) => state.auth.token);
  const dataProfile = useSelector((state) => state.profile.data);
  const [booking, setBooking] = React.useState([])
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  function toggles() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  useEffect(() =>{
    if (!dataToken) {
      navigate("/login");
      return;
    }
    datasBooking()
  }, [dataToken, navigate])

  async function datasBooking(){
    const dataBooking = await fetch('http://103.93.58.89:21211/transactions/payment/',{
      headers: {
        Authorization: "Bearer " + dataToken,
      }
    })
    const listBooking = await dataBooking.json()
    setBooking(listBooking.result)
  }

  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex m-10 md:m-16 ">
        <button type="button" onClick={toggles} className="md:hidden mb-[28px] flex items-center gap-2 border-2 p-1 rounded-lg border-[#468585] text-[#468585]">
          <div className="">menu</div>
        </button>
        <div
          className={
            open
              ? "md:flex gap-6 hidden"
              : ""
          }
        >
          <div className="">
            {dataProfile?.user && (
              <div className="">
                {dataProfile.user.userRole === 1 ? (
                  <Sidebar />
                ) : (
                  <SidebarUser />
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 bg-[#DEF9C4] rounded-[30px] md:p-10">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-[#468585] tracking-[1px]">
              My Booking
            </div>
            <div className="flex items-center justify-center rounded-2xl gap-4 w-32 h-12 bg-[#468585]">
              <div className="text-[#DEF9C4]">
                <FaCalendarDays />
              </div>
              <div className="text-[#DEF9C4] font-medium tracking-widest text-xs">
                March
              </div>
            </div>
          </div>
          {booking.length === 0 ? (
            <div className="h-full w-full">
              <div className="flex py-10 flex-col items-center justify-center h-full gap-[16px] ">
                <div className="font-semibold tracking-[1px] text-2xl text-[#468585]">
                  No Booking Event
                </div>
                <div className="font-medium tracking-[0.5px] text-center text-sm text-[#50B498]">
                  You haven't made a booking at all, please make a ticket booking on the transaction page
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-y-scroll shrink-0 h-96">
              {booking.map((item) => {
                return (
                  <div className="flex flex-row gap-6 mt-14 shrink-0">
                    <div className="text-center w-16 h-[100px] rounded-2xl border-2 border-[#468585] pt-6">
                      <div className="text-[#50B498]">15</div>
                      <div className="text-[#468585]">Wed</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#468585] text-3xl mb-1">
                        {item.title}
                      </div>
                      <div className="text-[#50B498] text-sm">
                        <div>{item.location}</div>
                        <div>{item.date}</div>
                        <div>Payment Method : {item.payment}</div>
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
    </div>
  );
}

export default Booking;
