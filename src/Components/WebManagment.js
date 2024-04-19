import React from "react";
import TeacherCard from "./TeachersCard";
import profile1 from "../Assets/profile-1.png";
import profile from "../Assets/zaryab-removebg-preview.png";

import profile2 from "../Assets/saadia-removebg-preview.png";
import profile3 from "../Assets/WhatsApp_Image_2024-03-08_at_1.30.36_AM-removebg-preview.png";
import profile4 from "../Assets/download__5_-removebg-preview.png";
import "../Styles/Teachers.css";

function WebManagement() {
  return (
    <div className="doctor-section" id="Executive">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Technical Team</span>
        </h3>

        <p className="dt-description">
        The School Website is being managed by a CSIT Department Students.
        </p>
      </div>

      <div className="dt-cards-content">

      <TeacherCard
          img={profile4}
          name="Dr M. Mubashir Khan"
          title="Chairman - CSIT"
        
        />
       
        <TeacherCard
          img={profile}
          name="Syed Muhammad Zaryab"
          title="Undergraduate - CSIT"
          
        />
        <TeacherCard
          img={profile3}
          name="Syed Muhammad Jawwad"
          title="Undergraduate - CSIT"
         
        />

<TeacherCard
          img={profile2}
          name="Ms. Saadia Arshad"
          title="Lecturer - CSIT"
        
        />




       
      </div>
    </div>
  );
}

export default WebManagement;
