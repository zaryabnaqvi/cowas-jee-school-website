import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import ImageAbout from "../Assets/home1.jpg"

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={ImageAbout} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to The Cowasjee School,
        your trusted partner for accessible and personalized
        healthcare. Our expert teachers follow best educational
        practices and possess specialized skills in their areas,
        prioritizing your ward's learning. Join us on this
        journey towards your kid's better future.
        </p>

        <h4 className="about-text-title">Your Goals</h4>

        <SolutionStep
          title="Choose a Mentor"
          description="Discover your perfect mentor and schedule sessions effortlessly at The Cowasjee School. Our experienced educators prioritize your academic growth, providing tailored guidance."
        />

        <SolutionStep
          title="Make a Time Table"
          description="Select the dates and times that work best for you, and allow our dedicated team of educational professionals to support your learning journey with personalized attention."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our knowledgeable teachers and specialists are here to offer expert guidance and customized learning plans, assisting you in reaching your fullest academic potential."
        />
      </div>
    </div>
  );
}

export default About;
