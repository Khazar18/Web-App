import React from 'react';
import './ourVision.css'; // Import the CSS file
import ourVision from '../../../../assets/our_vision.svg';

export function OurVision() {
  return (
    <div className="our-vision-container">
      <div className="our-vision-text">
        <h2 className="our-vision-heading">
          Our <span className="highlight">Vision</span>
        </h2>
        <p className="our-vision-paragraph">
          Our Vision Is To Revolutionize How Students Experience University Life By
          Addressing The Most Pressing Challenges They Face. We Aim To Create A
          Seamless Platform That Facilitates{' '}
          <span className="highlight">Connection</span> Between Students,
          Communities, And Universities, Fostering Seamless{' '}
          <span className="highlight">Communication</span> And{' '}
          <span className="highlight">Engagement</span>.
        </p>
      </div>
      <div className="our-vision-image">
        <img
          src={ourVision}
          alt="Vision Illustration"
          fill
          className="image-contain"
        />
      </div>
    </div>
  );
}
