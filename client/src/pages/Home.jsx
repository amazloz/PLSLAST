import React, { useEffect } from "react";
import "./Home.css";
import about from "../media/about.png";
import globe from "../media/globe.png";
import main from "../media/main.png";
import BeforeNavbar from "../components/Navbar/BeforeNavbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/userprofile");
    }
  }, [userInfo, navigate]);

  return (
    <div id="home">
      <div>
        <BeforeNavbar />
        <div className="one">
          <div className="containerbox">
            <div className="title">
              <h1>Speak freely with Talkis</h1>
              <p>Master the language by talking with people</p>
              <Link to="/login" className="try">
                TRY FOR FREE
              </Link>
            </div>
            <div className="call">
              <img src={main} alt="videocall" />
            </div>
          </div>
        </div>

        <div className="two" id="about">
          <div className="abouttitle">
            <h1> What is Talkis?</h1>
            <p>
              The language learning app where you create real communication with
              others by talking about your interests and hobbies
            </p>
          </div>
          <div className="aboutcontent">
            <div>
              <img src={about} alt="globe" className="aboutimg" />
            </div>
            <div className="idkk">
              <ul>
                <li>Connect with a community of language learners</li>
                <li>Audio & video call</li>
                <li>Make new friends</li>
                <li>100+ languages</li>
              </ul>
            </div>
            <div>
              <img src={globe} alt="about" className="globeimg" />
            </div>
          </div>
        </div>
        <div className="three" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <p>
                <h1>Contact</h1>
              </p>
              <p>Email: orgilod44@gmail.com</p>
              <p>Phone: +976 95082727</p>
              <p>
                Test, test test test test test test test test test test test
                test test test test test test test test test test test test!
              </p>
            </div>
            <form className="contact-form">
              <div className="form-one">
                <input
                  className="homeinput"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
                <input
                  className="homeinput"
                  type="email"
                  id="email"
                  placeholder="Email address"
                />
              </div>
              <textarea
                name="message"
                id="message"
                cols="90"
                rows="10"
                placeholder="Message"></textarea>
              <button className="submit-form">Send</button>
            </form>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
