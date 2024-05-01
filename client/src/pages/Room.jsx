import React, { useEffect, useRef } from "react";
import "./Room.css";
import boy from "../media/boy.png";
import girl from "../media/girl.png";
import nomic from "../media/nomic.png";
import yesmic from "../media/yesmic.png";
import novideo from "../media/novideo.png";
import yesvideo from "../media/yesvideo.png";
import hangup from "../media/endcall.png";

import { useDispatch, useSelector } from "react-redux";
import CountDown from "../components/videoComponents/CountDown";
import createPeerConnection from "../utils/createPeerConnection";
import socketConnection from "../utils/socketConnection";
import { useSearchParams, useNavigate } from "react-router-dom";
import { setcallInfo } from "../slices/callSlice";
import Chat from "../components/Chat/Chat";

import NotesButton from "../components/buttons/NotesButton";

const Room = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getParams = useSearchParams();
  const callInfo = useSelector((state) => state.call.callInfo);
  const { profileInfo } = useSelector((state) => state.profile);
  const [searchParams] = useSearchParams();
  const myFeedEl = useRef(null);
  const streams = {};
  const gender = profileInfo.gender;

  const hangupCall = () => {
    dispatch(setcallInfo({ current: "complete" }));
    navigate("/match");
  };

  useEffect(() => {
    const fetchMedia = async () => {
      const constraints = {
        audio: true,
      };

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        myFeedEl.current.srcObject = stream;
        const { peerConnection, remoteStream } = await createPeerConnection();
        streams.localStream = { peerConnection, remoteStream };
      } catch (err) {
        console.log(err);
      }
    };
    fetchMedia();
  }, [callInfo.audio, dispatch]);

  useEffect(() => {
    const createOfferAsync = async () => {
      for (const s in streams) {
        if (s !== "localStream") {
          try {
            const pc = streams[s].peerConnection;
            const offer = await pc.createOffer();
            const token = searchParams.get("token");
            const socket = socketConnection(token);
            socket.emit("newOffer", { offer, callInfo });
          } catch (err) {
            console.log(err);
          }
        }
      }
      dispatch(setcallInfo("haveCreatedOffer", true));
    };

    if (callInfo.audio === "true" && !callInfo.haveCreatedOffer) {
      createOfferAsync();
    }
  }, [callInfo.audio, callInfo.haveCreatedOffer, dispatch, searchParams]);

  return (
    <div className="roombody">
      <div className="contents">
        <div className="videofeed">
          <div className="localvideo">
            <img src={gender === "male" ? boy : girl} />
          </div>
          <div className="remotevideo">
            <img src={gender === "female" ? boy : girl} />
          </div>
        </div>
        <div className="chatbox">
          <Chat></Chat>
        </div>
      </div>

      <div className="main">
        <div className="video"></div>
        <video className="remotevideos"></video>
        <video className="localvideos" autoPlay ref={myFeedEl}></video>
      </div>
      <div className="roomcontrols">
        <div className="roombuttons">
          <button onClick={hangupCall} className="endbtn">
            <img src={hangup} alt="screenshare" />
          </button>
          <button className="otherbtn">
            <img src={yesmic} />
          </button>
          <button className="otherbtn">
            <img src={yesvideo} />
          </button>
        </div>

        <div className="time">
          <CountDown seconds={600} />
        </div>
        <NotesButton />
      </div>
    </div>
  );
};

export default Room;
