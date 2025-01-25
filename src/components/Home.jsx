import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        {/* Profile Photo */}
        <img 
          src="/images/profile.jpg" 
          alt="Profile" 
          className="profile-photo" 
        />

        {/* Social Icons */}
        <div className="social-icons">
          <a href="mailto:ravipraveenmamidi126@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/mamidi-ravi-praveen/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/RAVI-PRAVEEN" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://wa.me/+918500630643" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://t.me/m_ravi_praveen" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://x.com/M_Ravi_Praveen" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <h1>
          Hello, I'm <span>Ravi Praveen</span>
        </h1>

        <Typed
          strings={['Developer', 'Tech Enthusiast', 'Innovator']}
          typeSpeed={50}
          backSpeed={30}
          loop
        />

        <p>
          Welcome to my portfolio! I’m a passionate developer and technology enthusiast 
          focused on creating impactful solutions.
        </p>

        <a href="#contact" className="home-btn">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;
