import React from "react";
import Logo from "../assets/component/content/Logo";
import people from "../assets/img/people.svg";
import google from "../assets/img/google.svg";
import facebook from "../assets/img/facebook.svg";
import Footer from "../assets/component/content/Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function processLogin(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (name === "admin" && email === "admin@mail.com" && password === "1234") {
      window.alert("Login Success!");
      navigate("/event");
    } else {
      window.alert("Wrong email or password!");
    }
  }
  return (
    <div>
      <div className="flex mb-[100px]">
        <div className="flex w-2/3 bg-[#3366FF] justify-center items-center">
          <div className="gambar">
            <img src={people} alt="" className="w-auto h-full" />
          </div>
        </div>
        <div className=""></div>
        <div className="w-1/3 mt-[208px] pl-[100px] pr-[100px]">
          <div className="mb-[50px]">
            <Logo />
          </div>
          <div className="tracking-[1px] text-[#373A42] text-2xl font-semibold mb-[15px]">
            Sign In
          </div>
          <div className="text-sm text-[#373A42] tracking-[0.5px] mb-[50px]">
            Hi, Welcome back to Urticket!
          </div>
          <form onSubmit={processLogin}>
            <div className="flex justify-center flex-col gap-[15px]">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  className="w-full rounded-[15px] h-[55px] border border-[#C1C5D0] border-solid rounded-[15px] justify-center pl-[25px] pr-[25px] tracking-[1px]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full rounded-[15px] h-[55px] border border-[#C1C5D0] border-solid rounded-[15px] justify-center pl-[25px] pr-[25px] tracking-[1px]"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full rounded-[15px] h-[55px] border border-[#C1C5D0] border-solid rounded-[15px] justify-center pl-[25px] pr-[25px] tracking-[1px] mb-[24px]"
                />
              </div>
              <div className="text-[#3366FF] text-sm font-semibold text-end tracking-[1px] mb-[25px]">
                Forgot Password?
              </div>
              <div className="">
                <button
                  type="submit"
                  className="h-[55px] border w-full bg-[#3366FF] text-[#FFFFFF] rounded-[15px] tracking-[1px] mb-[50px]"
                >
                  Sign In
                </button>
              </div>
              <div className="text-sm text-center text-[#373A42] tracking-[0.5px] mb-[15px]">
                or sign in with
              </div>
              <div className="flex gap-[16px] mb-[136px] justify-center">
                <div className="">
                  <img
                    src={google}
                    className="pb-[14px] pt-[14px] pr-[36px] pl-[36px] border border-[#3366FF] border-solid rounded-[8px]"
                  />
                </div>
                <div className="">
                  <img
                    src={facebook}
                    className="pb-[14px] pt-[14px] pr-[36px] pl-[36px] border border-[#3366FF] border-solid rounded-[8px]"
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
    </div>
  );
}

export default Login;
