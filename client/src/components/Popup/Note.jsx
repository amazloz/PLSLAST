import React from "react";
import "./Note.css";

const Note = ({ noteslist, isSelected, onClick }) => {
  return (
    <div className="notebtn-container">
      <button
        className={`notechoose-btn ${isSelected ? "selected" : ""}`}
        onClick={() => onClick()}>
        {noteslist.note_title}
      </button>
    </div>
  );
};

export default Note;
