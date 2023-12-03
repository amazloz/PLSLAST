import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Match from "./pages/Match";
import Friends from "./pages/Friends";
import Room from "./pages/Room";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/match" element={<Match />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/friendslist" element={<Friends />} />
        <Route path="/room" element={<Room />} />
      </Routes>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </Router>
  );
};

export default App;
