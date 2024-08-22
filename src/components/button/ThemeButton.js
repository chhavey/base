import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center justify-between gap-1 p-1 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
        theme === "light" ? "bg-toggle-light" : "bg-toggle-dark"
      }`}
    >
      <div
        className={`flex items-center justify-center p-1 rounded-full transition-all duration-300 ease-in-out ${
          theme === "light" ? "bg-white text-black" : "text-white"
        }`}
      >
        <FiSun className="w-5 h-5" />
      </div>

      <div
        className={`flex items-center justify-center p-1 rounded-full transition-all duration-300 ease-in-out ${
          theme === "dark" ? "bg-black text-white" : "text-black"
        }`}
      >
        <FiMoon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ThemeButton;
