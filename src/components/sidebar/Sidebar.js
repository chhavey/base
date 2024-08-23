import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as CollapseIcon } from "../../assets/expand.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Dashboard } from "../../assets/dashboard.svg";
import { ReactComponent as Invoice } from "../../assets/Invoice.svg";
import { ReactComponent as Schedule } from "../../assets/schedule.svg";
import { ReactComponent as Settings } from "../../assets/setting.svg";
import { ReactComponent as Upload } from "../../assets/upload.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import ThemeButton from "../../components/button/ThemeButton";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`flex flex-col h-screen ${
        collapsed ? "w-[10%]" : "w-[22%]"
      } sidebar transition-all duration-500`}
    >
      <div className="flex items-center justify-between px-6 my-10">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
          <span
            className={`font-montserrat text-xl font-bold ${
              collapsed ? "hidden" : "block"
            }`}
          >
            Base
          </span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:block text-gray-400"
        >
          <CollapseIcon />
        </button>
      </div>

      <nav className="flex-1 flex flex-col">
        <ul className="flex-1">
          {[
            { label: "Dashboard", icon: <Dashboard /> },
            { label: "Upload", icon: <Upload /> },
            { label: "Invoice", icon: <Invoice /> },
            { label: "Schedule", icon: <Schedule /> },
            { label: "Calendar", icon: <Calendar /> },
            { label: "Notification", icon: <Notification /> },
            { label: "Settings", icon: <Settings /> },
          ].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(`/${item.label.toLowerCase()}`)}
                className={`w-full font-nunito flex items-center gap-4 text-left pl-6 py-4 text-gray-400 transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#ACA9FF] hover:to-transparent hover:text-[#7975FF] ${
                  window.location.pathname === `/${item.label.toLowerCase()}`
                    ? "bg-gradient-to-r from-[#ACA9FF] to-transparent text-[#7975FF]"
                    : ""
                }`}
              >
                <span className="w-6 h-6">{item.icon}</span>
                <span className={`${collapsed ? "hidden" : "block"}`}>
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex ml-6 my-6">
          <ThemeButton />{" "}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
