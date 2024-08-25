import React from "react";

function DataTable({ headers, fileData }) {
  return (
    <table className="border border-gray-300 w-full text-sm">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {fileData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
