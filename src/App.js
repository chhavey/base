import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from "./ThemeProvider";
import Upload from "./pages/Upload";
import ComingSoon from "./pages/comingSoon/ComingSoon";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/*" element={<ComingSoon />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
