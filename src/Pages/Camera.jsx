import React, { useState } from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import CameraInterface from '../components/CameraInterface';
import MeasurementResults from '../components/MeasurementResults';
import ProductRecommendations from '../components/ProductRecommendations';
import { determineBodyType, recommendSize } from '../data/bodyAnalysis';
import '../css/Camera.css';

export default function Camera() {
  const [currentStage, setCurrentStage] = useState('welcome');
  const [user, setUser] = useState(null);

  const handleAnalysisComplete = (measurements, skinTone) => {
    const bodyType = determineBodyType(measurements);
    const recommendedSize = recommendSize(measurements);
    setUser({ measurements, skinTone, bodyType, recommendedSize });
    setCurrentStage('results');
  };

  const handleViewRecommendations = () => setCurrentStage('recommendations');
  const handleBack = () => {
    if (currentStage === 'recommendations') setCurrentStage('results');
    else if (currentStage === 'results') setCurrentStage('scanning');
    else if (currentStage === 'scanning') setCurrentStage('welcome');
  };

  const renderContent = () => {
    switch (currentStage) {
      case 'welcome':
        return (
          <div className="welcome-screen">
            <div className="welcome-intro">
              <div className="icon-circle">
                <Sparkles className="icon" />
              </div>
              <h1>StyleSync</h1>
              <p>Revolutionary AI-powered clothing recommendations based on your unique body measurements and skin tone. Get personalized style suggestions that fit perfectly and complement your natural beauty.</p>
            </div>
            <div className="feature-grid">
              {['Body Scan', 'Color Analysis', 'Get Recommendations'].map((title, idx) => (
                <div key={idx} className="feature-card">
                  <div className={`feature-icon icon-${idx+1}`}><span>{idx+1}</span></div>
                  <h3>{title}</h3>
                  <p>{title === 'Body Scan' 
                    ? 'Advanced AI analyzes your body measurements using your camera' 
                    : title === 'Color Analysis'
                    ? 'Determine your skin tone and undertone for perfect color matching'
                    : 'Receive curated clothing suggestions tailored just for you'}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setCurrentStage('scanning')}
              className="primary-button"
            >
              Start Your Style Journey
            </button>
          </div>
        );

      case 'scanning':
        return (
          <div className="stage-container">
            <h2>Body & Color Analysis</h2>
            <p className="stage-subtext">Position yourself in front of the camera for accurate measurements</p>
            <CameraInterface onAnalysisComplete={handleAnalysisComplete} />
          </div>
        );

      case 'results':
        return user ? (
          <div>
            <MeasurementResults
              measurements={user.measurements}
              skinTone={user.skinTone}
              bodyType={user.bodyType}
              recommendedSize={user.recommendedSize}
            />
            <div className="button-container">
              <button onClick={handleViewRecommendations} className="primary-button">
                View Personalized Recommendations
              </button>
            </div>
          </div>
        ) : null;

      case 'recommendations':
        return user ? <ProductRecommendations user={user} /> : null;

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          {currentStage !== 'welcome' && (
            <button onClick={handleBack} className="back-button">
              <ArrowLeft className="icon" />
            </button>
          )}
          <div className="logo">
            <div className="logo-icon"><Sparkles className="icon-small" /></div>
            <span className="logo-text">StyleSync</span>
          </div>
          {currentStage !== 'welcome' && (
            <div className="progress-dots">
              {['scanning','results','recommendations'].map((stage, idx) => {
                const state = currentStage === stage
                  ? 'current' 
                  : ['scanning','results','recommendations'].indexOf(stage) < ['scanning','results','recommendations'].indexOf(currentStage)
                  ? 'done'
                  : 'upcoming';
                return <div key={idx} className={`dot ${state}`} />;
              })}
            </div>
          )}
        </div>
      </header>
      
      <main className="app-main">{renderContent()}</main>

      <footer className="app-footer">
        <p>© 2025 StyleSync. Revolutionizing fashion with AI-powered personalization.</p>
      </footer>
    </div>
  );
}
