import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { ThemeProvider } from "./ThemeProvider";
import Upload from "./pages/Upload";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/*" element={<Layout />} /> */}
          <Route path="/*" element={<Upload />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
