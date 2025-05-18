import React from 'react';
import './societyCard.css';

const SocietyCard = ({ logo, title, description }) => (
  <div className="societyCard">
    <img src={logo} alt={title} className="societyLogo" />
    <div className="societyInfo">
      <h3>
        {title} <span className="decorativeLine"></span>
      </h3>
      <p>{description}</p>
      <button className="joinButton">Join</button>
    </div>
  </div>
);

export default SocietyCard;