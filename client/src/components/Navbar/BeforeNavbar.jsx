import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "./BeforeNavbar.css";

const BeforeNavbar = () => {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 870 && window.scrollY <= 1800) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <nav className={fix ? "navbar fixed" : "navbar"}>
      <a
        href="/"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="title">
        Talkis
      </a>
      <ul>
        <Link
          href="/"
          to="home"
          className="butn2"
          spy={true}
          smooth={true}
          duration={500}>
          Нүүр
        </Link>
        <Link
          href="about"
          to="about"
          className="butn2"
          spy={true}
          smooth={true}
          duration={600}>
          Тухай
        </Link>
        <Link
          href="about"
          to="contact"
          className="butn2"
          spy={true}
          smooth={true}
          duration={800}>
          Холбоо барих
        </Link>
        <a href="/login">
          <button className="loginbutton">Нэвтрэх</button>
        </a>
      </ul>
    </nav>
  );
};

export default BeforeNavbar;
