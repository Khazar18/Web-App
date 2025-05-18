import React from 'react';
import './mainContent.css';
import Nust from '../../../../assets/comsats.svg';
import HeroSection from '../heroSection/heroSection';
import SearchBar from '../searchbar/searchBar';
import Post from '../../../../components/posts/post'
import { Announcements } from '../../../../components/announcements/announcements';
import { Recentbar } from '../../../../components/recentBar/recentBar';

function MainContent() {
  return (
    <div className="main-main-content">

      <HeroSection />

      <SearchBar />
      <div className='recentPostContainer '>
        <Post />
        <Recentbar/>
      </div>

    </div>
  );
}

export default MainContent;

