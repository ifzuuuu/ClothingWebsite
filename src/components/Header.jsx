import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
import { Search, ShoppingBag, User, Menu, X, Eye,Shirt,LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="logo">
          <Shirt size={32} color="#2563eb" />
          <span className='websitename'>Solkar Atelier</span>
        </div>
        <div className="header-right">
        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#" className="nav-link">Eyeglasses</a>
          <a href="#" className="nav-link">Sunglasses</a>
          <a href="#" className="nav-link">Contact Lenses</a>
          <a href="#" className="nav-link">Home Eye Test</a>
          <a href="#" className="nav-link">Store Locator</a>
        </nav>

        {/* Search Bar */}
        <div className="search-bar">
          <Search size={18} color="#94a3b8" style={{ marginRight: '0.75rem' }} />
          <input type="text" placeholder="What are you looking for?" />
        </div>

        {/* Right Actions */}
        <div className="actions">
          <button className="icon-button lg-hidden">
            <Search size={24} />
          </button>
          <button onClick={() => navigate('/auth')} className="icon-button">
            <LogIn size={24} />
          </button>
          <button className="icon-button" style={{ position: 'relative' }}>
            <ShoppingBag size={24} />
            <span className="cart-badge">2</span>
          </button>
          <button className="icon-button md-hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
</div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav>
            <a href="#" className="mobile-link">Eyeglasses</a>
            <a href="#" className="mobile-link">Sunglasses</a>
            <a href="#" className="mobile-link">Contact Lenses</a>
            <a href="#" className="mobile-link">Home Eye Test</a>
            <a href="#" className="mobile-link">Store Locator</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
