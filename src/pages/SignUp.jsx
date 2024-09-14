import React from "react";
import Logo from "../assets/component/content/Logo";
import people from "../assets/img/people.svg";
import banner from "../assets/img/banner1.png";
import google from "../assets/img/google.svg";
import eye from "../assets/img/eyes.svg";
import facebook from "../assets/img/facebook.svg";
import Footer from "../assets/component/content/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaCircleCheck } from "react-icons/fa6";
import Loading from "../assets/component/content/Loading";

function Login() {
  const navigate = useNavigate();
  const [wait, setWait] = React.useState(false);
  const [name, setName] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [passw, setPass] = React.useState(false);
  const [confPass, setConfPass] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  let [confirmpass, confirmPasswords] = React.useState("password");
  function confirmPassword() {
    if (confirmpass === "password") {
      confirmPasswords("text");
    } else {
      confirmPasswords("password");
    }
  }
  function processLogin(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPass.value;
    const formData = new URLSearchParams();
    formData.append("full_name", name);
    formData.append("email", email);
    formData.append("password", password);
    
    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      body: formData,
    });
    setWait(true);
    navigate("/login");
   
    // if (name !== "") {
    //   setName(true)
    // } else {
    //   setName(false)
    // }
    // if (email !== "") {
    //   setEmail(true)
    // } else {
    //   setEmail(false)
    // }
    // if (password !== "") {
    //   setPass(true)
    // } else {
    //   setPass(false)
    // }
    // if (confirmPass !== password) {
    //   setConfPass(true)
    // } else {
    //   setConfPass(false)
    // }

  //   if (name !== "") {
  //     if (email !== "") {
  //       if (password !== "") {
  //         if (confirmPass === password) {
  //           navigate("/login");
  //           setSuccess("Registration Success! Please Log In");
  //         } else {
  //           setConfPass("Password and Confirm Password Must same!");
  //         }
  //       } else {
  //         setPass("You Must Fill the Password!");
  //       }
  //     } else {
  //       setEmail("You Must Fill the Email!");
  //     }
  //   } else {
  //     setName("You Must Fill the Full Name!");
  //   }
  }
  
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
            Sign Up
          </div>
          <div className="text-sm flex gap-2 tracking-[0.5px] mb-[50px]">
            <div className="text-[#50B498] ">Already have an account?</div>
            <Link to="/login" className="text-[#468585] font-semibold">
              Log In
            </Link>
          </div>
          <form onSubmit={processLogin}>
            <div className="flex justify-center border-[#468585] flex-col gap-[15px]">
              <div className="border-[#468585] bg-transparent border-2 rounded-2xl">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full outline-none h-[55px] rounded-2xl border border-solid bg-transparent text-[#468585] justify-center pl-[25px] pr-[25px] tracking-[1px]"
                />
              </div>
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
                <div className="border-[#468585] text-[#468585] bg-transparent border-2 rounded-2xl flex w-full items-center h-14 px-6 overflow-hidden ">
                  <input
                    type={pass}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="flex-1 bg-transparent outline-none"
                  />
                  <button
                    type="button"
                    onClick={changePassword}
                    className="text-[#468585]"
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="">
                <div className="border-[#468585] text-[#468585] bg-transparent border-2 rounded-2xl flex w-full items-center h-14 px-6 overflow-hidden ">
                  <input
                    type={confirmpass}
                    name="confirmPass"
                    id="confirmPass"
                    placeholder="Confirm Password"
                    className="flex-1 bg-transparent outline-none"
                  />
                  <button
                    type="button"
                    onClick={confirmPassword}
                    className="text-[#468585]"
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="flex text-[#50B498] gap-2 items-center">
                <div>
                  <input type="checkbox" name="accept" id="accept" />
                </div>
                <div className="">
                  <label
                    htmlFor="accept"
                    className="text-[#50B498] text-sm tracking-[1px] mb-[25px]"
                  >
                    Accept terms and condition
                  </label>
                </div>
              </div>
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
      {/* <div className="flex justify-center items-center w-full h-screen bg-black/50">
        <div className="flex flex-col gap-10 justify-center items-center w-96 h-80 font-bold text-xl text-[#468585] bg-[#DEF9C4] rounded-xl">
          <div className="">{success}</div>
          <button type="button">
            <FaCircleCheck />
          </button>
        </div>
      </div> */}
      {wait ? <Loading /> : ""}
    </div>
  );
}

export default Login;
