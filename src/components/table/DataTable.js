import React, { useState } from "react";
import { ReactComponent as Remove } from "../../assets/remove.svg";
import Dropdown from "../dropdown/Dropdown";

function DataTable({ headers, fileData }) {
  const [selectedTags, setSelectedTags] = useState({});

  const handleTagSelect = (rowIndex, tag) => {
    setSelectedTags((prev) => {
      const tagsForRow = prev[rowIndex] || [];
      if (!tagsForRow.includes(tag)) {
        return {
          ...prev,
          [rowIndex]: [...tagsForRow, tag],
        };
      }
      return prev;
    });
  };

  const handleTagRemove = (rowIndex, tag) => {
    setSelectedTags((prev) => ({
      ...prev,
      [rowIndex]: prev[rowIndex].filter((t) => t !== tag),
    }));
  };

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="overflow-x-auto table px-4 py-2 rounded-lg">
      <table className="w-full font-figtree text-sm">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 font-medium text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fileData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="tableRow tableBorder"
              style={{ marginBottom: "10px" }}
            >
              <td className="px-4 py-4">{formatNumber(row[0])}</td>
              <td className="px-4 py-4">
                <a href={row[1]} className="text-[#75A3FF] hover:underline">
                  {row[1]}
                </a>
              </td>
              <td className="px-4 py-4">{row[2]}</td>
              <td className="">
                <Dropdown
                  options={row[3]?.split(",").map((tag) => tag.trim())}
                  onSelect={(tag) => handleTagSelect(rowIndex, tag)}
                />
              </td>
              <td className="flex flex-wrap gap-2 px-4 py-2">
                {selectedTags[rowIndex]?.map((tag, i) => (
                  <span
                    key={i}
                    className="tags inline-block bg-primary-dark px-2 py-1 rounded-md text-sm mr-2 uppercase"
                  >
                    {tag}
                    <button
                      onClick={() => handleTagRemove(rowIndex, tag)}
                      className="ml-2 font-bold"
                    >
                      <Remove />
                    </button>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
