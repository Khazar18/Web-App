import React from 'react';
import { useNavigate } from 'react-router-dom';
import './forcelogin.css'; // Import custom styles

function ForceLogin() {
  const navigate = useNavigate();

  return (
    <div className="force-login-container">
      <div className="force-login-box">
        <h2>Access Denied</h2>
        <p>You must be signed in to view this page.</p>
        <button className="login-button" onClick={() => navigate('/sign-up')}>
          Go to SignUP
        </button>
      </div>
    </div>
  );
}

export default ForceLogin;
