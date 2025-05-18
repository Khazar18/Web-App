import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../universityDetail/heroSection/heroSection';
import UniversityHeader from '../universityDetail/universityHeader/universityHeader';
import Overview from '../universityDetail/overview/overview';
import Courses from '../universityDetail/courses/courses';
import Societies from '../universityDetail/joinSocieties/joinSocieties';
import StudyCircles from '../universityDetail/studyCircles/studyCircle';
import './UniversityDetail.css';
import universityData from '../../assets/updated_universities.json';

export default function UniversityDetail() {
  const { name } = useParams();
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const uni = universityData.find(u => u.name === name);
    setUniversity(uni);
  }, [name]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div className=".university-detail-container">
      {/* <Navbar /> */}
      <HeroSection />
      <UniversityHeader university={university} />
      <Overview university={university} />
      <Courses courses={university.subjects} />
      <Societies />
      <StudyCircles />
      {/* <Footer /> */}
    </div>
  );
}