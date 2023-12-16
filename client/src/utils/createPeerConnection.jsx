import React from "react";
import peerConfiguration from "./stunServers";

const createPeerConnection = () => {
  return new Promise(async (resolve, reject) => {
    const peerConnection = await new RTCPeerConnection();
    const remoteStream = new MediaStream();
    peerConnection.addEventListener("signalingstatechange", (e) => {
      console.log("Signaling State Change");
      console.log(e);
    });
    peerConnection.addEventListener("icecandidates", (e) => {
      console.log("Found ice candidate");
      if (e.candidate) {
      }
    });
    resolve({
      peerConnection,
      remoteStream,
    });
  });
};

export default createPeerConnection;
