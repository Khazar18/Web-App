import React from 'react';
import './hero.css';
import Book from '../../../../assets/magicBook.svg';
import Wave from '../../../../assets/wave.svg';
import WitchHat from '../../../../assets/witchHat.svg';

export default function Hero() {
  return (
    <div className="bookmark-container">
      <div className="bookmark-content">
        <div className="bookmark-left">
          <img src={Book} alt="Magic Book" className="bookmark-icon" />
          <h1 className="bookmark-title">
            Book<span className="bookmark-title-k">
              <img src={WitchHat} alt="Witch Hat" className="witch-hat-icon" />
            </span> <span className='highlight'>Marks</span>
          </h1>
        </div>
      </div>
      <img src={Wave} alt="Wave Design" className="wave-design" />
    </div>
  );
}
