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
      <a href="/" className="title">
        Talkis
      </a>
      <ul>
        <Link
          href="/"
          to="home"
          className="buttonnav"
          spy={true}
          smooth={true}
          duration={500}>
          Home
        </Link>
        <Link
          href="about"
          to="about"
          className="buttonnav"
          spy={true}
          smooth={true}
          duration={1000}>
          About
        </Link>
        <Link
          href="about"
          to="contact"
          className="buttonnav"
          spy={true}
          smooth={true}
          duration={1000}>
          Contact
        </Link>
      </ul>
      <a href="/login">
        <button className="brown">Log In</button>
      </a>
    </nav>
  );
};

export default BeforeNavbar;
