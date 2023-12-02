import React from "react";
import { Link } from "react-router-dom";
import "./AfterNavbar.css";

const AfterNavbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Call App
      </Link>
      <div className="afternav">
        <Link to="/match" className="butn">
          Match
        </Link>
        <Link to="/userprofile" className="butn">
          Profile
        </Link>
        <Link to="/friendslist" className="butn">
          Friends
        </Link>
      </div>
    </nav>
  );
};

export default AfterNavbar;
