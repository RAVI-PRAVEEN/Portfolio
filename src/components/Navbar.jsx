// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
