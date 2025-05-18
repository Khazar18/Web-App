import React from 'react';
import './studyCircle.css';
import Brain from '../../../assets/brainstorm-brigade.svg';
import Knowledge from '../../../assets/knowledge-hub.svg';
import Scholar from '../../../assets/scholar.svg';
import Circle from '../../../assets/studyCircle.svg';
import SocietyCard from '../../../components/societyCard/societyCard';  // Import the SocietyCard component

const StudyCircles = () => {
  const studyCircles = [
    {
      logo: Knowledge,
      title: "The Knowledge Hub",
      description: "Join The Knowledge Hub to dive into collaborative learning, where engineering students come together to explore concepts, solve problems, and grow their skills."
    },
    {
      logo: Brain,
      title: "Brainstorm Brigade",
      description: "A vibrant community bringing coding and tech to life through collaborative projects, hackathons, and peer-to-peer learning."
    },
    {
      logo: Scholar,
      title: "Scholar's Syndicate",
      description: "A space for academic excellence and creative exploration, where students create, innovate, and push boundaries."
    }
  ];

  return (
    <div className="study-circles">
      <div className="study-circles-header">
        <div className="study-circles-text">
          <h2>Join <span>Study Circles</span></h2>
          <p>Connect with fellow students in our study circles for collaborative learning and knowledge sharing.</p>
        </div>
        <img src={Circle} alt="Study Circles" className="study-illustration" />
      </div>
      <div className="study-circles-grid">
        {studyCircles.map((circle, index) => (
          <SocietyCard key={index} {...circle} />  // Use SocietyCard here
        ))}
      </div>
      <button className="load-more-learn">LOAD MORE</button>
    </div>
  );
};

export default StudyCircles;
