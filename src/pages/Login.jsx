import React, { useState } from "react";
import Logo from "../assets/component/content/Logo";
import people from "../assets/img/people.svg";
import google from "../assets/img/google.svg";
import eye from "../assets/img/eyes.svg";
import facebook from "../assets/img/facebook.svg";
import Footer from "../assets/component/content/Footer";
import banner from "../assets/img/banner1.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reducers/auth";
import { datas } from "../redux/reducers/profile";
import { FaEye } from "react-icons/fa6";
import Loading from "../assets/component/content/Loading";
import { data } from "autoprefixer";

function Login() {
  const [wait, setWait] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = React.useState("");
  function processLogin(dataLogin) {
    dataLogin.preventDefault();
    const email = dataLogin.target.email.value;
    const password = dataLogin.target.password.value;
    
    setWait(true);
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          dispatch(login(data.result.token));
          async function profile() {
            const dataProfile = await fetch("http://localhost:8080/profile/", {
              headers: {
                Authorization: "Bearer " + data.result.token,
              },
            });
            const listData = await dataProfile.json();
            dispatch(datas(listData.result));
            navigate("/");
          }
          profile();
        } else {
          console.log(data.message)
        }
      })
      .catch((err) => {
        console.log(data.message)
        console.log(err);
      });
  }
  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  // function processLogin(e) {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   if (email === "admin@mail.com" && password === "1234") {
  //     window.alert("Login Success!");
  //     navigate("/");
  //   } else {
  //     window.alert("Wrong email or password!");
  //   }
  // }
  return (
    <div>
      <div className="md:flex mb-[100px]">
        <div className="md:flex md:w-2/3 bg-[#468585] justify-center items-center hidden">
          <div className="">
            <img src={banner} alt="" className="md:w-auto md:h-full " />
          </div>
        </div>
        <div className="md:w-1/3 mt-[208px] p-10">
          <div className="mb-[50px]">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="tracking-[1px] text-[#468585] text-2xl font-semibold mb-[15px]">
            Sign In
          </div>
          <div className="text-sm text-[#50B498] tracking-[0.5px] mb-[50px]">
            Hi, Welcome back to Urticket!
          </div>
          <div className="text-red-600 mb-5">{message}</div>
          <form onSubmit={processLogin}>
            <div className="flex justify-center border-[#468585] flex-col gap-[15px]">
              <div className="border-[#468585] bg-transparent border-2 rounded-2xl">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full outline-none h-[55px] rounded-2xl border border-solid bg-transparent text-[#468585] justify-center pl-[25px] pr-[25px] tracking-[1px]"
                />
              </div>
              <div className="">
                <div className="flex w-full items-center border-[#468585] bg-transparent border-2 h-14 px-6 rounded-2xl text-[#468585] overflow-hidden ">
                  <input
                    type={pass}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="flex-1 outline-none bg-transparent"
                  />
                  <button type="button" onClick={changePassword} className="">
                    <FaEye />
                  </button>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-end tracking-[1px] text-[#468585]"
              >
                Forgot Password?
              </Link>
              <Link
                to="/sign-up"
                className="text-sm font-semibold text-end tracking-[1px] mb-[25px] text-[#468585]"
              >
                Dont Have an Account?
              </Link>
              <div className="">
                <button
                  type="submit"
                  className="h-[55px] border w-full bg-[#468585] text-[#DEF9C4] rounded-[15px] tracking-[1px] mb-[50px]"
                >
                  Sign In
                </button>
              </div>
              <div className="text-sm text-center text-[#468585] tracking-[0.5px] mb-[15px]">
                or sign in with
              </div>
              <div className="flex gap-[16px] mb-[136px] justify-center">
                <div className="">
                  <img
                    src={google}
                    className="pb-[14px] pt-[14px] pr-[36px] pl-[36px] border border-[#468585] border-solid rounded-[8px]"
                  />
                </div>
                <div className="">
                  <img
                    src={facebook}
                    className="pb-[14px] pt-[14px] pr-[36px] pl-[36px] border border-[#468585] border-solid rounded-[8px]"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
      {wait ? <Loading /> : ""}
    </div>
  );
}

export default Login;
