import React from "react";
import updateCallStatus from "../../../redux-elements/actions/updateCallStatus";

const startLocalVideoStream = (streams, dispatch) => {
  const localStream = streams.localStream;
  for (const s in streams) {
    if (s !== "localStream") {
      const curStream = streams[s];
      localStream.stream.getVideoTracks().forEach((t) => {
        curStream.peerConnection.addTrack(t, curStream.stream);
      });
      dispatch(updateCallStatus("video", "enabled"));
      dispatch(updateCallStatus("audio", "enabled"));
    }
  }
};

export default startLocalVideoStream;
