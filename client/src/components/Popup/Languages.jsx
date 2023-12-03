import React from "react";
import "./Choose.css";

const Languages = ({ languageslist }) => {
  return (
    <div className="btn-container">
      <button className="choose-btn"> {languageslist.language_name} </button>
    </div>
  );
};

export default Languages;
