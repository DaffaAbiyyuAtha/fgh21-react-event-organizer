import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import location from "../assets/img/location.svg";
import clock from "../assets/img/clock.svg";
import map from "../assets/img/map.svg";
import museum from "../assets/img/museum.svg";
import favorite from "../assets/img/favorite.svg";
import profile1 from "../assets/img/profile1.svg";
import profile2 from "../assets/img/profile2.svg";
import profile3 from "../assets/img/profile3.svg";
import profile4 from "../assets/img/profile4.svg";
import Loading from "../assets/component/content/Loading";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaHeart, FaLocationDot, FaClock } from "react-icons/fa6";

function Event() {
  const id = useParams("id");
  const dataToken = useSelector((state) => state.auth.token);
  const [data, setData] = React.useState({});
  const [wait, setWait] = React.useState(false);
  useEffect(() => {
    setWait(true)
    async function datas() {
      const dataEvent = await fetch("http://103.93.58.89:21211/events/" + id.id);
      const listData = await dataEvent.json();
      setData(listData.result);
      setWait(false)

    }
    datas();
  }, []);
  async function addwish(){
    const wishfetch = await fetch("http://103.93.58.89:21211/wishlist/" + id.id,{
      method: "POST",
      headers: {
              Authorization: "Bearer " + dataToken,
            },
      });
  }
  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="">
        <div className="flex relative w-full h-full overflow-hidden rounded-[40px] mb-[52px] ">
          <img
            src={museum}
            alt=""
            className=" h-full w-full object-cover md:hidden"
          />
          <div className="flex flex-col px-5 py-24 justify-center absolute bg-gradient-to-t from-[black] to-[transparent] w-full h-full ">
            <div className="flex justify-between ">
              <div className="text-white text-2xl tracking-widest font-semibold mb-4">
                {data.title}
              </div>
              <div className="">
                <img src={favorite} alt="" className="h-6 w-6" />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[#468585]">
                <FaLocationDot />
              </div>
              <div className="text-white tracking-wide font-medium text-sm ">
                Jakarta, Indonesia
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-[#468585]">
                <FaClock />
              </div>
              <div className="text-white tracking-wide font-medium text-sm">
                {data.date}
              </div>
            </div>
            <div className="text-white mb-2">Attendees</div>
            <div className="">
              <div className="flex mb-[8px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[48px] md:m-16 m-10 bg-[#DEF9C4] rounded-[30px] p-10 md:p-24 justify-center ">
          <div className="md:flex flex-col md:w-2/5 h-[486px] mr-[88px] hidden justify-center ">
            <div className="flex max-w-80 w-full h-full overflow-hidden rounded-[40px] mb-[52px] justify-center">
              <img
                src={data.image}
                alt=""
                className=" h-full w-full object-cover justify-center"
              />
              {/* <div className="absolute bg-gradient-to-t from-[black] to-[transparent] w-full h-full "></div> */}
            </div>
            <button type="button" onClick={addwish} className="flex justify-center items-center gap-[16px]">
              <div className="text-[#468585]">
                <FaHeart />
              </div>
              <div className="font-semibold text-xl text-[#468585] tracking-[1px]">
                Add to Wishlist
              </div>
            </button>
          </div>
          <div className="md:w-3/5">
            <div className=" md:flex flex-col border-b-2 border-solid border-[rgba(193,197,208,0.25)] mb-[25px] hidden">
              <div className="font-semibold text-2xl text-[#468585] mb-[30px] tracking-[2px]">
                {data.title}
              </div>
              <div className="flex gap-[88px] mb-[30px]">
                <div className="flex gap-[4px] text-sm items-center tracking-[1px] font-medium">
                  <div className="text-[#468585]">
                    <FaLocationDot />
                  </div>
                  <div className="text-[#50B498] font-medium text-sm">
                    Jakarta, Indonesia
                  </div>
                </div>
                <div className="flex gap-[4px] text-sm items-center tracking-[1px] font-medium">
                  <div className="text-[#468585]">
                    <FaClock />
                  </div>
                  <div className="text-[#50B498] font-medium text-sm">
                    {data.date}
                  </div>
                </div>
              </div>
              <div className="text-sm tracking-[1px] font-medium text-[#468585] mb-[28px]">
                Attendees
              </div>
              <div className="flex mb-[8px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#468585] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-[#9CDBA6] text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
            </div>
            <div className="font-semibold tracking-[1px] text-[#468585] text-xl mb-[16px]">
              Event Detail
            </div>
            <div className="text-xs text-[#50B498] mb-[12px]">
              {data.description}
            </div>
            <div className="text-xs text-[#468585] underline font-medium mb-[25px]">
              Read More
            </div>
            <div className="text-xl tracking-[1px] text-[#468585] mb-[16px]">
              Location
            </div>
            <div className="w-full">
              <img
                src={map}
                alt=""
                className="h-[152px] w-full md:max-w-[315px] object-cover rounded-[20px] mb-[50px]"
              />
            </div>
            <Link to={`/events/section/${data.id}`}>
              <button
                type="submit"
                className="h-[55px] w-full md:max-w-[315px] bg-[#468585] rounde text-[#DEF9C4] rounded-[15px]"
              >
                Buy Tickets
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
      {wait ? <Loading /> : ""}
    </div>
  );
}

export default Event;
