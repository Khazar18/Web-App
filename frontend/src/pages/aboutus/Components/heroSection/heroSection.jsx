
import React from 'react';
import './heroSection.css'; 

export function Hero() {
  return (
    <div className="about-us-hero-container">
      <div className="about-us-hero-content">
        <h1 className="hero-heading">
          About <span className="highlight">US</span>
        </h1>
        <p className="hero-paragraph">
          Bringing Students Together Like Never Before!
        </p>
      </div>
    </div>
  );
}
