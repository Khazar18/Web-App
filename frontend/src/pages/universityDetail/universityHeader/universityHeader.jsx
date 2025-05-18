import React from 'react';
import './UniversityHeader.css';

const UniversityHeader = ({ university }) => {
  return (
    <div className="university-header">
      <div className="university-text">
        <h1>{university.name} </h1>
        <div className="university-description">
          <div className="description-bar"></div>
          <p>{university.description}</p>
        </div>
      </div>
      <div className="university-logo">
        <img src={university.image_url} alt={`${university.name} University Logo`} />
      </div>
    </div>
  );
};

export default UniversityHeader;