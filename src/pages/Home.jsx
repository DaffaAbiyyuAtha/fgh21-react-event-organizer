import React from "react";
import NavbarHome from "../assets/component/content/NavbarHome";
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
import { Link } from "react-router-dom";

function Home() {
  const [add, setAll] = React.useState(true);
  function seeAll() {
    if (add === true) {
      setAll(false);
    } else {
      setAll(true);
    }
  }
  return (
    <div>
      <div className="">
        <NavbarHome />
      </div>
      <div className="mb-[150px]">
        <div className="h-[600px] bg-[#3366FF]  mb-[175px]">
          <div className="w-full h-full flex items-end justify-end">
            <img src={people} alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="bg-[#FFCFDB] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-[#FF3D71] flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
            EVENT
          </div>
          <div className="font-[#333333] text-[36px] font-semibold mb-12">
            Events For You
          </div>
          <div className="mb-[50px]">
            <div className="flex gap-11 justify-center">
              <div className="md:flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s hidden">
                <div>13</div>
                <div>Mon</div>
              </div>
              <div className="flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>14</div>
                <div>Tue</div>
              </div>
              <div className="flex flex-col font-medium gap-3 items-center border-2 w-16 h-21 pt-2 pb-2 rounded-xl text-[#FF8900] text-s border-[#FF8900]">
                <div>15</div>
                <div>Wed</div>
                <div>
                  <BsDot />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>16</div>
                <div>Thu</div>
              </div>
              <div className="md:flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s hidden">
                <div>17</div>
                <div>Fri</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-scroll mb-10 ml-10 md:ml-16">
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative ">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event">
            <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative overflow-hidden">
              <img
                src={cars}
                alt=""
                className="flex relative w-full h-full overflow-hidden rounded-[40px] relative mb-[52px] overflow-hidden"
              />
              <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                  <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
                  <div className="text-white">Sights & Sounds Exhibition</div>
                  <div className="flex mb-[8px]">
                    <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile1} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile2} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                      <img src={profile3} alt="" />
                    </div>
                    <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                      <img src={profile4} alt="" />
                      <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                        62+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full text-center">
            <button
              type="button"
              className="border-2 tracking-[0.5px] border-[#3366FF] max-w-[255px] w-full h-[40px] mb-[175px] rounded-2xl text-[#3366FF]"
            >
              See All
            </button>
          </div>
          <div className="w-full mb-[175px]">
            <div className="mx-10 md:mx-16 bg-[#3366FF] rounded-3xl">
              <div className="p-16">
                <div className="flex justify-center mb-6 text-white items-center gap-4 w-[160px] h-[30px] text-center bg-[#668CFF] rounded-xl ">
                  <div className="before:content-['\2501']"></div>
                  <div className="font-semibold text-sm tracking-[2px]">
                    LOCATION
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-7 mb-[50px]">
                  <div>
                    <div className="text-4xl text-white font-medium">
                      Discover Events Near You
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-white items-center">
                    <img src={jakarta} alt="" className="w-full h-full" />
                    <div className="font-medium">Jakarta</div>
                  </div>
                  <div className="flex flex-col gap-2 text-white items-center">
                    <img src={bandung} alt="" className="w-full h-full" />
                    <div className="font-medium">Bandung</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }
                  >
                    <img src={bali} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Bali</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }
                  >
                    <img src={aceh} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Aceh</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }
                  >
                    <img src={solo} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Solo</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }
                  >
                    <img src={jogja} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Yogyakarta</div>
                  </div>
                  <div
                    className={
                      add
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }
                  >
                    <img src={semarang} alt="" className="w-full h-full" />
                    <div className="font-medium text-center">Semarang</div>
                  </div>
                </div>
                <div className="w-full text-center" onClick={seeAll}>
                  <button className="bg-white max-w-[255px] w-full h-[40px] rounded-xl text-[#3366FF]">
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mb-[50px]">
            <div className="bg-[#FFCFDB] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-[#FF3D71] flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
              CATEGORY
            </div>
            <div className="font-[#333333] text-[36px] font-semibold text-center mb-12">
              Browse Events By Category
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 w-full justify-between gap-10 m-10 md:m-16 text-center">
            <div className="underline text-[#3366FF] font-semibold">Music</div>
            <div className="text-[#C1C5D0] font-semibold">Arts</div>
            <div className="text-[#C1C5D0] font-semibold">Outdoors</div>
            <div className="text-[#C1C5D0] font-semibold">Workshop</div>
            <div className="text-[#C1C5D0] font-semibold">Sport</div>
            <div className="text-[#C1C5D0] font-semibold">Festival</div>
            <div className="text-[#C1C5D0] font-semibold">Fashion</div>
          </div>
        </div>
        <div className="flex gap-6 items-center md:justify-center m-10 overflow-x-scroll md:overflow-x-visible">
          <div className="md:w-[45px] md:h-[45px] md:shadow-md md:bg-white md:flex  items-center justify-center rounded-md hidden">
            <img src={arrowLeft} alt="" className="" />
          </div>
          <div className="relative w-[300px] h-[350px] rounded-3xl overflow-hidden ml-8 flex-shrink-0">
            <img src={cars} alt="" />
            <div className="absolute bg-blue-600 w-full h-[162px] bottom-0 px-4 pb-4">
              <div className="flex mb-[8px] mt-[-16px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-white gap-2 mt-7">
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="font-semibold text-2xl tracking-wider">
                  Sights & Sounds Exhibition
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[350px] rounded-3xl overflow-hidden flex-shrink-0">
            <img src={cars} alt="" />
            <div className="absolute bg-blue-600 w-full h-[162px] bottom-0 px-4 pb-4">
              <div className="flex mb-[8px] mt-[-16px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-white gap-2 mt-7">
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="font-semibold text-2xl tracking-wider">
                  Sights & Sounds Exhibition
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[350px] rounded-3xl overflow-hidden mr-8 flex-shrink-0">
            <img src={cars} alt="" />
            <div className="absolute bg-blue-600 w-full h-[162px] bottom-0 px-4 pb-4">
              <div className="flex mb-[8px] mt-[-16px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-white gap-2 mt-7">
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="font-semibold text-2xl tracking-wider">
                  Sights & Sounds Exhibition
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[45px] md:h-[45px] md:shadow-md md:bg-[#3366FF] md:flex  items-center justify-center rounded-md hidden">
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
