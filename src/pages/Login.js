import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Logo2 } from "../assets/white-logo.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Google } from "../assets/google.svg";
import ThemeButton from "../components/button/ThemeButton";
import { FaApple } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillDiscord,
} from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    navigate("/upload");
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block lg:w-1/2 bg-primary-dark rounded-xl ml-4 my-3 p-8">
        {/* Left Side Content */}
        <div className="flex flex-col m-auto rounded-xl bg-primary-light h-full relative">
          <div className="flex items-center m-6 gap-2 py-2 px-3 rounded-3xl bg-white w-fit">
            <Logo />
            <span className="font-montserrat text-xl font-bold text-black">
              Base
            </span>
          </div>

          <div className="font-lato font-bold text-5xl mx-6 text-white">
            Generate detailed <br /> reports with just one <br /> click
          </div>

          <div className="flex justify-between items-end h-full">
            <div className="flex ml-6 my-6">
              <ThemeButton />{" "}
            </div>
            <User className="absolute bottom-0 right-0 w-1/2 h-auto 2xl:w-full" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Right Side Content */}
        <header className="flex items-center bg-primary-dark p-4 text-[#fafafb] font-nunito text-xl w-full lg:hidden">
          <Logo2 className="w-8 h-8 mr-2" />
          <span>Base</span>
        </header>
        <div className="flex flex-col flex-1 items-center justify-center h-full">
          <div className="flex flex-col justify-center w-[80%] mb-6">
            <div className="font-montserrat font-bold text-2xl lg:text-3xl mb-2">
              Sign In
            </div>
            <p className="font-lato font-normal text-md">
              Sign in to your account
            </p>
          </div>
          <div className="flex justify-between gap-8 text-center items-center w-[80%] mb-8 font-montserrat text-[#858585] font-semibold text-sm">
            <div
              onClick={() => navigate("/upload")}
              className="signin-form flex items-center justify-center gap-4 cursor-pointer p-2 rounded-lg w-full"
            >
              <Google /> Sign in with Google
            </div>
            <div
              onClick={() => navigate("/upload")}
              className="signin-form flex items-center justify-center gap-4 cursor-pointer p-2 rounded-lg w-full"
            >
              <FaApple size={20} /> Sign in with Apple
            </div>
          </div>

          <form
            className="signin-form flex flex-col gap-2 justify-center w-[80%] p-6 rounded-xl font-lato font-bold"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <div className="mb-4 flex flex-col gap-2">
              <label className="block mb-1 " htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signin-input rounded-lg w-full px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label className="block mb-1 " htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signin-input rounded-lg w-full px-4 py-2 outline-none"
              />
            </div>
            {/* eslint-disable-next-line */}
            <a href="#" className="block text-primary-blue font-normal mb-4">
              Forgot password?
            </a>
            <button
              type="submit"
              className="signin-btn bg-primary-dark px-4 py-2 rounded-lg w-full"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-[#858585] w-[80%] flex flex-col lg:flex-row gap-4 lg:gap-1 justify-center items-center">
            Don't have an account?
            {/* eslint-disable-next-line */}
            <a href="#" className="text-primary-blue">
              Register here
            </a>
          </p>
          <div className="flex gap-4 mt-6 lg:mt-12">
            {/* eslint-disable-next-line */}
            <a href="/" className="text-[#999999]">
              <AiFillGithub size={40} />
            </a>
            {/* eslint-disable-next-line */}
            <a href="/" className="text-[#999999]">
              <AiFillTwitterCircle size={40} />
            </a>
            {/* eslint-disable-next-line */}
            <a href="/" className="text-[#999999]">
              <AiFillLinkedin size={40} />
            </a>
            {/* eslint-disable-next-line */}
            <a href="/" className="text-[#999999]">
              <AiFillDiscord size={40} />
            </a>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
