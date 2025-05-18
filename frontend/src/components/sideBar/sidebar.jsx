import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import PopularImage from '../../assets/popular-bar.svg';
import Bookmark from '../../assets/bookmark-bar.svg';
import JoinSociety from '../../assets/joinSociety-bar.svg';
import StudyCircles from '../../assets/studyCircle-bar.svg';
import CreatePostIcon from '../../assets/plus.svg';

function Sidebar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <nav className="sidebar-menu">
        <Link
          to="/explore"
          className={`menu-item ${activeItem === '/explore' ? 'active' : ''}`}
          onClick={() => handleItemClick('/explore')}
        >
          <div className="icon-container">
            <img src={PopularImage} alt="Popular" className="icon" />
          </div>
          <span>Popular</span>
        </Link>

        <Link
          to="/society"
          className={`menu-item ${activeItem === '/society' ? 'active' : ''}`}
          onClick={() => handleItemClick('/society')}
        >
          <div className="icon-container">
            <img src={JoinSociety} alt="Societies" className="icon" />
          </div>
          <span>Societies</span>
        </Link>

        <Link
          to="/study-circles"
          className={`menu-item ${activeItem === '/study-circles' ? 'active' : ''}`}
          onClick={() => handleItemClick('/study-circles')}
        >
          <div className="icon-container">
            <img src={StudyCircles} alt="Study Circles" className="icon" />
          </div>
          <span>Study Circles</span>
        </Link>

        <Link
          to="/bookmark"
          className={`menu-item ${activeItem === '/bookmark' ? 'active' : ''}`}
          onClick={() => handleItemClick('/bookmark')}
        >
          <div className="icon-container">
            <img src={Bookmark} alt="Bookmark" className="icon" />
          </div>
          <span>Bookmark</span>
        </Link>

        <Link
          to="/create-post"
          className={`menu-item ${activeItem === '/create-post' ? 'active' : ''}`}
          onClick={() => handleItemClick('/create-post')}
        >
          <div className="icon-container">
            <img src={CreatePostIcon} alt="Create Post" className="icon" />
          </div>
          <span>Create Post</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;