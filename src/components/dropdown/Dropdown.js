import React, { useState } from "react";
import { ReactComponent as Down } from "../../assets/down-arrow.svg";

function Dropdown({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left font-figtree">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="addTag inline-flex justify-between items-center gap-2 w-40 px-4 py-2 text-sm font-medium rounded-md shadow-sm"
        >
          {selectedOption || "Select Tags"}
          <Down />
        </button>
      </div>

      {isOpen && (
        <div className="dropdown absolute right-0 z-10 w-full mt-2 rounded-3xl shadow-lg max-h-48 w-40 overflow-y-auto scrollbar-hidden">
          <div className="p-2">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="tag block w-full px-4 py-2 text-left text-sm rounded-md"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
