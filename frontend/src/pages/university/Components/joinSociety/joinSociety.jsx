import React from 'react';
import './joinSociety.css';
import { useNavigate } from 'react-router-dom';


export function JoinSociety() {

  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.stopPropagation();
    navigate('/explore');
  };

  return (
    <div className="join-society">
      <div className="join-content">
        <h2>Join Society</h2>
        <p>"Discover your passion and connect with like-minded peers - join your favorite societies on Academora today and make your university experience unforgettable!"</p>
        <button className="explore-button" onClick={handleCardClick}>Explore</button>
      </div>
      <div className="colorful-shapes"></div>
    </div>
  );
}
