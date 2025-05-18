
import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Icon from '../../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src={Icon} alt="Logo" className="footer-logo" />
          <p className="footer-description">Your platform for university collaboration and discovery.</p>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 789</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 <span className='high-light'>Academora</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
