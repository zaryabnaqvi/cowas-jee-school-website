import React from "react";
import TeacherCard from "./TeachersCard";
import profile1 from "../Assets/profile-1.png";
import profile from "../Assets/mmb.jpeg";

import profile2 from "../Assets/registrar-removebg-preview.png";
import profile3 from "../Assets/wasiuddin_2.png";
import profile4 from "../Assets/noman.jpg";
import profile5 from "../Assets/dr_nouman.jpeg";
// import profile5 from "../Assets/IMG-20240729-WA0038 (1).jpg";

import "../Styles/Teachers.css";

function Executive() {
  return (
    <div className="doctor-section" id="Executive">
      <div className="dt-title-content">
        <h3 className="dt-title">

          <span>Administrative Staff</span>

        </h3>

        <p className="dt-description">
        The School is being managed by a Management Committee comprising of the following
        </p>
      </div>

      <div className="dt-cards-content">
        <TeacherCard
          img={profile}
          name="Prof. Dr. Mirza Mahmood Baig"
          title="School Convenor"
          stars="4.9"
          reviews="1800"
        />



        <TeacherCard
          img={profile4}
          name=" Muhammad Aamir Khan"
          title="School Principal"
          stars="4.9"
          reviews="1800"
        />
     
    

<TeacherCard
          img={profile5}
          name="Syed Muhammad Noaman"
          title="Administrator School"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Executive;
