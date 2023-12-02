import "./UserProfile.css";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import profilepic from "../media/profilepic.png";
import NativeLanguagePopup from "../components/Popup/NativeLanguagePopup";
import UserInfoPopup from "../components/Popup/UserInfoPopup";
import LearningLanguagePopup from "../components/Popup/LearningLanguagePopup";
import InterestPopup from "../components/Popup/InterestPopup";
import { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [openUserinfoPopup, setOpenUserinfoPopup] = useState(false);
  const [openNativeLanguagePopup, setOpenNativeLanguagePopup] = useState(false);
  const [openLearningLanguagePopup, setOpenLearningLanguagePopup] =
    useState(false);
  const [openInterestPopup, setOpenInterestPopup] = useState(false);

  const [interest, setInterest] = useState({});

  useEffect(() => {
    const fetchInterest = async () => {
      const { data } = await axios.get("/api/interests");
      setInterest(data);
    };
    fetchInterest();
  }, []);

  return (
    <div>
      <AfterNavbar />
      <div className="profile-container">
        <div className="avatar">
          <img src={profilepic} alt="avatar" />
          <button className="change">Change profile picture</button>
        </div>
        <div className="info-container">
          <div className="userinfo">
            <button
              className="edit"
              onClick={() => {
                setOpenUserinfoPopup(true);
              }}>
              Edit user info
            </button>
            {openUserinfoPopup && (
              <UserInfoPopup closeuserinfopopup={setOpenUserinfoPopup} />
            )}
            <p>Username: test</p>
            <p>Email address: test@gmail.com</p>
            <p>Birth date: mm/dd/yyyy </p>
          </div>
          <div className="languageinfo">
            <button
              className="edit"
              onClick={() => {
                setOpenNativeLanguagePopup(true);
              }}>
              Edit Native language
            </button>
            {openNativeLanguagePopup && (
              <NativeLanguagePopup
                closenativelanguagepopup={setOpenNativeLanguagePopup}
              />
            )}
            <p>Mongolia(5)</p>
          </div>
          <div className="languageinfo">
            <button
              className="edit"
              onClick={() => {
                setOpenLearningLanguagePopup(true);
              }}>
              Edit Learning language
            </button>
            {openLearningLanguagePopup && (
              <LearningLanguagePopup
                closelearninglanguagepopup={setOpenLearningLanguagePopup}
              />
            )}
            <p>English(3)</p>
          </div>
          <div className="languageinfo">
            <button
              className="edit"
              onClick={() => {
                setOpenInterestPopup(true);
              }}>
              Edit interest
            </button>
            {openInterestPopup && (
              <InterestPopup closeinterestpopup={setOpenInterestPopup} />
            )}
            <p>Coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
