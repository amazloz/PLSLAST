import "./UserProfile.css";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import boy from "../media/boy.png";
import girl from "../media/girl.png";
import NativeLanguagePopup from "../components/Popup/NativeLanguagePopup";
import UserInfoPopup from "../components/Popup/UserInfoPopup";
import LearningLanguagePopup from "../components/Popup/LearningLanguagePopup";
import InterestPopup from "../components/Popup/InterestPopup";
import NotesButton from "../components/buttons/NotesButton";

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
  const nativelanguage = profileInfo?.nativelanguage || "not found";
  const learninglanguage = profileInfo?.learninglanguage || "not found";
  const interest = profileInfo?.interest || "not found";

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
            <p>
              Username: <b>{name}</b>{" "}
            </p>
            <p>
              Email address: <b>{email}</b>{" "}
            </p>
            <p>
              Brith date: <b>{birthdate}</b>{" "}
            </p>
            <p>
              Gender: <b>{gender}</b>
            </p>
          </div>
          <div className="languageinfo">
            <button
              className="edit"
              onClick={() => {
                setOpenNativeLanguagePopup(true);
              }}>
              + Native language
            </button>
            {openNativeLanguagePopup && (
              <NativeLanguagePopup
                closenativelanguagepopup={setOpenNativeLanguagePopup}
              />
            )}
            <p>
              {" "}
              <b>{nativelanguage}</b>{" "}
            </p>
          </div>
          <div className="languageinfo">
            <button
              className="edit"
              onClick={() => {
                setOpenLearningLanguagePopup(true);
              }}>
              + Learning language
            </button>
            {openLearningLanguagePopup && (
              <LearningLanguagePopup
                closelearninglanguagepopup={setOpenLearningLanguagePopup}
              />
            )}
            <p>
              <b>{learninglanguage}</b>
            </p>
          </div>
          <div className="languageinfo">
            <button
              className="edit"
              onClick={() => {
                setOpenInterestPopup(true);
              }}>
              + Hobby
            </button>
            {openInterestPopup && (
              <InterestPopup closeinterestpopup={setOpenInterestPopup} />
            )}
            <p>
              <b>{interest}</b>
            </p>
          </div>
        </div>
      </div>
      <NotesButton />
    </div>
  );
};

export default UserProfile;
