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
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuingOrganization: "Microsoft",
      date: "March 2023",
      certificateLink: "#",
      image: "azure-logo.png",
    },
    {
      title: "Google Cloud Associate Engineer",
      issuingOrganization: "Google Cloud",
      date: "September 2022",
      certificateLink: "#",
      image: "gcloud-logo.png",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuingOrganization: "Cloud Native Computing Foundation",
      date: "May 2022",
      certificateLink: "#",
      image: "cka-logo.png",
    },
    {
      title: "Scrum Master Certified (SMC)",
      issuingOrganization: "Scrum Alliance",
      date: "August 2021",
      certificateLink: "#",
      image: "scrum-logo.png",
    },
    {
      title: "Certified Ethical Hacker",
      issuingOrganization: "EC-Council",
      date: "November 2020",
      certificateLink: "#",
      image: "ceh-logo.png",
    },
    {
        title: "Certified Ethical Hacker",
        issuingOrganization: "EC-Council",
        date: "November 2020",
        certificateLink: "#",
        image: "ceh-logo.png",
      },
      {
        title: "Certified Ethical Hacker",
        issuingOrganization: "EC-Council",
        date: "November 2020",
        certificateLink: "#",
        image: "ceh-logo.png",
      },
      {
        title: "Certified Ethical Hacker",
        issuingOrganization: "EC-Council",
        date: "November 2020",
        certificateLink: "#",
        image: "ceh-logo.png",
      },
      {
        title: "Certified Ethical Hacker",
        issuingOrganization: "EC-Council",
        date: "November 2020",
        certificateLink: "#",
        image: "ceh-logo.png",
      },
      {
        title: "Certified Ethical Hacker",
        issuingOrganization: "EC-Council",
        date: "November 2020",
        certificateLink: "#",
        image: "ceh-logo.png",
      },
      {
        title: "Certified Ethical Hacker",
        issuingOrganization: "EC-Council",
        date: "November 2020",
        certificateLink: "#",
        image: "ceh-logo.png",
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
