import React from 'react';
import './heroSection.css';
import universityImage from '../../../../assets/universityPage/Picture.png'; 

export function HeroSection() {
  return (
    <div className="hero-section">
      <div className="heroContent">
        <h1 >University <span className='highlight'>Search</span> </h1>
        <div className="hero-text">
          <div className="vertical-line"></div>
          <div className='hero-para'>
            <p>We have the most complete database of universities more than 1300</p>
            <p>Our search will help you find universities based on various criteria, including cities, degrees offered, and program costs.</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={universityImage} alt="University campus" />
      </div>
    </div>
  );
}

