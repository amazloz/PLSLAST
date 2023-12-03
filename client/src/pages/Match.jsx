import React from "react";
import { Link } from "react-router-dom";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import "./Match.css";

const Match = () => {
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
            <p>Navtive Language: Mongolian(5)</p>
          </div>
          <div className="languageinfos">
            <p>Learning Language: English(3)</p>
          </div>
          <div className="languageinfos">
            <p>Interest: Coffee</p>
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
