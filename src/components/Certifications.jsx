import React from "react";
import "./Certifications.css"; // Custom styles

const Certifications = () => {
  const certificationsData = [
    {
      title: "AWS Certified Solutions Architect",
      issuingOrganization: "Amazon Web Services (AWS)",
      date: "July 2023",
      certificateLink: "#",
      image: "aws-logo.png",
    },
    
      
  ];

  return (
    <section id="certifications">
      <h2 className="section-title">
        <i className="fas fa-certificate"></i> My Certifications
      </h2>
      <p className="section-subtitle">
        A showcase of my certified skills and achievements.
      </p>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3 className="cert-title">{cert.title}</h3>
            <div className="cert-details">
              <div className="cert-info">
                <p className="cert-organization">{cert.issuingOrganization}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              <img
                src={`./assets/${cert.image}`}
                alt={`${cert.issuingOrganization} logo`}
                className="cert-logo"
              />
            </div>
            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
