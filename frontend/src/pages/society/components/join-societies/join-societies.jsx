import React from 'react';
import './join-societies.css';
import IEEE from '../../../../assets/IEEE.svg';
import Story from '../../../../components/stories/stories';

export default function JoinedSocieties() {
  const societies = Array(6).fill('IEEE'); 

  return (
    <section className="joined-societies">
      <div className="section-header">
        <h2>Joined <span className="highlight">Societies</span></h2>
        <a href="#" className="see-all">See All</a>
      </div>
      <div className="societies-grid">
        {societies.map((society, index) => (
          <Story key={index} logo={IEEE} alt={society} />
        ))}
      </div>
    </section>
  );
}
