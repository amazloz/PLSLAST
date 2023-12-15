import React, { useState } from "react";

import { setcallInfo } from "../../slices/callSlice";
import "./QuestionPopup.css";
import { useDispatch } from "react-redux";

const ReviewPopup = ({ closereviewpopup }) => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState({
    question1: null,
    question2: null,
  });

  const handleOptionClick = (question, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [question]: option,
    });
  };

  const handleSaveClick = () => {
    closereviewpopup(false);

    console.log("Save button clicked");
    console.log("Selected Options:", selectedOptions);
  };

  return (
    <div className="popupbg">
      <div className="popup-container">
        <div className="popup-header">
          <h1>Review</h1>
        </div>
        <div className="popup-body">
          <div className="questions">
            <div className="q">
              <p>Did this person use inappropriate words?</p>
            </div>
            <div className="qbtn">
              <button
                className={`save-btn ${
                  selectedOptions.question1 === "No" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("question1", "No")}>
                No
              </button>
              <button
                className={`save-btn ${
                  selectedOptions.question1 === "Yes" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("question1", "Yes")}>
                Yes
              </button>
            </div>
          </div>
          <div className="questions">
            <div className="q">
              <p>Did this person look like over 18?</p>
            </div>
            <div className="qbtn">
              <button
                className={`save-btn ${
                  selectedOptions.question2 === "No" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("question2", "No")}>
                No
              </button>
              <button
                className={`save-btn ${
                  selectedOptions.question2 === "Yes" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("question2", "Yes")}>
                Yes
              </button>
            </div>
          </div>
        </div>
        <div className="popup-footer">
          <button className="save-btn" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPopup;
