import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/store.jsx';
import toast, { Toaster } from 'react-hot-toast';
import './login.css';
import googleIcon from '../../assets/google-icon.svg';
import loginIllustration from '../../assets/who_are_we.svg';

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      toast.success('Login successful!');
      navigate('/');
    } catch (err) {
      toast.error('Login failed. Please try again.');
      console.error('Login error:', err);
    }
  };

  const handleGoogleSignIn = () => {
    toast('Google sign-in feature coming soon!', { icon: '🚀' });
  };

  return (
    <div className="login-container">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="login-form-section">
        <div className="login-header">
          <h1>WELCOME <span className='highlight'>BACK</span></h1>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
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
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
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
            <a href="/forgot-password" className="forgot-password">
              Forgot password
            </a>
          </div>

          <button type="submit" className="sign-in-button" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          {error && <p className="error-message">{error}</p>}

          <button 
            type="button" 
            className="google-button"
            onClick={handleGoogleSignIn}
          >
            <img src={googleIcon} alt="Google icon" />
            Sign in with Google
          </button>

          <p className="signup-link">
            Don't have an account? <a href="/sign-up">Sign up for free!</a>
          </p>
        </form>
      </div>
      
      <div className="illustration-section">
        <img 
          src={loginIllustration} 
          alt="Education illustration" 
          className="login-illustration"
        />
      </div>
    </div>
  );
}