import React from "react";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import "./Friends.css";

const Friends = () => {
  return (
    <div>
      <AfterNavbar />
      <div className="friendstitle">
        <h1>Friends List</h1>
      </div>
      <div className="longunderline"></div>
      <div className="list-container">
        <div className="headers">
          <h2>Username</h2>
          <h2>Controls</h2>
        </div>
        <div className="longunderline"></div>
        <div className="lists">
          <div className="usernames">
            <p>Username</p>
          </div>
          <div className="controls">
            <button className="delete">X</button>
            <button className="delete">!</button>
          </div>
        </div>
        <div className="lists">
          <div className="usernames">
            <p>Username</p>
          </div>
          <div className="controls">
            <button className="delete">X</button>
            <button className="delete">!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
