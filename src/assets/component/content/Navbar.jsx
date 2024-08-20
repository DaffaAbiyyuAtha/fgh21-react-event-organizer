import React from "react";
import Logo from "../content/Logo";
import profile from "../../img/profile.svg";
import { Link, useParams } from "react-router-dom";
import toggle from "../../img/toggle.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Navbar() {
  let { id } = useParams();
  const dataProfile = useSelector((state) => state.profile.data);
  const tokens = useSelector((state) => state.auth.token);
  const [open, setOpen] = React.useState(true);
  function toggles() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  async function datas() {
    const dataEvent = await fetch("http://localhost:8080/profile/" + id.id, {
      headers: {
        Authorization: "Bearer " + tokens,
      },
    });
    const listData = await dataEvent.json();
    setData(listData.result);
    console.log(listData);
  }
  useEffect(() => {
    datas();
  }, []);
  return (
    <div className="bg-[#DEF9C4] py-4 px-10 md:px-16 flex flex-col gap-4 md:justify-between md:flex-row w-full md:items-center">
      <div className="flex justify-between">
        <Link to="/" className="flex justify-between items-center">
          <Logo />
        </Link>
        <button type="button" onClick={toggles} className="md:hidden">
          <img src={toggle} alt="" />
        </button>
      </div>
      <div
        className={
          open
            ? "md:flex gap-6 hidden"
            : "flex flex-col justify-center items-center md:flex-row gap-6"
        }
      >
        <Link
          to="/"
          className="text-[#468585] text-sm font-semibold tracking-wider border-b-2 border-[#468585]"
        >
          <div className="">Home</div>
        </Link>
        <Link to="/my-create-event">
          <div className="text-[#50B498] text-sm font-semibold tracking-wider">
            Create Event
          </div>
        </Link>
        <div className="text-[#50B498] text-sm font-semibold tracking-wider">
          Location
        </div>
      </div>
      <div className="">
        {tokens === null ? (
          <div
            className={
              open ? "md:flex hidden" : "flex flex-col gap-4 md:flex-row"
            }
          >
            <Link to="/login" className="">
              <button
                type="button"
                className="h-10 md:w-40 
            w-full text-[#50B498] rounded-lg text-sm tracking-wider"
              >
                Log In
              </button>
            </Link>
            <Link to="/sign-up" className="">
              <button
                type="button"
                className="h-10 md:w-40 w-full bg-[#468585] text-[#DEF9C4] rounded-lg text-sm tracking-wider"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div
            className={
              open
                ? "md:flex gap-6 hidden"
                : "flex flex-col justify-center items-center md:flex-row gap-6"
            }
          >
            <Link to="/profile" className="flex justify-center">
              <div className="flex items-center gap-[8px]">
                <div className="rounded-full">
                  <img
                    src="profile"
                    className="rounded-full border-2 w-10 h-10 border-[#468585] "
                  />
                </div>

                <div className="text-sm tracking-[1px] text-[#50B498] font-semibold">
                  Jhon Tomson
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
