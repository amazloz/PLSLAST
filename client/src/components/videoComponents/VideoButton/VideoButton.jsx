import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import novideo from "../../../media/novideo.png";
import yesvideo from "../../../media/yesvideo.png";

import "../../../pages/Room.css";

const VideoButton = ({ myFeedEl }) => {
  const callInfo = useSelector((state) => state.callInfo);

  const startStopVideo = () => {};

  return (
    <button className="otherbtn" onClick={startStopVideo}>
      <img
        src={callInfo?.video === "enabled" ? yesvideo : novideo}
        alt="video"
      />
    </button>
  );
};

export default VideoButton;
