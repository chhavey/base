import React, { useState } from "react";
import "./ComingSoon.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { ReactComponent as HamBurger } from "../../assets/hamburger.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";

function ComingSoon() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-grow flex flex-col">
        <nav className="navbar p-4 flex justify-between md:justify-end items-center">
          <div className="flex md:hidden items-center space-x-4">
            <HamBurger
              className="cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="font-nunito text-xl">Base</span>
            </div>
          </div>
          {/* <div className="hidden md:flex font-figtree font-semibold text-lg">
            Upload CSV
          </div> */}
          <div className="flex items-center space-x-4">
            <Bell className="cursor-pointer" />
            <Profile className="cursor-pointer" />
          </div>
        </nav>

        <div className="flex-grow flex items-center justify-center">
          <h1 className="content text-center font-montserrat text-semibold text-lg">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
