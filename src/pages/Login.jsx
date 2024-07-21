import React from "react";
import Logo from "../assets/component/content/Logo";
import people from "../assets/img/people.svg";
import google from "../assets/img/google.svg";
import eye from "../assets/img/eyes.svg";
import facebook from "../assets/img/facebook.svg";
import Footer from "../assets/component/content/Footer";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  function processLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "admin@mail.com" && password === "1234") {
      window.alert("Login Success!");
      navigate("/");
    } else {
      window.alert("Wrong email or password!");
    }
  }
  return (
    <div>
      <div className="md:flex mb-[100px]">
        <div className="md:flex md:w-2/3 bg-[#3366FF] justify-center items-center hidden">
          <div className="">
            <img src={people} alt="" className="md:w-auto md:h-full " />
          </div>
        </div>
        <div className="md:w-1/3 mt-[208px] p-10">
          <div className="mb-[50px]">
            <Link to="/">
              <Logo />
            </Link>
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
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full rounded-[15px] h-[55px] border border-[#C1C5D0] border-solid rounded-[15px] justify-center pl-[25px] pr-[25px] tracking-[1px]"
                />
              </div>
              <div className="">
                <div className="flex w-full items-center border-2 h-14 px-6 rounded-2xl overflow-hidden ">
                  <input
                    type={pass}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="flex-1 outline-none"
                  />
                  <button type="button" onClick={changePassword} className="">
                    <img src={eye} alt="" />
                  </button>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="text-[#3366FF] text-sm font-semibold text-end tracking-[1px] mb-[25px]"
              >
                Forgot Password?
              </Link>
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
