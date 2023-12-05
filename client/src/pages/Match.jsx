import React from "react";
import { Link } from "react-router-dom";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import "./Match.css";
import { useSelector } from "react-redux";

const Match = () => {
  const { profileInfo } = useSelector((state) => state.profile);
  const nativelanguage = profileInfo?.nativelanguage || "not found";
  const learninglanguage = profileInfo?.learninglanguage || "not found";
  const interest = profileInfo?.interest || "not found";
  return (
    <div>
      <AfterNavbar />
      <div className="main-container">
        <div className="motiv-title">
          <h1>Find your partner</h1>
          <h1>Talk with them</h1>
          <h1>Become friends</h1>
        </div>
        <div className="longunderline"></div>
        <div className="infocontainer">
          <div className="languageinfos">
            <p>Navtive Language: {nativelanguage}</p>
          </div>
          <div className="languageinfos">
            <p>Learning Language: {learninglanguage}</p>
          </div>
          <div className="languageinfos">
            <p>Interest: {interest}</p>
          </div>
          <Link to="/room" className="mbtn">
            Start Matching ^^
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Match;
