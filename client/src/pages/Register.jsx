import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useRegisterMutation } from "../slices/usersApiSlice";
import Navbar from "../components/Navbar/Navbar";
import { setProfiles } from "../slices/profileSlice";
import { Link } from "react-router-dom";

import "./Register.css";

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
        <form onSubmit={handleRegister} className="signupform">
          <input
            type="text"
            placeholder="Enter username..."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <select
            value={data.gender}
            onChange={(e) => setData({ ...data, gender: e.target.value })}>
            <option value="" disabled>
              Select gender...
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <input
            type="date"
            value={data.birthdate}
            onChange={(e) => setData({ ...data, birthdate: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input type="password" placeholder="Repeat password..." />

          <div className="buttons2">
            <Link to="/login" className="button green long">
              Log In
            </Link>
            <button type="submit" className="button browns short">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
