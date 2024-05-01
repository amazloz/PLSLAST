import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import "./Match.css";
import { useSelector } from "react-redux";
import ReviewPopup from "../components/Popup/ReviewPopup";
import AddFriendPopup from "../components/Popup/AddFriendPopup";
import NotesButton from "../components/buttons/NotesButton";

const Match = () => {
  const { profileInfo } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const { callInfo } = useSelector((state) => state.call);
  const [openReviewPopup, setOpenReviewPopup] = useState(false);
  const [openFriendPopup, setOpenFriendPopup] = useState(false);

  const nativelanguage = profileInfo?.nativelanguage || "not found";
  const learninglanguage = profileInfo?.learninglanguage || "not found";
  const interest = profileInfo?.interest || "not found";

  useEffect(() => {
    if (callInfo.current === "complete") {
      setOpenFriendPopup(true);
      setOpenReviewPopup(true);
    }
  }, [callInfo.current]);

  return (
    <div>
      <AfterNavbar />
      <div className="match-container">
        {openFriendPopup && (
          <AddFriendPopup closefriendpopup={setOpenFriendPopup} />
        )}
        {openReviewPopup && (
          <ReviewPopup closereviewpopup={setOpenReviewPopup} />
        )}

        <div className="title-container">
          <div className="titles">
            <p>Find your partner</p>
            <p>Talk with them</p>
            <p>Become friends</p>
          </div>
          <div className="match-underline"></div>
        </div>
        <div className="info-box">
          <div className="infos">
            <p>Native Language: {nativelanguage}</p>
          </div>
          <div className="infos">
            <p>Learning Language: {learninglanguage}</p>
          </div>
          <div className="infos">
            <p>Interests: {interest}</p>
          </div>
        </div>
        <Link to="/load" className="brown big">
          Start Matching
        </Link>
      </div>
      <NotesButton />
    </div>
  );
};

export default Match;
