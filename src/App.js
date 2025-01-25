import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div>  
      <header>
        <Navbar />
      </header>     
        
      <main>
      <section id="home">
        <Home />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
