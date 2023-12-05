import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import "./AfterNavbar.css";

const AfterNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutUser] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navcon">
      <Link to="/" className="logo">
        Talkis
      </Link>
      <div>
        <Link to="/match" className="butn">
          Match
        </Link>
        <Link to="/userprofile" className="butn">
          Profile
        </Link>
        <Link to="/friendslist" className="butn">
          Friends
        </Link>
      </div>
      <Link className="btn2" onClick={logoutHandler}>
        Log out
      </Link>
    </div>
  );
};

export default AfterNavbar;
