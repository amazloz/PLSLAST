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
          <h1>Хамтрагчаа олох</h1>
          <h1>Яриа үүсгэх</h1>
          <h1>Найзууд болох</h1>
        </div>
        <div className="longunderline"></div>
        <div className="infocontainer">
          <div className="languageinfos">
            <p>Төрөлх хэл: {nativelanguage}</p>
          </div>
          <div className="languageinfos">
            <p>Сурч буй хэл: {learninglanguage}</p>
          </div>
          <div className="languageinfos">
            <p>Хобби: {interest}</p>
          </div>
          <Link to="/room" className="mbtn">
            Дуудлага эхлүүлэх
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Match;
