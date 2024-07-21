import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import profile from "../assets/img/profile.svg";

function Profile() {
  return (
    <div className="md:bg-[#F4F7FF]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex mt-[50px] md:ml-[70px] md:mr-[70px] mb-[100px]">
        <Sidebar />
        <div className="md:w-3/4 w-full bg-white rounded-[30px] p-10 md:p-[50px]">
          <div className="mb-[50px] text-xl font-semibold tracking-[1px]">
            Profile
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 w-full md:mr-[50px]">
                <div className="flex justify-center md:hidden">
                  <img
                    src={profile}
                    alt=""
                    className="h-[136px] w-[136px] rounded-full mb-[50px]"
                  />
                </div>
                <div className="">
                  <table className="w-full">
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42]">
                        Name
                      </td>
                      <td className="">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Jhon Tomson"
                          className="h-[55px] w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px]"
                        />
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42] pt-[32px]">
                        Username
                      </td>
                      <td className="text-sm tracking-[1px] text-[#777777] pt-[32px]">
                        @jhont0
                        <span className="text-[#3366FF] underline pl-[15px]">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42] pt-[48px]">
                        Email
                      </td>
                      <td className="text-sm tracking-[1px] text-[#777777] pt-[48px]">
                        jhont0@mail.com
                        <span className="text-[#3366FF] underline pl-[15px]">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42] pt-[48px]">
                        Phone Number
                      </td>
                      <td className="text-sm tracking-[1px] text-[#777777] pt-[48px]">
                        081234567890
                        <span className="text-[#3366FF] underline pl-[15px]">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42] pt-[48px]">
                        Gender
                      </td>
                      <td className="text-sm tracking-[1px] text-[#373A42] pt-[48px] flex gap-[12px]">
                        <input type="radio" name="gender" id="male" />
                        <label htmlFor="male" className="mr-[25px]">
                          Male
                        </label>
                        <input type="radio" name="gender" id="female" />
                        <label htmlFor="female">Female</label>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42]  pt-[32px]">
                        Profession
                      </td>
                      <td className=" pt-[32px]">
                        <input
                          type="text"
                          name="profession"
                          id="profession"
                          placeholder="Entrepreneur"
                          className="h-[55px] w-full border border-2 rounded-[16px] pl-[25px] pr-[25px]"
                        />
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42]  pt-[16px]">
                        Nationality
                      </td>
                      <td className=" pt-[16px]">
                        <input
                          type="text"
                          name="nationality"
                          id="nationality"
                          placeholder="Indonesia"
                          className="h-[55px] w-full border border-2 rounded-[16px] pl-[25px] pr-[25px]"
                        />
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="text-sm tracking-[1px] text-[#373A42] pt-[32px]">
                        Username
                      </td>
                      <td className="text-sm tracking-[1px] text-[#777777] pt-[32px]">
                        <span className="underline">24</span>
                        <span className="">/</span>
                        <span className="underline">10</span>
                        <span className="">/</span>
                        <span className="underline">2000</span>
                        <span className="text-[#3366FF] underline pl-[15px]">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <div className="pt-[50px] w-full ">
                      <button
                        type="submit"
                        className="h-[60px] w-full md:max-w-[315px] bg-[#3366FF] rounded-[16px] text-white font-semibold tracking-[1px] "
                      >
                        Save
                      </button>
                    </div>
                  </table>
                </div>
              </div>
              <div className="w-1/3 hidden md:block">
                <div className="flex justify-center">
                  <img
                    src={profile}
                    alt=""
                    className="h-[136px] w-[136px] rounded-full mb-[50px]"
                  />
                </div>
                <button
                  type="submit"
                  className="h-[40px] w-full border border-2 border-[#3366FF] rounded-[10px] text-sm tracking-[1px] text-[#3366FF] font-semibold mb-[25px]"
                >
                  Choose Photo
                </button>
                <div className="text-xs text-[#696B71] tracking-[0.5px] mb-[16px]">
                  Image size: max, 2 MB
                </div>
                <div className="text-xs text-[#696B71] tracking-[0.5px]">
                  Image formats: .JPG, .JPEG, .PNG
                </div>
              </div>
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
