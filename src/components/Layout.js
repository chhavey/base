import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Upload from "../pages/Upload";
import ComingSoon from "../pages/ComingSoon";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-light-gray">
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/dashboard" element={<ComingSoon />} />
          <Route path="/invoice" element={<ComingSoon />} />
          <Route path="/schedule" element={<ComingSoon />} />
          <Route path="/calendar" element={<ComingSoon />} />
          <Route path="/notification" element={<ComingSoon />} />
          <Route path="/settings" element={<ComingSoon />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
