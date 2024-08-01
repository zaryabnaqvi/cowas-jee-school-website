import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import "../Styles/About.css";

import Image1 from '../Assets/pixelcut-export.png'
import {Tilt} from "react-tilt";
import ImageSchool from '../Assets/NEDUET_logo.svg (1).png'
import ImageSchool1 from '../Assets/logo-green-removebg-preview.png'



function Hero() {

  
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      




      <section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
                <div className="l-section-img2" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay" style={{ background: 'linear-gradient(0deg,#000000,rgba(109, 89, 89, 0))' }}></div>
            <div className="info-title-content text-center">
            <div className="hero-section ">
        {/* <div className="container"> */}
        <div className="text-section">
          <p className="text-headline mt-4 pt-5">📖 Education comes first</p>
          <h2 className="text-title">
          School of NEDUET
          </h2>
          <p className="text-descritpion">
          The Cowasjee School, formerly known as NED School English Medium, opened under the managegement of NED University in 2009.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Get Instant Notifications
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>14k+</p>
              <p>Graduated Students</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Experienced Teachers</p>
            </div>

            <div className="text-stats-container">
              <p>14+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <Tilt>
          <img className="hero-image1" style={{backgroundColor:"white",padding:'1rem'}} src={ImageSchool1} alt="Doctor" />
          </Tilt>
        </div>
      </div>
            </div>

            </section>







{/* 

      <div className="hero-section pt-5">
       
        <div className="text-section mt-lg-5">
          <p className="text-headline mt-4 pt-5">📖 Education comes first</p>
          <h2 className="text-title">
          School of NEDUET
          </h2>
          <p className="text-descritpion">
          The Cowasjee School, formerly known as NED School English Medium, opened under the managegement of NED University in 2009.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Get Instant Notifications
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>14k+</p>
              <p>Graduated Students</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Experienced Teachers</p>
            </div>

            <div className="text-stats-container">
              <p>14+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <Tilt>
          <img className="hero-image1" src={ImageSchool} alt="Doctor" />
          </Tilt>
        </div>
      </div> */}

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      </div>
    // </div>
  );
}

export default Hero;
