// Room.jsx

import React, { useEffect, useRef } from "react";
import "./Room.css";
import boy from "../media/boy.png";
import girl from "../media/girl.png";
import ActionButtons from "../components/videoComponents/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { setcallInfo } from "../slices/callSlice";
import CountDown from "../components/videoComponents/CountDown";

const Room = () => {
  const dispatch = useDispatch();
  const callInfo = useSelector((state) => state.call.callInfo);
  const { profileInfo } = useSelector((state) => state.profile);
  const myFeedEl = useRef(null);

  const gender = profileInfo.gender;

  useEffect(() => {
    const fetchMedia = async () => {
      const constraints = {
        audio: "true",
      };

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        myFeedEl.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    fetchMedia();
  }, [callInfo.audio, dispatch]);

  return (
    <div className="roombody">
      <div className="roomcontrols">
        <ActionButtons feed={myFeedEl} />
        <div className="time">
          <CountDown seconds={600} />
        </div>
      </div>

      <div className="main">
        <div className="video">
          <img src={gender === "female" ? boy : girl} className="remotevideo" />
          <img src={gender === "male" ? boy : girl} className="localvideo" />
          {/*<video className="remotevideo" autoPlay playsInline></video>
          <video className="localvideo" ref={myFeedEl} autoPlay playsInline></video> */}
        </div>
      </div>
    </div>
  );
};

export default Room;
