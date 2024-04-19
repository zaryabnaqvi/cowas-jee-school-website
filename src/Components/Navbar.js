import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


import Logo from "../Assets/logo.png"
import schoolLogo from "../Assets/pixelcut-export.png"
function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <img className="logo" src={schoolLogo}/>
        <Link to="/">
          The Cowasjee
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/achievement" className="navbar-links">
            Achievements
          </Link>
        </li>
        <li>
          <Link to="/Events" className="navbar-links">
            Events
          </Link>
        </li>
        <li>
          <Link to="/accouncements" className="navbar-links">
            Announcements
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="navbar-links">
            Gallery
          </Link>
        </li>
      </ul>

      {/* <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button> */}

      <img className="logo" src={Logo}/>





      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/achievement">
              Achievements
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Events
            </a>
          </li>
          <li>
            <Link onClick={openNav} to="/accouncements">
              Accouncements
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Events">
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
