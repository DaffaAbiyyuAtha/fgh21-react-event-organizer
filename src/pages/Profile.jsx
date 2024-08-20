import React, { useEffect } from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import profile from "../assets/img/profile.svg";
import arrowDown from "../assets/img/arrow-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { datas } from "../redux/reducers/profile";

function Profile() {
  const dataToken = useSelector((state) => state.auth.token);
  const dataProfile = useSelector((state) => state.profile.data);
  console.log(dataProfile);
  const [profiles, setProfile] = React.useState([]);
  async function dataProfiles() {
    const dataNasional = await fetch("http://localhost:8080/profile/", {
      headers: {
        Authorization: "Bearer " + dataToken,
      },
    });
    const listData = await dataNasional.json();
    console.log(listData.result[0]);
    setProfile(listData.result);
  }
  useEffect(() => {
    dataProfiles();
  }, []);
  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex m-10 md:m-16">
        <Sidebar />
        <div className="flex-1 bg-[#DEF9C4] rounded-[30px] md:p-10">
          <div className="mb-[50px] text-[#468585] text-xl font-semibold tracking-[1px]">
            Profile
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 w-full md:mr-[50px]">
                <div className="flex justify-center md:hidden">
                  <img
                    src=""
                    alt=""
                    className="h-[136px] w-[136px] rounded-full mb-[50px]"
                  />
                </div>
                <div className="">
                  <table className="w-full">
                    <tbody>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="name">Name</label>
                        </td>
                        <td className="">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={dataProfile.profile[0].full_name}
                            className="h-[55px] w-full sborder border-2 text-[#468585] border-[#468585] bg-transparent rounded-[16px] pl-[25px] pr-[25px] mb-5"
                          />
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="name">Username</label>
                        </td>
                        <td className="">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={dataProfile.username}
                            className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5"
                          />
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="name">Email</label>
                        </td>
                        <td className="">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={dataProfile.user.email}
                            className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5"
                          />
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="name">Phone Number</label>
                        </td>
                        <td className="">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={dataProfile.profile[0].phone_number}
                            className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5"
                          />
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585] pt-[48px]">
                          Gender
                        </td>
                        <td className="text-sm tracking-[1px] text-[#468585] pt-[48px] flex gap-[12px]">
                          {profile.gender === "Male" ? (
                            <input
                              type="radio"
                              name="gender"
                              id="male"
                              defaultChecked
                            />
                          ) : (
                            <input type="radio" name="gender" id="male" />
                          )}
                          <label htmlFor="male" className="mr-[25px]">
                            Male
                          </label>
                          {profile.gender === "Female" ? (
                            <input
                              type="radio"
                              name="gender"
                              id="female"
                              defaultChecked
                            />
                          ) : (
                            <input type="radio" name="gender" id="female" />
                          )}
                          <label htmlFor="female">Female</label>
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="name">Profession</label>
                        </td>
                        <td className="">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={dataProfile.profile[0].profession}
                            className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5 mt-5"
                          ></input>
                        </td>
                      </tr>
                      {/* <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="name">Nationality</label>
                        </td>
                        <td className="">
                          <select
                            name="name"
                            id="name"
                            className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px]"
                          >
                            {nasionality.map((country) => {
                              return (
                                <option
                                  value={dataProfile.nasionality}
                                  selected
                                >
                                  {country.name}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                      </tr> */}
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="birthday">Birthday Date</label>
                        </td>
                        <td className="">
                          <input
                            type="date"
                            name="birthday"
                            id="birthday"
                            defaultValue={dataProfile.profile[0].birth_date}
                            className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px]"
                          />
                        </td>
                      </tr>
                      <div className="pt-[50px] w-full ">
                        <button
                          type="submit"
                          className="h-[60px] w-full md:max-w-[315px] bg-[#50B498] rounded-[16px] text-[#DEF9C4] font-semibold tracking-[1px] "
                        >
                          Save
                        </button>
                      </div>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-1/3 hidden md:block">
                <div className="flex justify-center">
                  <img
                    src={profiles.picture}
                    alt=""
                    className="h-[136px] w-[136px]  rounded-full mb-[50px]"
                  />
                </div>
                <button
                  type="submit"
                  className="h-[40px] w-full border-2 border-[#468585] rounded-[10px] text-sm tracking-[1px] text-[#468585] font-semibold mb-[25px]"
                >
                  Choose Photo
                </button>
                <div className="text-xs text-[#50B498] tracking-[0.5px] mb-[16px]">
                  Image size: max, 2 MB
                </div>
                <div className="text-xs text-[#50B498] tracking-[0.5px]">
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
