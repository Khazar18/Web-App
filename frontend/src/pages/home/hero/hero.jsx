import React from 'react';
import './hero.css';
import heroImage from '../../../assets/homePage.svg';
import { useNavigate } from 'react-router-dom';


export function Hero() {

  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.stopPropagation();
    navigate('/explore');
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Explore<br />
          University<br />
          Communities<br />
          With <span className="highlight">Us</span>
        </h1>
        <p className="hero-text">
          Join your university's vibrant community, engage with societies, and stay updated with the latest activities. Your journey starts here!
        </p>
        <button className="explore-button" onClick={handleCardClick}>Explore</button>
      </div>
      <div className="hero-image">
        <img
          draggable="false"
          src= {heroImage}
          alt="Happy student with notebooks"
          className="studentImage"
        />
      </div>
    </div>
  )
}

