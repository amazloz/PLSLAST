import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useRegisterMutation } from "../slices/usersApiSlice";
import Navbar from "../components/Navbar/Navbar";
import { setProfiles } from "../slices/profileSlice";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registeruser] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    name: "",
    email: "",
    birthdate: "",
    password: "",
    gender: "",
    nativelanguage: "",
    learninglanguage: "",
    interest: "",
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/userprofile");
    }
  }, [userInfo, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = new Date(data.birthdate);
      const res = await registeruser({
        name: data.name,
        email: data.email,
        password: data.password,
        birthdate: formattedDate,
        gender: data.gender,
        nativelanguage: "Choose language",
        learninglanguage: "Choose language",
        interest: "Choose interest",
      }).unwrap();
      dispatch(setProfiles(res));
      toast.success("Registered successfully. Welcome!");
      navigate("/userprofile");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formcontainer">
        <div className="headertitle">
          <div className="ttle">Sign Up</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleRegister} className="loginform">
          <input
            type="text"
            placeholder="Enter username"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="date"
            value={data.birthdate}
            onChange={(e) => setData({ ...data, birthdate: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="male or female"
            value={data.gender}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />
          <button type="submit" className="buttn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
