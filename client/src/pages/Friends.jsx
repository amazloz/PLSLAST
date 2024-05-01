import React, { useState } from "react";
import AfterNavbar from "../components/Navbar/AfterNavbar";
import "./Friends.css";
import Notes from "../components/Popup/Notes";
import deleteimg from "../media/deleteimg.png";
import videocall from "../media/videocall.png";
import NotesButton from "../components/buttons/NotesButton";

const Friends = () => {
  const [openUserinfoPopup, setOpenUserinfoPopup] = useState(false);

  return (
    <div>
      <AfterNavbar />

      <div className="list-container">
        <div className="headers">
          <h1>Friends List</h1>
          <div className="funderline"></div>
        </div>
        <div className="friend_titles">
          <p>Username</p>
          <p>Controls</p>
        </div>
        <div className="lists">
          <div className="onefriend">
            <div className="usernames">
              <p>test</p>
            </div>
            <div className="friendcontrolls">
              <button className="friend_button">
                <img src={videocall} alt="" />
              </button>
              <button className="friend_button">
                <img src={deleteimg} alt="" />
              </button>
            </div>
          </div>
          <div className="onefriend">
            <div className="usernames">
              <p>ifeellikeimgoku</p>
            </div>
            <div className="friendcontrolls">
              <button className="friend_button">
                <img src={videocall} alt="" />
              </button>
              <button className="friend_button">
                <img src={deleteimg} alt="" />
              </button>
            </div>
          </div>
          <div className="onefriend">
            <div className="usernames">
              <p>goku</p>
            </div>
            <div className="friendcontrolls">
              <button className="friend_button">
                <img src={videocall} alt="" />
              </button>
              <button className="friend_button">
                <img src={deleteimg} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <NotesButton />
    </div>
  );
};

export default Friends;
