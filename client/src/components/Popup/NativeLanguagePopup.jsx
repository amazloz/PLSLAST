import "./ProfilePopup.css";

const NativeLanguagePopup = ({ closenativelanguagepopup }) => {
  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <button
          className="save-btn"
          onClick={() => closenativelanguagepopup(false)}>
          X
        </button>
        <div className="popupheader">
          <h1>Choose your native language</h1>
        </div>
        <div className="popupbody">Languages</div>
        <div className="popupfooter">
          <button
            className="save-btn"
            onClick={() => closenativelanguagepopup(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NativeLanguagePopup;
