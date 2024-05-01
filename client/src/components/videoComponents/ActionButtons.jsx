import { useState, useEffect, useRef } from "react";
import HangUpButton from "./HangUpButton";
import VideoButton from "./VideoButton/VideoButton";
import AudioButton from "./AudioButton/AudioButton";
import { useSelector } from "react-redux";

import "../../pages/Room.css";
import novideo from "../../media/novideo.png";
import yesmic from "../../media/yesmic.png";
import endcall from "../../media/endcall.png";

const ActionButtons = ({ myFeedEl }) => {
  const menuButtons = useRef(null);

  return (
    <div id="menu-buttons" ref={menuButtons} className="roomcontrols">
      <div className="center justify-center text-end col-2">
        <HangUpButton className="endbtn" />
      </div>
      <AudioButton />
      <VideoButton />
    </div>
  );
};

export default ActionButtons;
