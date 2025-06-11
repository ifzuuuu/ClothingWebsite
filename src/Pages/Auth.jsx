import React, { useState } from 'react';
import LoginForm from '../components/Login';
import SignupForm from '../components/SignUp';
import { Shirt } from 'lucide-react';
import '../css/Auth.css';

function Auth() {
  const [currentView, setCurrentView] = useState('login');

  return (
    <div className="auth-container">
      <div className="auth-content-wrapper">
        {/* Header with Logo */}
        <div className="auth-header">
          <div className="auth-logo-wrapper">
            <Shirt className="auth-logo-icon" />
          </div>
          <h2 className="auth-title">
            SOLKAR ATELIER
          </h2>
          <p className="auth-subtitle">Premium Fashion Collection</p>
        </div>

        {/* Form Container */}
        <div className="auth-form-container">
          <div className="auth-form-background"></div>
          
          <div className="auth-form-content">
            {currentView === 'login' ? (
              <LoginForm onSwitchToSignup={() => setCurrentView('signup')} />
            ) : (
              <SignupForm onSwitchToLogin={() => setCurrentView('login')} />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="auth-footer">
          <p className="auth-copyright">© 2024 Luxe Threads. All rights reserved.</p>
          <p className="auth-description">Crafted with precision and style</p>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="auth-background-elements">
        {/* Floating orbs */}
        <div className="auth-orb auth-orb-1"></div>
        <div className="auth-orb auth-orb-2"></div>
        <div className="auth-orb auth-orb-3"></div>
        
        {/* Geometric shapes */}
        <div className="auth-shape auth-shape-1"></div>
        <div className="auth-shape auth-shape-2"></div>
        <div className="auth-shape auth-shape-3"></div>
      </div>
    </div>
  );
}

export default Auth;
