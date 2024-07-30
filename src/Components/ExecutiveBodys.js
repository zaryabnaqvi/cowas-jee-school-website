import React from "react";
import TeacherCard from "./TeachersCard";
import profile1 from "../Assets/profile-1.png";
import profile from "../Assets/prof_dr_mirza_mahmood_baig-removebg-preview.png";

import profile2 from "../Assets/registrar-removebg-preview.png";
import profile3 from "../Assets/wasiuddin_2.png";
import profile4 from "../Assets/m6-removebg-preview.png";
import profile5 from "../Assets/noman.jpg";

import "../Styles/Teachers.css";

function Executive() {
  return (
    <div className="doctor-section" id="Executive">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Executives</span>
        </h3>

        <p className="dt-description">
        The School is being managed by a Management Committee comprising of the following
        </p>
      </div>

      <div className="dt-cards-content">
        <TeacherCard
          img={profile}
          name="Dr Mirza Mahmood Baig"
          title="Chairman"
          stars="4.9"
          reviews="1800"
        />
        <TeacherCard
          img={profile3}
          name="Engr. Syed Wasiuddin "
          title="Director Services"
          stars="4.8"
          reviews="700"
        />
        <TeacherCard
          img={profile4}
          name="Muhammad Sajeeruddin"
          title="Director Finance"
          stars="4.7"
          reviews="450"
        />
        <TeacherCard
          img={profile2}
          name="Ghanzanffar Hussain"
          title="Registrar"
          stars="4.8"
          reviews="500"
        />

<TeacherCard
          img={profile5}
          name="Syed Muhammad Noaman"
          title="Administrator"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Executive;
