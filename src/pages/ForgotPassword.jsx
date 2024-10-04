import React from "react";
import Logo from "../assets/component/content/Logo";
import people from "../assets/img/people.svg";
import google from "../assets/img/google.svg";
import eye from "../assets/img/eyes.svg";
import facebook from "../assets/img/facebook.svg";
import Footer from "../assets/component/content/Footer";
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/img/banner1.png";

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
    if (email === "admin@mail.com") {
      window.alert("Check Your Email!");
      navigate("/login");
    } else {
      window.alert("Your Email not Register");
    }
  }
  return (
    <div>
      <div className="md:flex mb-[100px]">
        <div className="md:flex md:w-2/3 bg-[#468585] h-screen justify-center items-center hidden">
          <div div className="">
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
            Forgot Password
          </div>
          <div className="text-sm text-[#50B498] tracking-[0.5px] mb-[50px]">
            You’ll get mail soon on your email
          </div>
          <form onSubmit={processLogin}>
            <div className="flex justify-center flex-col gap-[15px]">
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
                <button
                  type="submit"
                  className="h-[55px] border w-full bg-[#468585] text-[#DEF9C4] rounded-[15px] tracking-[1px] mb-[50px]"
                >
                  Send
                </button>
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
