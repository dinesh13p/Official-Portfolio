import React from 'react';
import './HeroSection.css';
import profileImage from './DineshProfile.jpg';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="content">
        <h1>Hi👋🏼! I'm Dinesh Poudel</h1>
        <p>A student From Nepal.</p>
      </div>
      <div className="profileimage">
        <img src={profileImage} alt="Dinesh Poudel" />
      </div>
    </section>
  );
};

export default HeroSection;
