// import React from "react";
// import Login from "./pages/Login";
// import { ThemeProvider } from "./ThemeProvider";

// function App() {
//   return (
//     <ThemeProvider>
//       <div>
//         <Login />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload"; // Create this component
import { ThemeProvider } from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
