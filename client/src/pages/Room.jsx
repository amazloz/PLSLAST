import React, { useEffect, useRef } from "react";
import "./Room.css";
import boy from "../media/boy.png";
import girl from "../media/girl.png";
import ActionButtons from "../components/videoComponents/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import CountDown from "../components/videoComponents/CountDown";
import createPeerConnection from "../utils/createPeerConnection";
import socketConnection from "../utils/socketConnection";
import { useSearchParams } from "react-router-dom";
import { setcallInfo } from "../slices/callSlice";

const Room = () => {
  const dispatch = useDispatch();
  const getParams = useSearchParams();
  const callInfo = useSelector((state) => state.call.callInfo);
  const { profileInfo } = useSelector((state) => state.profile);
  const [searchParams] = useSearchParams();
  const myFeedEl = useRef(null);
  const streams = {};
  const gender = profileInfo.gender;

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
        </div>
        <video className="remotevideos"></video>
        <video className="localvideos" autoPlay ref={myFeedEl}></video>
      </div>
    </div>
  );
};

export default Room;
