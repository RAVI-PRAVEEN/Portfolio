import React from "react";
import "./Education.css"; // Ensure you have a CSS file for styling

const Education = () => {
  const educationData = [
    {
      image: "path_to_parul_university_image.jpg",
      degree: "Bachelor Of Engineering In Computer Science and Engineering",
      institution: "Lendi Institute of Engineering and Technology | LIET",
      duration: "2021-2025",
      status: "Pursuing",
    },
    {
      image: "path_to_chaitanya_college_image.jpg",
      degree: "Sri Chaitanya Junior College | MPC",
      institution: "Vizianagaram ",
      duration: "2019-2021",
      status: "Completed",
    },
    {
      image: "path_to_chaitanya_college_image.jpg",
      degree: "A.P Model School | SSC",
      institution: "Vizianagaram ",
      duration: "2018-2019",
      status: "Completed",
    },
  ];

  return (
    <section id="education">
      <h2 className="section-title">
        <i className="fas fa-graduation-cap"></i> My Education
      </h2>
      {/* <p className="section-subtitle">
        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
      </p> */}
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            {/* <img src={edu.image} alt={edu.degree} className="education-image" /> */}
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-duration-status">
                {edu.duration} | <span className="status">{edu.status}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
