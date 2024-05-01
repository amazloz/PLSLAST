import React, { useState } from "react";
import Notes from "../Popup/Notes";
import noteimg from "../../media/note.png";
import "./NotesButton.css";

const NotesButton = () => {
  const [openUserinfoPopup, setOpenUserinfoPopup] = useState(false);

  return (
    <div className="open-body">
      <button
        className="open"
        onClick={() => {
          setOpenUserinfoPopup(true);
        }}>
        <img src={noteimg} alt="" />
      </button>
      {openUserinfoPopup && <Notes closenotespopup={setOpenUserinfoPopup} />}
    </div>
  );
};

export default NotesButton;
