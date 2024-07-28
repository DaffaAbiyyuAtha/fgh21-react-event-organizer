import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";

function Profile() {
  return (
    <div className="md:bg-[#9CDBA6] bg-[#9CDBA6]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex m-10 md:m-16">
        <Sidebar />
        <div className="md:w-3/4 w-full bg-[#DEF9C4] rounded-[30px] p-10 md:p-[50px]">
          <div className="mb-[50px] text-[#468585] text-xl font-semibold tracking-[1px]">
            Change Password
          </div>
          <form className="w-full">
            <table className="w-full">
              <tr className="flex flex-col md:table-row">
                <td className="text-[#468585] tracking-[1px] text-sm">
                  <label htmlFor="password">Old Password</label>
                </td>
                <td className="pt-[32px]">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Input Old Password ..."
                    className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full border-2 pl-[28px] pr-[28px] text-sm rounded-[15px]"
                  />
                </td>
              </tr>
              <tr className="flex flex-col md:table-row">
                <td className="text-[#468585] tracking-[1px] text-sm pt-[32px]">
                  <label htmlFor="newpassword">New Password</label>
                </td>
                <td className="pt-[32px]">
                  <input
                    type="text"
                    name="newpassword"
                    id="newpassword"
                    placeholder="Input New Password ..."
                    className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full border-2 pl-[28px] pr-[28px] text-sm rounded-[15px]"
                  />
                </td>
              </tr>
              <tr className="flex flex-col md:table-row">
                <td className="text-[#468585] tracking-[1px] text-sm pt-[32px]">
                  <label htmlFor="confirmpassword">Confirm Password</label>
                </td>
                <td className="pt-[32px]">
                  <input
                    type="text"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Input Confirm Password ..."
                    className="h-[55px] w-full text-[#468585] border-[#468585] bg-transparent border-2 pl-[28px] pr-[28px] text-sm rounded-[15px]"
                  />
                </td>
              </tr>
            </table>
            <div className="pt-[40px] w-full">
              <button
                type="submit"
                className="h-[60px] w-full bg-[#468585] text-[#DEF9C4] rounded-[15px] tracking-[1px]"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
