import React, { useState } from 'react';
import './search.css';

export function SearchBar({ universities, onFilteredUniversities }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredUniversities = universities.filter((university) =>
      university.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    onFilteredUniversities(filteredUniversities);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredUniversities = universities.filter((university) =>
      university.name.toLowerCase().includes(term.toLowerCase())
    );
    onFilteredUniversities(filteredUniversities); // Update dynamically
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find university"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
