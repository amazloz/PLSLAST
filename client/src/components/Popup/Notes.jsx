import React, { useEffect, useState } from "react";

import "./Notes.css";
import backimg from "../../media/back.png";
import deleteimg from "../../media/deleteimg.png";
import edit from "../../media/edit.png";

import Note from "./Note";
import { useGetNotesQuery } from "../../slices/notesApiSlice";
import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import { setProfiles } from "../../slices/profileSlice";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Notes = ({ closenotespopup }) => {
  const dispatch = useDispatch();
  const [updateuser] = useUpdateUserMutation();
  const { data: notes } = useGetNotesQuery();
  const { profileInfo } = useSelector((state) => state.profile);

  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState(null);

  useEffect(() => {
    if (profileInfo) {
      setSelectedInterest(profileInfo?.interest);
    }
  }, [profileInfo, profileInfo.interest]);

  if (!notes) {
    return <div>Loading...</div>;
  }
  const handleInterestClick = (interestName) => {
    setSelectedInterest(interestName);
  };

  const handleSaveClick = async () => {
    try {
      const res = await updateuser({
        id: profileInfo._id,
        interest: selectedInterest,
      }).unwrap();
      dispatch(setProfiles(res));
      console.log(selectedInterest);
      toast.success("Interest updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    closenotespopup(false);
  };

  return (
    <div className="notesbg">
      <div className="notescontainer">
        <div className="notesheader">
          <h1>Notes</h1>
        </div>
        <div className="notesbody">
          <div className="cls">
            <button className="back-btn" onClick={() => closenotespopup(false)}>
              <img src={backimg} alt="" />
            </button>
          </div>
          <div className="notelists">
            <div className="test">
              <h1>English new words</h1>
              <div className="notebutton_container">
                <button className="edit_button">
                  <img src={edit} alt="" />
                </button>
                <button className="delete_button">
                  <img src={deleteimg} alt="" />
                </button>
              </div>
            </div>
            <div className="test">
              <h1>Kor</h1>
              <div className="notebutton_container">
                <button className="edit_button">
                  <img src={edit} alt="" />
                </button>
                <button className="delete_button">
                  <img src={deleteimg} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="notesfooter">
          <button className="create-btn">+ create a note</button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
