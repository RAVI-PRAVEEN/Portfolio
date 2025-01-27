import React from "react";
import "./Projects.css"; // Custom styles

const Projects = () => {
  const ProjectsData = [
    {
      title: "AWS Certified Solutions Architect",
      issuingOrganization: "Amazon Web Services (AWS)",
      date: "July 2023",
      certificateLink: "#",
      image: "aws-logo.png",
    },
    
      
  ];

  return (
    <section id="projects">
      <h2 className="section-title">
        <i className="fas fa-certificate"></i> My Projects
      </h2>
      <p className="section-subtitle">
        A showcase of my Projects.
      </p>
      <div className="certifications-grid">
        {ProjectsData.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3 className="cert-title">{cert.title}</h3>
            <div className="cert-details">
              <div className="cert-info">
                <p className="cert-organization">{cert.issuingOrganization}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              
            </div>
            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
