import React from 'react';
import './HeroSection.css';
import Graduation from '../../../assets/graduation.svg';

const HeroSection = () => {
  return (
    <div className="hero-section-detail">
      <div className="hero-content-detail">
        <div className="hero-image-detail">
          <img src={Graduation} alt="Graduation celebration" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

