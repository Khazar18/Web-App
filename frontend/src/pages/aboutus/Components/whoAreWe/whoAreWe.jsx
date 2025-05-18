import React from 'react';
import './whoAreWe.css'; // Import the CSS file
import whoAreWe from '../../../../assets/who_are_we.svg'

export function WhoAreWe() {
  return (
    <div className="who-are-we-container">
      <div className="who-are-we-text">
        <h2 className="who-are-we-heading">
          Who Are <span className="highlight">WE?</span>
        </h2>
        <p className="who-are-we-paragraph">
          We Are More Than Just A Platform — We Are A{' '}
          <span className="highlight">Bridge</span> Between Students And The
          Vibrant World Of University Life. Our Aim Is To Create A Space Where
          Students Can Easily Access Everything Their University Has To Offer, From
          Active Societies And Clubs To Vital Updates And Shared Experiences.
        </p>
        <p className="who-are-we-paragraph">
          By Fostering{' '}
          <span className="highlight">Meaningful Interactions</span>, We
          Empower Students To Collaborate, Share Ideas, And Make The Most Of Their
          Academic Journey.
        </p>
      </div>
      <div className="who-are-we-image">
        <img
          src={whoAreWe}
          alt="University Illustration"
          fill
          className="image-contain"
        />
      </div>
    </div>
  );
}
