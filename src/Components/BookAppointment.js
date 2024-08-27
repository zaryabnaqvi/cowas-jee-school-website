import React from "react";
import Doctor from "../Assets/homePageImg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/Notifications");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
        {/* <img src={Doctor} alt="Doctor Group" className="ba-image1" /> */}
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose The Cowasjee School </span>
        </h3>
        <p className="ba-description">
          
Discover the reasons to choose The Cowasjee School for your educational needs. Expert guidance, convenience, and personalized solutions, with your academic success as our top priority. Join us on a journey to better learning and a brighter future.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#A60000" }} /> Expert Educators
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#A60000" }} /> Easy and Quick Enrollment
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#A60000" }} /> 24/7 FAQ Support  
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#A60000" }} /> Support for Emergency Situations
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Get Notifications
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
