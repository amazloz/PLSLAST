import React from "react";
import "./Choose.css";

const Interests = ({ interestslist }) => {
  return (
    <div className="btn-container">
      <button className="choose-btn"> {interestslist.interest_name} </button>
    </div>
  );
};

export default Interests;
