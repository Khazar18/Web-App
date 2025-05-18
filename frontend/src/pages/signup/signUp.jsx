import React, { useState } from 'react';
import { useAuthStore } from '../../store/store.jsx';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import './signUp.css';
import googleIcon from '../../assets/google-icon.svg';
import SideImage from '../../assets/our_mission.svg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Example: Using react-icons

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const { signup, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      toast.error(
        'Password must be at least 8 characters long, contain letters, numbers, and special characters.'
      );
      return;
    }

    try {
      await signup(formData.email, formData.password, formData.name);
      toast.success('Sign-up successful! Redirecting to email verification...');
      setTimeout(() => navigate('/emailVerification'), 2000);
    } catch (err) {
      toast.error('Sign-up failed. Please try again.');
      console.error('Sign-up error:', err);
    }
  };

  const handleGoogleSignUp = () => {
    toast('Google sign-up feature coming soon!', { icon: '🚀' });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="signup-container">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="form-section">
        <h1>
          Get Started <span className="highlight"> Now </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password-button"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            {/* <a href="/forgot-password" className="forgot-password">
              Forgot password
            </a> */}
          </div>

          <button type="submit" className="signup-button" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>

          {error && <p className="error-message">{error}</p>}

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleSignUp}
          >
            <img src={googleIcon} alt="Google icon" />
            Sign up with Google
          </button>

          <p className="login-link">
            Already have an account? <a href="/sign-in">Log-in</a>
          </p>
        </form>
      </div>
      <div className="illustration-section">
        <img
          src={SideImage}
          alt="Education illustration"
          className="main-illustration"
        />
      </div>
    </div>
  );
}
