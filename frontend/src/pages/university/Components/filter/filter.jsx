// filter.jsx
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Filter, X } from 'lucide-react';
import './filter.css';

export const FilterSection = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fields, setFields] = useState({
    rank: { min: 1, max: 1001 },
    countries: [],
    subjects: [],
    number_students: { min: 0, max: 50000 },
    intl_students: { min: 0, max: 100 },
    research_score: { min: 0, max: 100 },
    teaching_score: { min: 0, max: 100 },
    overall_score: { min: 0, max: 100 }
  });

  const [rangeValues, setRangeValues] = useState({
    rank: { min: 1, max: 1001 },
    number_students: { min: 0, max: 50000 },
    intl_students: { min: 0, max: 100 },
    research_score: { min: 0, max: 100 },
    teaching_score: { min: 0, max: 100 },
    overall_score: { min: 0, max: 100 }
  });

  const subjectsList = [
    'Arts and Humanities',
    'Business and Economics',
    'Clinical and Health',
    'Computer Science',
    'Education',
    'Engineering',
    'Law',
    'Life Sciences',
    'Physical Sciences',
    'Psychology',
    'Social Sciences'
  ];

  useEffect(() => {
    if (Array.isArray(filters.data)) {
      const uniqueCountries = [...new Set(filters.data.map(uni => uni.country))].sort();
      
      setFields(prev => ({
        ...prev,
        countries: uniqueCountries,
        subjects: subjectsList
      }));
    }
  }, [filters.data]);

  const handleRangeChange = (name, value, type) => {
    const newMin = type === 'min' ? 
      Math.min(parseInt(value) || 0, rangeValues[name].max) : 
      rangeValues[name].min;
    const newMax = type === 'max' ? 
      Math.max(parseInt(value) || 0, rangeValues[name].min) : 
      rangeValues[name].max;

    setRangeValues(prev => ({
      ...prev,
      [name]: { min: newMin, max: newMax }
    }));

    setFilters(prev => ({
      ...prev,
      [name]: { min: newMin, max: newMax }
    }));
  };

  const handleInputChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    const defaultRangeValues = {
      rank: { min: 1, max: 1001 },
      number_students: { min: 0, max: 50000 },
      intl_students: { min: 0, max: 100 },
      research_score: { min: 0, max: 100 },
      teaching_score: { min: 0, max: 100 },
      overall_score: { min: 0, max: 100 }
    };

    setRangeValues(defaultRangeValues);
    setFilters(prev => ({
      data: prev.data,
      ...defaultRangeValues,
      subjects: [],
      countries: []
    }));

    setIsOpen(false);
  };

  const renderRangeInputs = (key, label, showPercent = false) => (
    <div className="filter-group">
      <label>{label}</label>
      <div className="range-inputs">
        <input
          type="number"
          min={fields[key].min}
          max={fields[key].max}
          value={rangeValues[key].min}
          onChange={(e) => handleRangeChange(key, e.target.value, 'min')}
          className="range-input"
        />
        <span className="range-separator">to</span>
        <input
          type="number"
          min={fields[key].min}
          max={fields[key].max}
          value={rangeValues[key].max}
          onChange={(e) => handleRangeChange(key, e.target.value, 'max')}
          className="range-input"
        />
        {showPercent && <span className="percent-sign">%</span>}
      </div>
    </div>
  );

  const filterContent = (
    <div className="filter-content">
      <div className="filter-group">
        <label>COUNTRY</label>
        <Select
          isMulti
          options={fields.countries.map(country => ({
            label: country,
            value: country,
          }))}
          value={filters.countries?.map(country => ({
            label: country,
            value: country,
          })) || []}
          onChange={(selected) => handleInputChange('countries', selected?.map(opt => opt.value) || [])}
          className="select-input"
          classNamePrefix="select"
          placeholder="Select countries..."
        />
      </div>

      <div className="filter-group">
        <label>SUBJECTS</label>
        <Select
          isMulti
          options={fields.subjects.map(subject => ({
            label: subject,
            value: subject,
          }))}
          value={filters.subjects?.map(subject => ({
            label: subject,
            value: subject,
          })) || []}
          onChange={(selected) => handleInputChange('subjects', selected?.map(opt => opt.value) || [])}
          className="select-input"
          classNamePrefix="select"
          placeholder="Select subjects..."
        />
      </div>

      {renderRangeInputs('rank', 'RANK')}
      {renderRangeInputs('number_students', 'NUMBER OF STUDENTS')}
      {renderRangeInputs('intl_students', 'INTERNATIONAL STUDENTS', true)}
      {renderRangeInputs('research_score', 'RESEARCH SCORE', true)}
      {renderRangeInputs('teaching_score', 'TEACHING SCORE', true)}
      {renderRangeInputs('overall_score', 'OVERALL SCORE', true)}

      <button onClick={resetFilters} className="reset-button">
        Reset Filters
      </button>
    </div>
  );

  return (
    <>
      <div className="desktop-filter">
        <div className="filter-section">
          <div className="filter-header">
            <h3>Filters</h3>
            <Filter className="filter-icon" size={20} />
          </div>
          {filterContent}
        </div>
      </div>

      <div className="mobile-filter">
        <button className="mobile-filter-button" onClick={() => setIsOpen(true)}>
          <Filter size={20} />
          <span>Filters</span>
        </button>

        {isOpen && (
          <>
            <div className="filter-modal">
              <div className="modal-header">
                <h3>Filters</h3>
                <button 
                  className="close-button" 
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              {filterContent}
            </div>
            <div className="modal-overlay" onClick={() => setIsOpen(false)} />
          </>
        )}
      </div>
    </>
  );
};

