import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setcallInfo } from "../../../slices/callSlice";

import nomic from "../../../media/nomic.png";
import yesmic from "../../../media/yesmic.png";

const AudioButton = () => {
  const dispatch = useDispatch();

  const { audio } = useSelector((state) => state.call.callInfo);

  const startStopAudio = () => {
    dispatch(setcallInfo({ audio: !audio }));
    console.log(!audio);
  };

  return (
    <div className="button-wrapper d-inline-block">
      <button className="otherbtn" onClick={startStopAudio}>
        <img src={audio ? yesmic : nomic} />
      </button>
    </div>
  );
};

export default AudioButton;
