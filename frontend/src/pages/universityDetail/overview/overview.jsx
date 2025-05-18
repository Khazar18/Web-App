import React from 'react';
import './Overview.css';

const Overview = ({ university }) => {
  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="overview-content">
        <div className="overview-text">
          <p>
            Our university is committed to fostering excellence in education, research, and innovation. We strive to create an inclusive environment where students from all backgrounds can thrive and achieve their academic and professional aspirations.
          </p>
        </div>

        {/* Stats grid */}
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">👥</div>
            <div className="stat-details">
              <div className="stat-label">Total Students Enrolled</div>
              <div className="stat-value">{university.number_students}</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🏆</div>
            <div className="stat-details">
              <div className="stat-label">Ranking</div>
              <div className="stat-value">{university.rank}</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🌏</div>
            <div className="stat-details">
              <div className="stat-label">International Outlook Score</div>
              <div className="stat-value">{university.international_outlook_score}</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <div className="stat-details">
              <div className="stat-label">Overall Score</div>
              <div className="stat-value">{university.overall_score}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
