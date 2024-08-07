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
import schoolLogo from "../Assets/logo-green.png"
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
        <Link to="/home">
          The Cowasjee
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/home" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-links">
            About
          </Link>
        </li>
        <li class="dropdown">
       
        <Link to={"/faculty/Teaching"} class="navbar-links">Faculty</Link>
  <div class="dropdown-content">
    <Link to="/faculty/Teaching">Teaching</Link>
    <Link to="/faculty/NonTeaching">Non-Teaching</Link>
    {/* <a href="#">Teaching</a> */}
  </div>

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
          <Link to="/notifications" className="navbar-links">
          Notifications
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
            <Link onClick={openNav} to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/faculty/NonTeaching">
              Non-Teaching Member
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/faculty/Teaching">
              Teaching Member
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/achievement">
              Achievements
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="/Events">
              Events
            </a>
          </li>
          <li>
            <Link onClick={openNav} to="/notifications">
            Notifications
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/gallery">
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
