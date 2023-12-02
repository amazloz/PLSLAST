import "./ProfilePopup.css";

const LearningLanguagePopup = ({ closelearninglanguagepopup }) => {
  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <button
          className="save-btn"
          onClick={() => closelearninglanguagepopup(false)}>
          X
        </button>
        <div className="popupheader">
          <h1>Choose your learning language</h1>
        </div>
        <div className="popupbody">Languages</div>
        <div className="popupfooter">
          <button
            className="save-btn"
            onClick={() => closelearninglanguagepopup(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguagePopup;
