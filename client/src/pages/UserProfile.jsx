import "./UserProfile.css";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import boy from "../media/boy.png";
import girl from "../media/girl.png";
import NativeLanguagePopup from "../components/Popup/NativeLanguagePopup";
import UserInfoPopup from "../components/Popup/UserInfoPopup";
import LearningLanguagePopup from "../components/Popup/LearningLanguagePopup";
import InterestPopup from "../components/Popup/InterestPopup";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileDataQuery } from "../slices/usersApiSlice";
import { setProfiles } from "../slices/profileSlice";

const UserProfile = () => {
  const dispatch = useDispatch();

  const [openUserinfoPopup, setOpenUserinfoPopup] = useState(false);
  const [openNativeLanguagePopup, setOpenNativeLanguagePopup] = useState(false);
  const [openLearningLanguagePopup, setOpenLearningLanguagePopup] =
    useState(false);
  const [openInterestPopup, setOpenInterestPopup] = useState(false);

  const { data: infos } = useGetProfileDataQuery();
  useEffect(() => {
    dispatch(setProfiles(infos));
  }, [infos, dispatch]);
  const { profileInfo } = useSelector((state) => state.profile);
  if (!infos) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  const name = profileInfo?.name || "not found";
  const email = profileInfo?.email || "not found";
  const birthdate = profileInfo?.birthdate || "not found";
  const gender = profileInfo?.gender || "not found";
  const nativelanguage = profileInfo?.nativelanguage || "Choose language";
  const learninglanguage = profileInfo?.learninglanguage || "Choose language";
  const interest = profileInfo?.interest || "Choose interest";

  return (
    <div>
      <AfterNavbar />
      <div className="profile-container">
        <div className="avatar">
          <img src={gender === "male" ? boy : girl} alt="avatar" />
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
            <p>Username: {name}</p>
            <p>Email address: {email}</p>
            <p>Birth date: {birthdate}</p>
            <p>Gender: {gender}</p>
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
            <p>{nativelanguage}</p>
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
            <p>{learninglanguage}</p>
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
            <p>{interest}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
