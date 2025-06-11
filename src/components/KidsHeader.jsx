import React from 'react';
import { Search, ShoppingCart, Menu, Heart, User } from 'lucide-react';
import '../css/KidsHeader.css'; // Import the vanilla CSS styles

const Header = ({
  searchTerm,
  onSearchChange,
  cartItemsCount,
  onCartClick,
  onMenuClick
}) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-main">
          {/* Logo & Menu */}
          <div className="header-left">
            <button onClick={onMenuClick} className="menu-button">
              <Menu className="icon" />
            </button>
            <div className="logo">
              <div className="logo-circle">K</div>
              <h1 className="logo-text">KidsWear</h1>
            </div>
          </div>

          {/* Search */}
          <div className="search-bar desktop-only">
            <div className="search-icon">
              <Search className="icon" />
            </div>
            <input
              type="text"
              placeholder="Search for kids wear..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Actions */}
          <div className="header-actions">
            <button className="action-button">
              <Heart className="icon" />
            </button>
            <button className="action-button">
              <User className="icon" />
            </button>
            <button onClick={onCartClick} className="action-button cart-button">
              <ShoppingCart className="icon" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mobile-only mobile-search">
          <div className="search-icon">
            <Search className="icon" />
          </div>
          <input
            type="text"
            placeholder="Search for kids wear..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
