import React, { useEffect } from "react";
import NavbarHome from "../assets/component/content/NavbarHome";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import people from "../assets/img/people.svg";
import { BsDot } from "react-icons/bs";
import museum from "../assets/img/museum.svg";
import cars from "../assets/img/cars.jpg";
import profile1 from "../assets/img/profile1.svg";
import profile2 from "../assets/img/profile2.svg";
import profile3 from "../assets/img/profile3.svg";
import profile4 from "../assets/img/profile4.svg";
import jakarta from "../assets/img/jakarta.svg";
import bandung from "../assets/img/bandung.svg";
import bali from "../assets/img/bali.svg";
import aceh from "../assets/img/aceh.svg";
import solo from "../assets/img/solo.svg";
import jogja from "../assets/img/jogja.svg";
import semarang from "../assets/img/semarang.svg";
import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";
import black1 from "../assets/img/black1.svg";
import black2 from "../assets/img/black2.svg";
import black3 from "../assets/img/black3.svg";
import black4 from "../assets/img/black4.svg";
import black5 from "../assets/img/black5.svg";
import black6 from "../assets/img/black6.svg";
import banner from "../assets/img/banner1.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadEvent } from "../redux/reducers/event.js";

function Home() {
  const dataToken = useSelector((state) => state.auth.token);
  const updateDataEvent = useSelector((state) => state.event.data);
  const dispatch = useDispatch();
  const [add, setAll] = React.useState(true);
  function seeAll() {
    if (add === true) {
      setAll(false);
    } else {
      setAll(true);
    }
  }
  useEffect(() => {
    async function event() {
      const dataHome = await fetch("https://wsw6zh-8888.csb.app/events", {
        headers: {
          Authorization: "Bearer " + dataToken,
        },
      });
      const listData = await dataHome.json();
      dispatch(loadEvent(listData.results));
    }
    event();
  }, []);
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="bg-[#DEF9C4] mb-[150px]">
        <div className="h-[600px] bg-[#468585]  mb-[175px]">
          <div className="w-full h-full flex items-end justify-end">
            <img src={banner} alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="bg-[#468585] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-[#9CDBA6] flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
            EVENT
          </div>
          <div className="text-[#468585] text-[36px] font-semibold mb-12">
            Events For You
          </div>
          <div className="mb-[50px]">
            <div className="flex gap-11 justify-center">
              <div className="md:flex flex-col gap-3 text-[#50B498] items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s hidden">
                <div>13</div>
                <div>Mon</div>
              </div>
              <div className="flex flex-col gap-3 text-[#50B498] items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>14</div>
                <div>Tue</div>
              </div>
              <div className="flex flex-col font-medium gap-3 items-center border-2 w-16 h-21 pt-2 pb-2 rounded-xl text-[#468585] text-s border-[#468585]">
                <div>15</div>
                <div>Wed</div>
                <div>
                  <BsDot />
                </div>
              </div>
              <div className="flex flex-col gap-3 text-[#50B498] items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>16</div>
                <div>Thu</div>
              </div>
              <div className="md:flex flex-col gap-3 text-[#50B498] items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s hidden">
                <div>17</div>
                <div>Fri</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-scroll mb-10 ml-10 md:ml-16">
          {updateDataEvent.map((item) => {
            return (
              <Link to="/event">
                <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
                  <img
                    src={"https://wsw6zh-8888.csb.app/" + item.picture}
                    alt=""
                    className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
                  />
                  <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                    <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                      <div className="text-white">
                        {new Date(item.time).toLocaleDateString("en-CA")}
                      </div>
                      <div className="text-white">{item.title}</div>
                      <div className="flex">
                        {item.attendees.map((pict) => {
                          return (
                            <div className="flex mb-[8px]">
                              <div className="h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#468585] overflow-hidden">
                                <img
                                  src={
                                    "https://wsw6zh-8888.csb.app/" +
                                    pict.picture
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full text-center">
            <button
              type="button"
              className="border-2 tracking-[0.5px] border-[#468585] max-w-[255px] w-full h-[40px] mb-[175px] rounded-2xl text-[#468585]"
            >
              See All
            </button>
          </div>
          <div className="w-full mb-[175px]">
            <div className="mx-10 md:mx-16 bg-[#468585] rounded-3xl">
              <div className="p-16">
                <div className="flex justify-center mb-6 text-[#DEF9C4] items-center gap-4 w-[160px] h-[30px] text-center bg-[#50B498] rounded-xl ">
                  <div className="before:content-['\2501']"></div>
                  <div className="font-semibold text-sm tracking-[2px]">
                    LOCATION
                  </div>
                </div>
                <div className="grid md:grid-cols-4 text-[#DEF9C4] gap-7 mb-[50px]">
                  <div>
                    <div className="text-4xl font-medium">
                      Discover Events Near You
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-white items-center">
                    <img src={jakarta} alt="" className="w-full h-full" />
                    <div className="font-medium text-[#DEF9C4]">Jakarta</div>
                  </div>
                  <div className="flex flex-col gap-2 text-[#DEF9C4] items-center">
                    <img src={bandung} alt="" className="w-full h-full" />
                    <div className="font-medium text-[#DEF9C4]">Bandung</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-[#DEF9C4] items-center hidden"
                        : "md:flex flex-col gap-2 text-[#DEF9C4] items-center"
                    }
                  >
                    <img src={bali} alt="" className="w-full h-full" />
                    <div className="font-medium text-center ">Bali</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-[#DEF9C4] items-center hidden"
                        : "md:flex flex-col gap-2 text-[#DEF9C4] items-center"
                    }
                  >
                    <img src={aceh} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Aceh</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-[#DEF9C4] items-center hidden"
                        : "md:flex flex-col gap-2 text-[#DEF9C4] items-center"
                    }
                  >
                    <img src={solo} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Solo</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-[#DEF9C4] items-center hidden"
                        : "md:flex flex-col gap-2 text-[#DEF9C4] items-center"
                    }
                  >
                    <img src={jogja} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Yogyakarta</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-[#DEF9C4] items-center hidden"
                        : "md:flex flex-col gap-2 text-[#DEF9C4] items-center"
                    }
                  >
                    <img src={semarang} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Semarang</div>
                  </div>
                </div>
                <div className="w-full text-center" onClick={seeAll}>
                  <button className="bg-[#DEF9C4] max-w-[255px] w-full h-[40px] rounded-xl text-[#468585]">
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mb-[50px]">
            <div className="bg-[#468585] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-[#9CDBA6] flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
              CATEGORY
            </div>
            <div className="text-[#468585] text-[36px] font-semibold text-center mb-12">
              Browse Events By Category
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 w-full justify-between gap-10 m-10 md:m-16 text-center">
            <div className="underline text-[#468585] font-semibold">Music</div>
            <div className="text-[#50B498] font-semibold">Arts</div>
            <div className="text-[#50B498] font-semibold">Outdoors</div>
            <div className="text-[#50B498] font-semibold">Workshop</div>
            <div className="text-[#50B498] font-semibold">Sport</div>
            <div className="text-[#50B498] font-semibold">Festival</div>
            <div className="text-[#50B498] font-semibold">Fashion</div>
          </div>
        </div>
        <div className="flex gap-6 items-center md:justify-center m-10 overflow-x-scroll md:overflow-x-visible">
          <div className="md:w-[45px] md:h-[45px] md:shadow-md md:bg-[#DEF9C4] md:flex  items-center justify-center rounded-md hidden">
            <img src={arrowLeft} alt="" className="" />
          </div>
          <div className="relative w-[300px] h-[350px] rounded-3xl overflow-hidden ml-8 flex-shrink-0">
            <img src={cars} alt="" />
            <div className="absolute bg-[#468585] w-full h-[162px] bottom-0 px-4 pb-4">
              <div className="flex mb-[8px] mt-[-16px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(156,219,166,0.5)] h-full w-full text-[#9CDBA6] text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-[#9CDBA6] gap-2 mt-7">
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="font-semibold text-2xl tracking-wider">
                  Sights & Sounds Exhibition
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[350px] rounded-3xl overflow-hidden ml-8 flex-shrink-0">
            <img src={cars} alt="" />
            <div className="absolute bg-[#468585] w-full h-[162px] bottom-0 px-4 pb-4">
              <div className="flex mb-[8px] mt-[-16px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(156,219,166,0.5)] h-full w-full text-[#9CDBA6] text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-[#9CDBA6] gap-2 mt-7">
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="font-semibold text-2xl tracking-wider">
                  Sights & Sounds Exhibition
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[350px] rounded-3xl overflow-hidden ml-8 flex-shrink-0">
            <img src={cars} alt="" />
            <div className="absolute bg-[#468585] w-full h-[162px] bottom-0 px-4 pb-4">
              <div className="flex mb-[8px] mt-[-16px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#468585] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(156,219,166,0.5)] h-full w-full text-[#9CDBA6] text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-[#9CDBA6] gap-2 mt-7">
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="font-semibold text-2xl tracking-wider">
                  Sights & Sounds Exhibition
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[45px] md:h-[45px] md:shadow-md md:bg-[#468585] md:flex  items-center justify-center rounded-md hidden">
            <img src={arrowRight} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="bg-[#373A42] p-10 md:p-16 flex flex-col items-center mb-16">
        <div className="bg-[#979797] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-white flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
          PARTNER
        </div>
        <div className="font-semibold text-center text-4xl text-white mb-5">
          Our Trusted Partners
        </div>
        <div className="text-[#C1C5D0] mb-8">By companies like :</div>
        <div className="grid grid-cols-2 md:grid-cols-6 items-center gap-6">
          <div>
            <img src={black1} alt="" />
          </div>
          <div>
            <img src={black2} alt="" />
          </div>
          <div>
            <img src={black3} alt="" />
          </div>
          <div>
            <img src={black4} alt="" />
          </div>
          <div>
            <img src={black5} alt="" />
          </div>
          <div>
            <img src={black6} alt="" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
