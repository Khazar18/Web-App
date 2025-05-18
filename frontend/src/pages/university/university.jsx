import React, { useState, useEffect } from 'react';
// import { Navbar } from '../../components/navbar/navBar';
// import { Footer } from '../../components/footer/footer';
import { HeroSection } from './Components/heroSection/heroSection';
import { FilterSection } from './Components/filter/filter';
import { SearchBar } from './Components/search/search';
import { UniversityCard } from './Components/universityCard/universityCard';
import { Pagination } from './Components/pagination/pagination';
import { JoinSociety } from './Components/joinSociety/joinSociety';
import  ChatBot from '../../components/ai/ai';
import './university.css';
import universityData from '../../assets/updated_universities.json';
import Placeholder from '../../assets/university_placeholder.png';

export default function Universities() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCard, setExpandedCard] = useState(null);
  const [filters, setFilters] = useState({
    data: universityData,
    rank: { min: 1, max: 1001 },
    number_students: { min: 0, max: 50000 },
    intl_students: { min: 0, max: 100 },
    subjects: [], // Initialize as empty array
    countries: [], // Initialize as empty array
    research_score: { min: 0, max: 100 },
    teaching_score: { min: 0, max: 100 },
    overall_score: { min: 0, max: 100 }
  });
  const [searchResults, setSearchResults] = useState(universityData);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const universitiesPerPage = 6;

  const cleanSubjectName = (subject) => {
    return subject.replace(/\d+.*$/, '').trim();
  };

  const cleanNumber = (value) => {
    if (typeof value === 'string') {
      return parseInt(value.trim(), 10);
    }
    return value;
  };

  const filteredUniversities = searchResults.filter((uni) => {
    const cleanSubjects = uni.subjects.map(subject => cleanSubjectName(subject));
    const uniRank = cleanNumber(uni.rank);
  
    return (
      (!filters.rank || 
        (uniRank >= filters.rank.min && 
         uniRank <= filters.rank.max)) &&
      (!filters.countries?.length || filters.countries.includes(uni.country)) &&
      (!filters.subjects?.length || 
        filters.subjects.some(filterSubject => 
          cleanSubjects.some(uniSubject => 
            uniSubject.toLowerCase().includes(filterSubject.toLowerCase())
          )
        )) &&
      (!filters.intl_students || 
        (parseFloat(uni.intl_students) >= filters.intl_students.min && 
         parseFloat(uni.intl_students) <= filters.intl_students.max)) &&
      (!filters.number_students || 
        (parseInt(uni.number_students) >= filters.number_students.min && 
         parseInt(uni.number_students) <= filters.number_students.max)) &&
      (!filters.overall_score || 
        (parseFloat(uni.overall_score) >= filters.overall_score.min && 
         parseFloat(uni.overall_score) <= filters.overall_score.max)) &&
      (!filters.research_score || 
        (parseFloat(uni.research_score) >= filters.research_score.min && 
         parseFloat(uni.research_score) <= filters.research_score.max)) &&
      (!filters.teaching_score || 
        (parseFloat(uni.teaching_score) >= filters.teaching_score.min && 
         parseFloat(uni.teaching_score) <= filters.teaching_score.max))
    );
  });

  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchResults = (filteredData) => {
    setSearchResults(filteredData);
    setCurrentPage(1);
  };

  return (
    <div className="universities-page">
      <HeroSection />
      <div className="search-container">
        {!isMobile && <FilterSection filters={filters} setFilters={setFilters} className="filter-section" />}
        <div className="search-results">
          <SearchBar
            universities={universityData}
            onFilteredUniversities={handleSearchResults}
          />
          {isMobile && (
            <FilterSection filters={filters} setFilters={setFilters} className="filter-section visible" />
          )}
          <div className="universities-grid">
            {currentUniversities.map((university, index) => (
              <UniversityCard
                key={index}
                name={university.name}
                description={university.description}
                image={university.image_url ? university.image_url : Placeholder}
                isExpanded={expandedCard === university.name}
                onExpand={() => setExpandedCard(university.name)}
                onCollapse={() => setExpandedCard(null)}
              />
            ))}
          </div>
          <Pagination
            itemsPerPage={universitiesPerPage}
            totalItems={filteredUniversities.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <JoinSociety />
      {/* <Footer /> */}
    </div>
  );
}