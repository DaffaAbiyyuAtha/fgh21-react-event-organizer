import React from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import { FaEye } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
  const dataToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!dataToken) {
      navigate("/login");
      return;
    }
  }, [dataToken, navigate]);
  const [message, setMessage] = React.useState(true)
  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  let [newPass, setNewPassword] = React.useState("password");
  function changeNewPassword() {
    if (newPass === "password") {
      setNewPassword("text");
    } else {
      setNewPassword("password");
    }
  }
  let [confPass, setConfPassword] = React.useState("password");
  function changeConfPassword() {
    if (confPass === "password") {
      setConfPassword("text");
    } else {
      setConfPassword("password");
    }
  }

  async function changeNewPasswords(dataPassword) {
    dataPassword.preventDefault();
    const oldPassword = dataPassword.target.password.value;
    const password = dataPassword.target.newpassword.value;
    const form = new URLSearchParams();
    form.append("oldPassword", oldPassword)
    form.append("password", password);
    const dataPasswords = await fetch("http://103.93.58.89:21211:8080/users/password/", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + dataToken,
      },
      body: form,
    });
    const listData = await dataPasswords.json();
    setMessage(listData.message);
  }
  changeNewPasswords();
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
          <div className="text-red-600 mb-5">{message}</div>
          <form className="w-full" onSubmit={changeNewPasswords}>
            <table className="w-full">
              <tr className="flex flex-col md:table-row">
                <td className="text-[#468585] tracking-[1px] text-sm">
                  <label htmlFor="password">Old Password</label>
                </td>
                <td className="">
                  <div className="flex w-full items-center border-[#468585] bg-transparent border-2 h-14 px-6 rounded-2xl text-[#468585] overflow-hidden ">
                    <input
                      type={pass}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="flex-1 outline-none bg-transparent"
                    />
                    <button type="button" className="" onClick={changePassword}>
                      <FaEye />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row">
                <td className="text-[#468585] tracking-[1px] text-sm pt-[32px]">
                  <label htmlFor="newpassword">New Password</label>
                </td>
                <td className="">
                  <div className="flex w-full items-center border-[#468585] bg-transparent border-2 h-14 px-6 rounded-2xl text-[#468585] overflow-hidden mt-6">
                    <input
                      type={newPass}
                      name="newpassword"
                      id="newpassword"
                      placeholder="Input New Password ..."
                      className="flex-1 outline-none bg-transparent"
                    />
                    <button
                      type="button"
                      className=""
                      onClick={changeNewPassword}
                    >
                      <FaEye />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row">
                <td className="text-[#468585] tracking-[1px] text-sm pt-[32px]">
                  <label htmlFor="confirmpassword">Confirm Password</label>
                </td>
                <td className="">
                  <div className="flex w-full items-center border-[#468585] bg-transparent border-2 h-14 px-6 rounded-2xl text-[#468585] overflow-hidden mt-6">
                    <input
                      type={confPass}
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Confirm New Password"
                      className="flex-1 outline-none bg-transparent"
                    />
                    <button
                      type="button"
                      className=""
                      onClick={changeConfPassword}
                    >
                      <FaEye />
                    </button>
                  </div>
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
