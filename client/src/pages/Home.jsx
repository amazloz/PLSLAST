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
      <BeforeNavbar />
      <div>
        <div className="one">
          <div className="containerbox">
            <div className="title">
              <h1>Talkis-тай хамт чөлөөтэй ярь</h1>
              <p>Хүмүүстэй ярилцан сурж буй хэлээ өөрийн болго</p>
              <Link to="/login" className="btn">
                Нэвтрэх
              </Link>
            </div>
            <div className="call">
              <img src={main} alt="videocall" />
            </div>
          </div>
        </div>

        <div className="two" id="about">
          <div className="abouttitle">
            <h1> Talkis гэж юу вэ?</h1>
            <p>
              Танихгүй хүнтэй холбоо тогтоон сурч буй гадаад хэлээ ашиглан
              өөрийн сонирхол хоббиний талаар ярилцаж болох орчин.
            </p>
            <p>Дэлхийн өнцөг булан бүрт байгаа хүмүүстэй танилцах</p>
          </div>
          <div className="aboutcontent">
            <div>
              <img src={about} alt="globe" className="aboutimg" />
            </div>
            <div className="idkk">
              <ul>
                <li>Гадаад хэл сурах сонирхолтой хүмүүстэй нэгдэх</li>
                <li>100+ хэлнээс сонголт хийх</li>
                <li>Шинэ найзуудтай болох</li>
                <li>Аудио & видео дуудлага</li>
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
                <h1>Холбоо барих</h1>
              </p>
              <p>Имэйл: orgilod44@gmail.com</p>
              <p>Утас: +976 95082727</p>
              <p>
                Тест, тэст тэст тэст тэст тэст тэст тэст тэст тэст тэст тэст
                тэст тэст тэст тэст тэст тэст тэст тэст тэст тэст тэст тэст!
              </p>
            </div>
            <form className="contact-form">
              <div className="form-one">
                <input type="text" id="name" placeholder="Нэр" />
                <input type="email" id="email" placeholder="Имэйл" />
              </div>
              <textarea
                name="message"
                id="message"
                cols="90"
                rows="10"
                placeholder="Message"></textarea>
              <button className="submit-form">Илгээх</button>
            </form>
          </div>
          <div className="footer">
            <div className="footertitles">
              <p>{currentYear} Talkis.</p>
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
