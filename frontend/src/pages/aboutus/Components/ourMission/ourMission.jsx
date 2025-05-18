import React from 'react';
import './ourMission.css'; // Import the CSS file
import ourMission from '../../../../assets/our_mission.svg';

export function OurMission() {
  return (
    <div className="our-mission-container">
      <div className="our-mission-image">
        <img
          src={ourMission}
          alt="Mission Illustration"
          fill
          className="image-contain"
        />
      </div>
      <div className="our-mission-text">
        <h2 className="our-mission-heading">
          Our <span className="highlight">Mission</span>
        </h2>
        <div className="our-mission-list">
          <p className="our-mission-paragraph">
            Our Mission Is To Build A Vibrant Ecosystem Where Students Can:
          </p>
          <ul className="mission-list">
            <li>
              <span className="highlight">Connect</span> With Their University Communities
            </li>
            <li>
              <span className="highlight">Access</span> Announcements And Events
            </li>
            <li>
              <span className="highlight">Engage</span> Interact With Peers Through Posts, Comments, And Reactions
            </li>
            <li>
              <span className="highlight">Thrive</span> Participate In Opportunities That Enhance Academic And Personal Growth
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
