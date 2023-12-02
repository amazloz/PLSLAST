import React from "react";
import "./Home.css";
import about from "../media/about.png";
import globe from "../media/globe.png";
import main from "../media/main.png";
import BeforeNavbar from "../components/Navbar/BeforeNavbar";
import { Link } from "react-router-dom";

const Home = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="home">
      <BeforeNavbar />
      <div>
        <div className="one">
          <div className="containerbox">
            <div className="title">
              <h1>Speak freely with Call App</h1>
              <p>Master your language by talking with real people</p>
              <Link to="/login" className="btn">
                TRY IT FREE
              </Link>
            </div>
            <div className="call">
              <img src={main} alt="videocall" />
            </div>
          </div>
        </div>

        <div className="two" id="about">
          <div className="abouttitle">
            <h1> What is Call App</h1>
            <p>
              The Language Learning app where you create real communication with
              others by talking about your interest and hobbies
            </p>
            <p>Meet with strangers all around the world</p>
          </div>
          <div className="aboutcontent">
            <div>
              <img src={about} alt="globe" className="aboutimg" />
            </div>
            <div className="idkk">
              <ul>
                <li>Connect with a community of language learners</li>
                <li>Pick from 100+ languages</li>
                <li>Make new friends</li>
                <li>Audio & video call</li>
              </ul>
            </div>
            <div>
              <img src={globe} alt="about" className="globeimg" />
            </div>
          </div>
        </div>
        <div className="four" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <p>
                <h1>Contact me</h1>
              </p>
              <p>Email: orgilod44@gmail.com</p>
              <p>Phone: +976 95082727</p>
              <p>I'm a very busy person. So don't even try to contact me!</p>
            </div>
            <form className="contact-form">
              <div className="form-one">
                <input type="text" id="name" placeholder="Name" />
                <input type="email" id="email" placeholder="Email" />
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
          <div className="footer">
            <div className="footertitles">
              <p>{currentYear} Call App.</p>
              <p>
                Illustrations from{" "}
                <a href="https://icons8.com/illustrations">Ouch!</a>
              </p>
            </div>
            <div className="socials">
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
