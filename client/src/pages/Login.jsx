import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import Navbar from "../components/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/userprofile");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials(res));
      toast.success("Loged in successfully. Welcome!");
      navigate("/userprofile");
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formcontainer">
        <div className="headertitle">
          <div className="ttle">Нэвтрэх</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={submitHandler} className="loginform">
          <input
            type="email"
            placeholder="Имэйл оруулна уу..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Нууц үг оруулна уу..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit" className="buttn">
            Нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
