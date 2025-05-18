import React from 'react';
import './recommended.css';
import SocietyCard from '../../../../components/societyCard/societyCard';
import IEEE from '../../../../assets/IEEE.svg';
import C3 from '../../../../assets/C3.svg';

export default function Recommended() {
  const studyCircles = [
    {
      name: 'IEEE',
      logo: IEEE,
      description: 'Where ideas meet and solutions thrive.',
    },
    {
      name: 'C3',
      logo: C3,
      description: 'A community for ambitious learners to excel together.',
    }
  ];

  return (
    <section className="recommended-study-circles">
      <h2>Recommended <span className="highlight">Study Circles</span></h2>
      <div className="study-circle-cards">
        {studyCircles.map((studyCircle, index) => (
          <SocietyCard
            key={index}
            logo={studyCircle.logo}
            title={studyCircle.name}
            description={studyCircle.description}
          />
        ))}
      </div>
    </section>
  );
}
