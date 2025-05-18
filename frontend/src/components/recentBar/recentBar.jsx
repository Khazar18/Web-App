import React from 'react';
import './recentBar.css';
import ArrowUp from '../../assets/arrowUp-bar.svg';

export function Recentbar() {
  // Updated sample data with acronyms and likes
  const recentPosts = [
    {
      id: 1,
      acronym: "LEE",
      title: "Trip on its way",
      likes: "500"
    },
    {
      id: 2,
      acronym: "LEEE",
      title: "Trip on its way",
      likes: "500"
    },
    {
      id: 3,
      acronym: "LEEE",
      title: "Trip on its way",
      likes: "500"
    }
  ];

  return (
    <div className="recent-container">
      <div className="recent-header">
        <h2 className="recent-title">Recent Post</h2>
        <img src={ArrowUp} width = {30} alt="Arrow Up" />
      </div>
      <div className="recent-posts">
        {recentPosts.map((post) => (
          <div key={post.id} className="recent-post">
            <div className="post-header">
              <span className="post-acronym">{post.acronym}</span>
              <span className="post-likes">{post.likes}</span>
            </div>
            <p className="post-title">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}