import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import "./Match.css";
import { useSelector } from "react-redux";
import ReviewPopup from "../components/Popup/ReviewPopup";
import AddFriendPopup from "../components/Popup/AddFriendPopup";

const Match = () => {
  const { profileInfo } = useSelector((state) => state.profile);
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
      <div className="main-container">
        {openFriendPopup && (
          <AddFriendPopup closefriendpopup={setOpenFriendPopup} />
        )}
        {openReviewPopup && (
          <ReviewPopup closereviewpopup={setOpenReviewPopup} />
        )}

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
