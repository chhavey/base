import React, { useState, useRef } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as HamBurger } from "../assets/hamburger.svg";
import { ReactComponent as Bell } from "../assets/bell.svg";
import { ReactComponent as Excel } from "../assets/excel.svg";
import { ReactComponent as UploadIcon } from "../assets/upload-icon.svg";
import * as XLSX from "xlsx";
import DataTable from "../components/table/DataTable";
import Spinner from "@atlaskit/spinner";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "../components/sidebar/Sidebar";

function Upload() {
  const [fileData, setFileData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileData([]);
    setHeaders([]);
    fileInputRef.current.value = null;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
        "text/csv",
      ];

      if (!validTypes.includes(file.type)) {
        toast.error("Please upload a valid Excel file");
        setSelectedFile(null);
        fileInputRef.current.value = null;
        return;
      }

      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    if (!selectedFile) {
      toast.error("Please select a file before uploading");
      return;
    }

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const headerRow = jsonData[0];
      const rows = jsonData.slice(1);

      setTimeout(() => {
        setHeaders(headerRow);
        setFileData(rows);
        setIsLoading(false);
      }, 3000);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-grow flex flex-col h-full overflow-y-auto">
        <nav className="navbar p-4 flex justify-between items-center">
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
          <div className="hidden md:flex font-figtree font-semibold text-lg">
            Upload CSV
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="cursor-pointer" />
            <Profile className="cursor-pointer" />
          </div>
        </nav>

        <div className="flex items-center justify-center flex-grow">
          <div className="sidebar flex flex-col items-center justify-center gap-4 my-24 p-4 w-1/2 rounded-md">
            <div className="flex flex-col justify-center items-center gap-3 border border-dashed w-full rounded-md py-16 font-figtree text-sm">
              <Excel />
              {selectedFile ? (
                <div className="text-center">
                  <p className="text-[#999ca0] mb-2">{selectedFile.name}</p>
                  <p
                    className="text-[#d33030] cursor-pointer"
                    onClick={handleRemoveFile}
                  >
                    Remove
                  </p>
                </div>
              ) : (
                <>
                  <p className="hidden md:block text-light text-gray-400 text-center">
                    Drop your excel sheet here or
                    <span
                      className="text-primary-dark cursor-pointer"
                      onClick={handleBrowseClick}
                    >
                      {" "}
                      browse
                    </span>
                  </p>
                  <p className="block md:hidden text-light text-gray-400 text-center">
                    Upload your excel sheet
                    <span
                      className="text-primary-dark cursor-pointer"
                      onClick={handleBrowseClick}
                    >
                      {" "}
                      here
                    </span>
                  </p>
                </>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            <div
              className={`buttons bg-primary-dark flex items-center justify-center gap-2 w-full font-figtree text-sm p-4 rounded-md cursor-pointer ${
                fileData.length > 0 ? "opacity-40" : ""
              }`}
              onClick={handleUploadClick}
            >
              {isLoading ? (
                <Spinner
                  interactionName="load"
                  label="Loading"
                  size={"medium"}
                  appearance="white"
                />
              ) : (
                <>
                  <UploadIcon />
                  Upload
                </>
              )}
            </div>
          </div>
        </div>

        {fileData.length > 0 && (
          <div className="flex flex-col gap-4 p-8 mt-8 font-figtree">
            <h3 className="text-lg font-semibold mb-4">Uploads</h3>
            <DataTable headers={headers} fileData={fileData} />
          </div>
        )}

        <Toaster />
      </div>
    </div>
  );
}

export default Upload;
