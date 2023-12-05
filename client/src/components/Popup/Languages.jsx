import React from "react";
import "./Choose.css";

const Languages = ({ languageslist, isSelected, onClick }) => {
  return (
    <div className="btn-container">
      <button
        className={`choose-btn ${isSelected ? "selected" : ""}`}
        onClick={() => onClick(languageslist.language_name)}>
        {languageslist.language_name}
      </button>
    </div>
  );
};

export default Languages;
