import React from 'react';
import '../css/Hero.css';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const handleShopNow = () => {
    navigate('/ProductPage'); // ✅ Navigate to /products route
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div>
          <div>
            <h1 className="hero-title">
              Step up your <span className="hero-highlight">Wardrobe</span>
            </h1>
            <p className="hero-description">
              Discover the latest fashion trends and elevate your style with our premium clothing collection. 
            </p>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleShopNow}>
              <span>Shop Now</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              <Play size={20} />
              <span>Watch Our Story</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">500K+</div>
              <div className="hero-stat-label">Happy Customers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Store Locations</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">4.8★</div>
              <div className="hero-stat-label">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="hero-image-container">
          <img
            src="Banner1.jpg"
            alt="Premium Eyewear Collection"
            className="hero-image"
          />
          <div className="hero-decor-1"></div>
          <div className="hero-decor-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
