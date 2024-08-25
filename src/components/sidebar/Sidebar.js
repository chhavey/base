import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as UploadIcon } from "../../assets/upload.svg";
import { ReactComponent as SettingsIcon } from "../../assets/setting.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/schedule.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/Invoice.svg";
import { ReactComponent as CollapseIcon } from "../../assets/expand.svg";
import ThemeButton from "../../components/button/ThemeButton";

const Sidebar = ({ isOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Close the sidebar when a menu item is clicked
    if (isOpen) {
      onClose();
    }
  };

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Upload", icon: <UploadIcon /> },
    { label: "Invoice", icon: <InvoiceIcon /> },
    { label: "Schedule", icon: <ScheduleIcon /> },
    { label: "Calendar", icon: <CalendarIcon /> },
    { label: "Notification", icon: <NotificationIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <div
      className={`flex flex-col fixed top-0 left-0 h-screen transition-transform ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${
        collapsed ? "md:w-[10%]" : "md:w-[22%]"
      } md:relative md:translate-x-0  w-full sidebar z-20 `}
      style={{ transition: "transform 0.5s, width 0.5s" }}
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
        <CloseIcon className="cursor-pointer md:hidden" onClick={onClose} />
      </div>

      <nav className="flex-1 flex flex-col">
        <ul className="flex-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(`/${item.label.toLowerCase()}`)}
                className={`w-full font-nunito flex items-center gap-4 text-left pl-6 py-4 transition-colors duration-300 ${
                  window.location.pathname === `/${item.label.toLowerCase()}`
                    ? "bg-gradient-to-r from-[#ACA9FF] to-transparent text-[#7975FF]"
                    : "text-gray-400 hover:text-[#7975FF]"
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
          <ThemeButton />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
