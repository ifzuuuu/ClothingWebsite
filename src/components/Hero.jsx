import React from 'react';
import '../css/Hero.css';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div>
          <div>
            <h1 className="hero-title">
              See the World <span className="hero-highlight">Clearly</span>
            </h1>
            <p className="hero-description">
              Discover premium eyewear that combines style, comfort, and crystal-clear vision. 
              From classic frames to modern designs, find your perfect pair.
            </p>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary">
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
            src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800"
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
