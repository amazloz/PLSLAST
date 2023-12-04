import React from "react";
import "./Choose.css";

const Interests = ({ interestslist, isSelected, onClick }) => {
  return (
    <div className="btn-container">
      <button
        className={`choose-btn ${isSelected ? "selected" : ""}`}
        onClick={() => onClick(interestslist.interest_name)}>
        {interestslist.interest_name}
      </button>
    </div>
  );
};

export default Interests;
