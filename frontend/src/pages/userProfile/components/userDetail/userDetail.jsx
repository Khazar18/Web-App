import React from 'react';
import "./userDetail.css";

export default function UserDetail() {
  return (
    <div className="user-detail">
      <div className="detail-section">
        <h2>Full Name</h2>
        <p>Azhar Ali</p>
      </div>

      <div className="detail-section">
        <h2>E-Mail</h2>
        <p>Azhar-Ali@email.com</p>
      </div>

      <div className="detail-section">
        <h2>Links</h2>
        <div className="social-links">
          <a href="#" className="social-link">
            B
          </a>
          <a href="#" className="social-link">
            in
          </a>
          <a href="#" className="social-link">
            M
          </a>
        </div>
      </div>

      <div className="action-buttons">
        <button className="action-button share">Share</button>
        <button className="action-button chat">Chat</button>
      </div>
    </div>
  )
}

