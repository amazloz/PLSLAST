import React, { useEffect, useRef, useState } from "react";
import "./Room.css";
//import ActionButtons from "../components/videoComponents/ActionButtons";
//import addStream from "../redux-elements/actions/addStream";
import { useDispatch, useSelector } from "react-redux";
//import createPeerConnection from "../webRTCutilities/createPeerConnection";
//import socketConnection from "../webRTCutilities/socketConnection";
//import updateCallStatus from "../redux-elements/actions/updateCallStatus";
//import { useSearchParams } from "react-router-dom";
//import axios from "axios";

const Room = () => {
  const dispatch = useDispatch();
  /* const callStatus = useSelector((state) => state.callStatus);
  const streams = useSelector((state) => state.streams);
  const [callInfos, setCallInfos] = useState({});
  const myFeedEl = useRef(null);
  const otherFeedEl = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const fetchDecodedToken = async () => {
      try {
        const resp = await axios.post("https://localhost:9000/validate-link", {
          token,
        });
        console.log(resp.data); // Assuming the decoded data is in resp.data
      } catch (error) {
        console.error("Error fetching or decoding token:", error);
      }
    };

    fetchDecodedToken();
  }, []);

  useEffect(() => {
    const fetchMedia = async () => {
      const constraints = {
        video: true,
        audio: true,
      };
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        dispatch(updateCallStatus("haveMedia", true));
        dispatch(addStream("localStream", stream));
        const { peerConnection, remoteStream } = await createPeerConnection();
        dispatch(addStream("remoteStream", remoteStream, peerConnection));
      } catch (err) {
        console.log(err);
      }
    };
    fetchMedia();
  }, []);

  useEffect(() => {
    const createOfferAsync = async () => {
      for (const s in streams) {
        if (s !== "localStream") {
          try {
            const pc = streams[s].peerConnection;
            const offer = await pc.createOffer();
            const token = searchParams.get("token");
            const socket = socketConnection(token);
            socket.emit("newOffer", { offer, callInfos });
          } catch (err) {
            console.log(err);
          }
        }
      }
      dispatch(updateCallStatus("haveCreatedOffer", true));
    };

    if (
      callStatus.audio === "enabled" &&
      callStatus.video === "enabled" &&
      !callStatus.haveCreatedOffer
    ) {
      createOfferAsync();
    }
  }, [callStatus.audio, callStatus.video, callStatus.haveCreatedOffer]);
*/
  return (
    <div className="roombody">
      <div className="roomcontrols"></div>
      <div className="main">
        <div className="you">
          <video
            id="remotevideo"
            //ref={otherFeedEl}
            autoPlay
            controls
            playsInline></video>
        </div>
        <div className="me">
          <video
            id="localvideo"
            //ref={myFeedEl}
            autoPlay
            controls
            playsInline></video>
        </div>
      </div>
    </div>
  );
};

export default Room;
