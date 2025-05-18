import React from 'react';
import './recommended.css';
import SocietyCard from '../../../../components/societyCard/societyCard';
import IEEE from '../../../../assets/IEEE.svg';
import C3 from '../../../../assets/C3.svg';

export default function RecommendedSocieties() {
  const societies = [
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
    <section className="recommended-societies">
      <h2>Recommended <span className="highlight">Societies</span></h2>
      <div className="society-cards align-cards">
        {societies.map((society, index) => (
          <SocietyCard
            key={index}
            logo={society.logo}
            title={society.name}
            description={society.description}
          />
        ))}
      </div>
    </section>
  );
}
