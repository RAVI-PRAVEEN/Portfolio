import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/profile1.jpg" alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <h3>I'm Ravi Praveen</h3>
          <p>
            I am a passionate developer and tech enthusiast focused on creating impactful
            solutions. With a strong background in software development, I strive to deliver
            high-quality projects.
          </p>
          <ul className="about-details">
            <li><strong>Email:</strong> <a href="mailto:ravipraveenmamidi126@gmail.com">ravipraveenmamidi126@gmail.com</a></li>
            <li><strong>Phone:</strong> +91 8500630643</li>
            <li><strong>Place:</strong> Vizianagaram, India</li>
          </ul>
          <a href="/path-to-resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
