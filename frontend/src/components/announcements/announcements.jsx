import React, { useState } from 'react';
import './announcements.css';
import Comsats from '../../assets/comsats.svg';
import Nust from '../../assets/NUSTuniversity.svg';

export function Announcements() {
  const [current, setCurrent] = useState(0);

  const announcements = [
    {
      image: Nust,
    },
    {
      image: Comsats,
    },
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % announcements.length);
  };

  return (
    <section className="announcements-section">
      <h2 className="section-title">
        Announcements <span className="emoji">🎉</span>
      </h2>
      <div className="announcements-grid">
        {announcements.map((announcement, index) => {
          const isActive = index === current;
          const isLeft = index === (current - 1 + announcements.length) % announcements.length;
          const isRight = index === (current + 1) % announcements.length;

          return (
            <div
              key={index}
              className={`announcement-card ${isActive ? 'active' : isLeft ? 'left' : isRight ? 'right' : ''}`}
            >
              <div className="announcement-image-container">
                <img
                  src={announcement.image}
                  alt={`Announcement ${index + 1}`}
                  className="announcement-image"
                />
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button className="carousel-arrow left" onClick={handlePrev}>
          ❮
        </button>
        <button className="carousel-arrow right" onClick={handleNext}>
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {announcements.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
