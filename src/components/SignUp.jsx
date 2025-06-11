import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check, X, Sparkles } from 'lucide-react';
import '../css/SignUp.css'; // Import the CSS file


export default function SignupForm({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const passwordRequirements = [
    { text: 'At least 8 characters', test: (password) => password.length >= 8 },
    { text: 'Contains uppercase letter', test: (password) => /[A-Z]/.test(password) },
    { text: 'Contains lowercase letter', test: (password) => /[a-z]/.test(password) },
    { text: 'Contains number', test: (password) => /\d/.test(password) },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    console.log('Signup submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const isPasswordValid = passwordRequirements.every(req => req.test(formData.password));
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== '';

  return (
    <div className="signup-form-container">
      <div className="signup-form-header">
        <div className="signup-form-title-wrapper">
          <h1 className="signup-form-title">
            Create Account
          </h1>
          <div className="signup-form-sparkles">
            <Sparkles className="signup-form-sparkles-icon" />
          </div>
        </div>
        <p className="signup-form-subtitle">Join us and discover your perfect style</p>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-form-name-fields">
          <div className="signup-form-field">
            <label htmlFor="firstName" className="signup-form-label">
              First Name
            </label>
            <div className="signup-form-input-wrapper">
              <div className={`signup-form-input-icon ${focusedField === 'firstName' ? 'signup-form-input-icon-focused' : ''}`}>
                <User className="signup-form-input-icon-svg" />
              </div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                className="signup-form-input"
                placeholder="First name"
              />
              <div className={`signup-form-input-gradient ${focusedField === 'firstName' ? 'signup-form-input-gradient-active' : ''}`}></div>
            </div>
          </div>

          <div className="signup-form-field">
            <label htmlFor="lastName" className="signup-form-label">
              Last Name
            </label>
            <div className="signup-form-input-wrapper">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                className="signup-form-input"
                placeholder="Last name"
              />
              <div className={`signup-form-input-gradient ${focusedField === 'lastName' ? 'signup-form-input-gradient-active' : ''}`}></div>
            </div>
          </div>
        </div>

        <div className="signup-form-field">
          <label htmlFor="email" className="signup-form-label">
            Email Address
          </label>
          <div className="signup-form-input-wrapper">
            <div className={`signup-form-input-icon ${focusedField === 'email' ? 'signup-form-input-icon-focused' : ''}`}>
              <Mail className="signup-form-input-icon-svg" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className="signup-form-input"
              placeholder="Enter your email"
            />
            <div className={`signup-form-input-gradient ${focusedField === 'email' ? 'signup-form-input-gradient-active' : ''}`}></div>
          </div>
        </div>

        <div className="signup-form-field">
          <label htmlFor="password" className="signup-form-label">
            Password
          </label>
          <div className="signup-form-input-wrapper">
            <div className={`signup-form-input-icon ${focusedField === 'password' ? 'signup-form-input-icon-focused' : ''}`}>
              <Lock className="signup-form-input-icon-svg" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              className="signup-form-input signup-form-input-password"
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="signup-form-password-toggle"
            >
              {showPassword ? (
                <EyeOff className="signup-form-password-toggle-icon" />
              ) : (
                <Eye className="signup-form-password-toggle-icon" />
              )}
            </button>
            <div className={`signup-form-input-gradient ${focusedField === 'password' ? 'signup-form-input-gradient-active' : ''}`}></div>
          </div>
          
          {formData.password && (
            <div className="signup-form-password-requirements">
              {passwordRequirements.map((requirement, index) => {
                const isMet = requirement.test(formData.password);
                return (
                  <div key={index} className={`signup-form-password-requirement ${isMet ? 'signup-form-password-requirement-met' : ''}`}>
                    {isMet ? (
                      <Check className="signup-form-password-requirement-icon-check" />
                    ) : (
                      <X className="signup-form-password-requirement-icon-x" />
                    )}
                    <span className="signup-form-password-requirement-text">
                      {requirement.text}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="signup-form-field">
          <label htmlFor="confirmPassword" className="signup-form-label">
            Confirm Password
          </label>
          <div className="signup-form-input-wrapper">
            <div className={`signup-form-input-icon ${focusedField === 'confirmPassword' ? 'signup-form-input-icon-focused' : ''}`}>
              <Lock className="signup-form-input-icon-svg" />
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={() => setFocusedField('confirmPassword')}
              onBlur={() => setFocusedField(null)}
              className={`signup-form-input signup-form-input-password ${formData.confirmPassword && !passwordsMatch ? 'signup-form-input-error' : ''}`}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="signup-form-password-toggle"
            >
              {showConfirmPassword ? (
                <EyeOff className="signup-form-password-toggle-icon" />
              ) : (
                <Eye className="signup-form-password-toggle-icon" />
              )}
            </button>
            <div className={`signup-form-input-gradient ${focusedField === 'confirmPassword' 
                ? formData.confirmPassword && !passwordsMatch
                  ? 'signup-form-input-gradient-error'
                  : 'signup-form-input-gradient-active'
                : ''}`}></div>
          </div>
          {formData.confirmPassword && !passwordsMatch && (
            <p className="signup-form-error-message">Passwords do not match</p>
          )}
        </div>

        <div className="signup-form-terms">
          <div className="signup-form-terms-checkbox">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              required
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="signup-form-terms-checkbox-input"
            />
          </div>
          <div className="signup-form-terms-label">
            <label htmlFor="acceptTerms" className="signup-form-terms-label-text">
              I agree to the{' '}
              <button type="button" className="signup-form-terms-link">
                Terms and Conditions
              </button>
              {' '}and{' '}
              <button type="button" className="signup-form-terms-link">
                Privacy Policy
              </button>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !isPasswordValid || !passwordsMatch || !formData.acceptTerms}
          className="signup-form-submit-button"
        >
          {isLoading ? (
            <div className="signup-form-submit-button-content">
              <div className="signup-form-loading-spinner"></div>
              Creating account...
            </div>
          ) : (
            <div className="signup-form-submit-button-content">
              Create Account
              <ArrowRight className="signup-form-submit-button-arrow" />
            </div>
          )}
        </button>

        <div className="signup-form-separator">
          <div className="signup-form-separator-line"></div>
          <div className="signup-form-separator-text">
            <span>Or sign up with</span>
          </div>
        </div>

        <div className="signup-form-social-buttons">
          <button
            type="button"
            className="signup-form-social-button"
          >
            <svg className="signup-form-social-button-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="signup-form-social-button-text">Google</span>
          </button>

          <button
            type="button"
            className="signup-form-social-button"
          >
            <svg className="signup-form-social-button-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="signup-form-social-button-text">Facebook</span>
          </button>
        </div>
      </form>

      <div className="signup-form-footer">
        <p className="signup-form-footer-text">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="signup-form-footer-link"
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}
