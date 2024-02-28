import React from "react";
import TeachersCard from "./TeachersCard";
import profile1 from "../Assets/profile-1.png";
import profile from "../Assets/saamia.jpeg";

import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Teachers.css";

function Teachers() {
  return (
    <div className="doctor-section" id="Teachers">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Teachers</span>
        </h3>

        <p className="dt-description">
        Meet our exceptional team of specialist educators, dedicated to providing top-notch learning services at The Cowasjee School. Trust in their expertise and experience to guide you towards a more knowledgeable and fulfilling academic journey.
        </p>
      </div>

      <div className="dt-cards-content">
        <TeachersCard
          img={profile}
          name="Miss Saadia"
          title="Principle - CSIT"
          stars="4.9"
          reviews="1800"
        />
        <TeachersCard
          img={profile}
          name="Miss Saadia"
          title="Lecturer - CSIT"
          stars="4.8"
          reviews="700"
        />
        <TeachersCard
          img={profile}
          name="Miss Saadia"
          title="Principle - CSIT"
          stars="4.7"
          reviews="450"
        />
        <TeachersCard
          img={profile}
          name="Miss Saadia"
          title="Principle - CSIT"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Teachers;
