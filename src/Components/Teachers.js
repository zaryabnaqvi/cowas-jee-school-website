import React, { useState, useEffect } from "react";
import TeachersCard from "./TeachersCard";
import "../Styles/Teachers.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://nedmob1.neduet.edu.pk:8080/faculty")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teachers:", error));
  }, []);

  return (
    <div className="doctor-section" id="Teachers">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Teachers</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist educators, dedicated to
          providing top-notch learning services at The Cowasjee School. Trust
          in their expertise and experience to guide you towards a more
          knowledgeable and fulfilling academic journey.
        </p>
      </div>

      <div className="dt-cards-content">
        {teachers.toReversed().map((teacher) => (
          <TeachersCard
            key={teacher._id}
            img={teacher.imageUrl}
            name={teacher.name}
            title={teacher.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Teachers;
