import React from 'react';
import './Courses.css';

// Icon mapping for main subjects
const subjectIcons = {
  'Arts and Humanities': '🎨',
  'Business and Economics': '💼',
  'Clinical and Health': '🏥',
  'Computer Science': '💻',
  'Education': '📚',
  'Engineering': '🛠️',
  'Law': '⚖️',
  'Life Sciences': '🌱',
  'Physical Sciences': '🔬',
  'Psychology': '🧠',
  'Social Sciences': '🌍',
};

const placeholderIcon = '📌'; // Placeholder icon

const CourseCard = ({ title, rank, icon }) => (
  <div className="course-card">
    <div className="course-info">
      <h3>
        {icon && <span className="course-icon">{icon}</span>} {title}
      </h3>
      <p>Subject Wise Rank: {rank}</p>
    </div>
  </div>
);

export default function Courses({ courses }) {
  if (!courses || courses.length === 0) {
    return (
      <div className="courses">
        <h2 style={{ color: 'var(--primary-color)' }}>No ranked courses available to show</h2>
      </div>
    );
  }

  const filteredCourses = courses.reduce((acc, course) => {
    const match = course.match(/(.+?)(\d+)(?:st|nd|rd|th)?$/i);
    if (match) {
      const [, title, rank] = match;
      const trimmedTitle = title.trim();
      const icon = subjectIcons[trimmedTitle] || placeholderIcon;
      acc.push({ title: trimmedTitle, rank, icon });
    }
    return acc;
  }, []);

  return (
    <div className="courses">
      <h2>Courses</h2>
      <div className="courses-description">
        <p>
          At Our University, we offer a wide range of courses designed to empower students with the skills and knowledge needed for success in their chosen fields. Each course is tailored to meet industry standards, with opportunities for practical learning, research, and innovation. Whether you're pursuing undergraduate, graduate, or professional studies, Our University provides a dynamic and inclusive environment to help you achieve your academic and career goals.
        </p>
      </div>
      <div className="courses-grid">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} title={course.title} rank={course.rank} icon={course.icon} />
        ))}
      </div>
    </div>
  );
}
