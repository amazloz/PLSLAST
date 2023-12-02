import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, date, password } = data;
    try {
      const { data } = await axios
        .post("/register", {
          name,
          email,
          date,
          password,
        })
        .catch((err) => {
          console.log(err);
        });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registration Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
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
        <form onSubmit={registerUser} className="loginform">
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
            placeholder="mm/dd/yyyy"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit" className="buttn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
