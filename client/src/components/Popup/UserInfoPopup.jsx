import "./ProfilePopup.css";

const UserInfoPopup = ({ closeuserinfopopup }) => {
  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <button className="save-btn" onClick={() => closeuserinfopopup(false)}>
          X
        </button>
        <div className="popupheader">
          <h1>Edit your personal infos</h1>
        </div>
        <div className="popupbody">
          <p>Name:</p>
          <p>Email:</p>
        </div>
        <div className="popupfooter">
          <button
            className="save-btn"
            onClick={() => closeuserinfopopup(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPopup;
