import React, { useState } from "react";

import { setcallInfo } from "../../slices/callSlice";
import "./FriendPopup.css";
import { useDispatch } from "react-redux";

const AddFriendPopup = ({ closefriendpopup }) => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState({
    question1: null,
  });

  const handleOptionClick = (question, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [question]: option,
    });
    dispatch(setcallInfo({ current: "idle" }));
    closefriendpopup(false);
  };

  const handleSaveClick = () => {
    dispatch(setcallInfo({ current: "idle" }));
    closefriendpopup(false);

    console.log("Save button clicked");
    console.log("Selected Options:", selectedOptions);
  };

  return (
    <div className="popupbg">
      <div className="fpopup-container">
        <div className="fpopup-header"></div>
        <div className="fpopup-body">
          <div className="fquestions">
            <div className="fq">
              <p>Do you want to add this person as a friend?</p>
            </div>
          </div>
        </div>
        <div className="fpopup-footer">
          <div className="fqbtn">
            <button
              className={`fquestionno-btn ${
                selectedOptions.question1 === "No" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("question1", "No")}>
              No
            </button>
            <button
              className={`fquestionyes-btn ${
                selectedOptions.question1 === "Yes" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("question1", "Yes")}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriendPopup;
