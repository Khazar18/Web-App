import React from 'react';

import { Hero } from './Components/heroSection/heroSection';
import { WhoAreWe } from './Components/whoAreWe/whoAreWe';
import { OurVision } from './Components/ourVision/ourVision';
import { OurMission } from './Components/ourMission/ourMission';
import { FAQ } from '../../components/faq/faq';
import ChatBot from '../../components/ai/ai';

import './aboutUs.css'; 

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <main className="main-content">
        <Hero />
        <WhoAreWe />
        <OurMission />
        <OurVision />
        <FAQ />
      </main>
    </div>
  );
}
