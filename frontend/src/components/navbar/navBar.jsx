import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/store.jsx';
import logo from '../../assets/logo.svg';
import defaultProfileImage from '../../assets/women_avatar.svg';

import './navBar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, checkAuth, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span>
          </button>

          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Academora Logo" width={32} height={32} />
            <span>Academora</span>
          </Link>

          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/universities"
              className={`nav-link ${isActive('/universities') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Universities
            </Link>
            <Link
              to="/explore"
              className={`nav-link ${isActive('/explore') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/about-us"
              className={`nav-link about-link ${isActive('/about-us') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </div>

          <div className="navbar-buttons">
            {isAuthenticated ? (
              <div className="profile-container">
                <img
                  src={user.profileImage || defaultProfileImage}
                  alt="Profile"
                  className="profile-image"
                  onClick={toggleProfileMenu}
                />

                {isProfileMenuOpen && (
                  <div className="profile-menu">
                    <Link to="/user-profile" className="profile-option" onClick={() => setIsProfileMenuOpen(false)}>
                      View Profile
                    </Link>
                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="btn btn-ghost">
                  <Link to="/sign-in">Sign In</Link>
                </button>
                <button className="btn btn-primary">
                  <Link to="/sign-up">Sign Up</Link>
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}