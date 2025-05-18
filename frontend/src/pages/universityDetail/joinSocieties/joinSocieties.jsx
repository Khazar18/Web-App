// Societies.jsx
import React from 'react';
import './joinSocieties.css';
import SocietyCard from '../../../components/societyCard/societyCard';
import GDSC from '../../../assets/GDSC.svg';
import IEEE from '../../../assets/IEEE.svg';
import C3 from '../../../assets/C3.svg';
import Join from '../../../assets/joinSociety.svg';

const Societies = () => {
  return (
    <div className="societies">
      <div className="societies-header">
        <div className="societies-text">
          <h2>Join <span>Societies</span></h2>
          <p>
            Explore opportunities to connect, learn, and grow with diverse societies at COMSATS. These communities offer students a platform to engage in academic, cultural, and social activities, fostering personal and professional development.
          </p>
        </div>
        <img src={Join} alt="Societies" className="societies-illustration" />
      </div>
      <div className="societies-grid">
        <SocietyCard
          logo={GDSC}
          title="GDSC"
          description="A platform for collaborative learning and student growth"
        />
        <SocietyCard
          logo={IEEE}
          title="IEEE"
          description="Where ideas meet and solutions thrive"
        />
        <SocietyCard
          logo={C3}
          title="C3"
          description="A community for ambitious learners to work together"
        />
      </div>
      <button className="load-more-join">LOAD MORE</button>
    </div>
  );
};

export default Societies;
