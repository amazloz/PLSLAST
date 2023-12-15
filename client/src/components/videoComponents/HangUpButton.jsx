import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setcallInfo } from "../../slices/callSlice";
import "../../pages/Room.css";

const HangUpButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { callInfo } = useSelector((state) => state.call);

  const hangupCall = () => {
    dispatch(setcallInfo({ current: "complete" }));
    navigate("/match");
  };

  return (
    <button onClick={hangupCall} className="endbtn">
      Таслах
    </button>
  );
};

export default HangUpButton;
