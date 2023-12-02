import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
