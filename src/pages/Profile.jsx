import React, { useEffect } from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import profile from "../assets/img/profile-circle.svg";
import arrowDown from "../assets/img/arrow-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { datas } from "../redux/reducers/profile";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataToken = useSelector((state) => state.auth.token);
  const dataProfile = useSelector((state) => state.profile.data);
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);
  const [profiles, setProfile] = React.useState([]);
  const [nationality, setNationality] = React.useState([]);
  const [message, setMessage] = React.useState(true);
  
  useEffect(() => {
    if (!dataToken) {
      navigate("/login");
      return;
    }

    profileDatas()
    nationalitiesData()
  }, [dataToken, navigate]);

  async function updateProfiles(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const profession = e.target.profession.value;
    const gender = e.target.gender.value;
    const nationality = e.target.nationality.value;
    const form = new URLSearchParams();
    form.append("full_name", name);
    form.append("username", username);
    form.append("email", email);
    form.append("phone_number", phone);
    form.append("profession", profession);
    form.append("gender", gender);
    form.append("nationality_id", nationality);
    const dataProfile = await fetch("http://103.93.58.89:21211/profile/update", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + dataToken,
      },
      body: form,
    });
    const listData = await dataProfile.json();
    setMessage(listData.message);
    setProfile(listData.result);
    if (listData.success) {
      uploadImage()
      profileDatas()
    }
  }

  async function profileDatas() {
    const response = await fetch("http://103.93.58.89:21211/profile/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + dataToken,
      },
    });
    const profileData = await response.json();
    dispatch(datas(profileData.result));
    console.log(profileData)
  }

  async function nationalitiesData() {
    const nationalities = await fetch("http://103.93.58.89:21211/nationalities/", {});
    const dataNationality = await nationalities.json();
    setNationality(dataNationality.result);
  }


  async function uploadImage() {

    const body = new FormData()
    body.append( 'picture', file)
 
    const response = await fetch('http://103.93.58.89:21211/profile/picture', {
      method: 'PATCH',
      headers: {
        Authorization: "Bearer " + dataToken,
      },
      body,
    });
    const json = await response.json()
    profileDatas()
      
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };


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
          <div className="text-red-600 mb-5">{message}</div>
          <form onSubmit={updateProfiles}>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 w-full md:mr-[50px]">
                <div className="flex justify-center md:hidden">
                  {dataProfile.profile[0].picture === null ? (
                    <div className="flex justify-center">
                      <img
                        src={profile}
                        alt=""
                        className="h-[136px] w-[136px]  rounded-full mb-[50px]"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <img
                        src={dataProfile.profile[0].picture}
                        alt=""
                        className="h-[136px] w-[136px]  rounded-full mb-[50px]"
                      />
                    </div>
                  )} 
                </div>
                <div className="">
                  <table className="w-full">
                    <tbody>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="name">Name</label>
                        </td>
                        <td className="">
                          {dataProfile?.profile && (
                            <input
                              type="text"
                              name="name"
                              id="name"
                              defaultValue={dataProfile.profile[0].full_name}
                              className="h-[55px] w-full sborder border-2 text-[#468585] border-[#468585] bg-transparent rounded-[16px] pl-[25px] pr-[25px] mb-5"
                            />
                          )}
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="username">Username</label>
                        </td>
                        <td className="">
                          {dataProfile?.user && (
                            <input
                              type="text"
                              name="username"
                              id="username"
                              defaultValue={dataProfile.user.username}
                              className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5"
                            />
                          )}
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="email">Email</label>
                        </td>
                        <td className="">
                          {dataProfile?.user && (
                            <input
                              type="text"
                              name="email"
                              id="email"
                              defaultValue={dataProfile.user.email}
                              className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5"
                            />
                          )}
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="phone">Phone Number</label>
                        </td>
                        <td className="">
                          {dataProfile?.profile && (
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              defaultValue={dataProfile.profile[0].phone_number}
                              className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5"
                            />
                          )}
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585] pt-[48px]">
                          Gender
                        </td>
                        <td className="text-sm tracking-[1px] text-[#468585] pt-[48px] flex gap-[12px]">
                          {dataProfile?.profile && (
                            <input
                              type="radio"
                              name="gender"
                              id="male"
                              value="1"
                              defaultChecked={dataProfile.profile[0].gender === 1}
                            />
                          )}
                          <label htmlFor="male" className="mr-[25px]">
                            Male
                          </label>
                          {dataProfile?.profile && (
                            <input
                              type="radio"
                              name="gender"
                              id="female"
                              value="2"
                              defaultChecked={dataProfile.profile[0].gender === 2}
                            />
                          )}
                          <label htmlFor="female">Female</label>
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="profession">Profession</label>
                        </td>
                        <td className="">
                          {dataProfile?.profile && (
                            <input
                              type="text"
                              name="profession"
                              id="profession"
                              defaultValue={dataProfile.profile[0].profession}
                              className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5 mt-5"
                            />
                          )}
                        </td>
                      </tr>
                      <tr className="flex flex-col md:table-row">
                        <td className="text-sm tracking-[1px] text-[#468585]">
                          <label htmlFor="nationality">Nationality</label>
                        </td>
                        <td className="">
                          {dataProfile?.profile && (
                            <select
                              name="nationality"
                              id="nationality"
                              className="h-[55px] text-[#468585] border-[#468585] bg-transparent w-full sborder border-2 rounded-[16px] pl-[25px] pr-[25px] mb-5 mt-5"
                            >
                              <option value="0">Select Your Nationality</option>
                              {nationality.map((items) => {
                                return (
                                  <option 
                                    selected = {items.id === dataProfile.profile[0].nationality_id ? true : false}
                                    value={items.id}>{items.name}</option>
                                )
                              })}
                            </select>
                            )}
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
              {dataProfile?.profile && (
                <div className="w-1/3 hidden md:block">
                  {dataProfile.profile[0].picture === null ? (
                    <div className="flex justify-center">
                      <img
                        src={profile}
                        alt=""
                        className="h-[136px] w-[136px]  rounded-full mb-[50px]"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <img
                        src={dataProfile.profile[0].picture}
                        alt=""
                        className="h-[136px] w-[136px]  rounded-full mb-[50px]"
                      />
                    </div>
                  )} 
                  <form action="">
                    <label htmlFor="file" className="flex items-center justify-center h-[40px] w-full border-2 border-[#468585] rounded-[10px] text-sm tracking-[1px] text-[#468585] font-semibold mb-[25px]">
                      <div>
                        Choose Photo
                      </div>
                    </label>
                    <input type="file" name="file" id="file" className="hidden" onChange={handleFileChange}/>
                  </form>
                  <div className="text-xs text-[#50B498] tracking-[0.5px] mb-[16px]">
                    Image size: max, 2 MB
                  </div>
                  <div className="text-xs text-[#50B498] tracking-[0.5px]">
                    Image formats: .JPG, .JPEG, .PNG
                  </div>
                </div>
              )}
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
