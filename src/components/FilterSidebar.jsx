import React from 'react';
import { X, Filter } from 'lucide-react';
import { categories, ageGroups } from '../data/products';
import '../css/FilterSidebar.css';

const FilterSidebar = ({ filters, onFiltersChange, isOpen, onClose }) => {
  const handleFilterChange = (key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'All',
      ageGroup: 'All Ages',
      priceRange: [0, 100],
      sortBy: 'featured'
    });
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}

      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="sidebar-title">
              <Filter className="icon purple" />
              <h3>Filters</h3>
            </div>
            <div className="sidebar-controls">
              <button onClick={clearFilters} className="clear-button">Clear</button>
              <button onClick={onClose} className="close-button">
                <X className="icon" />
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Category</h4>
            <div className="options">
              {categories.map((category) => (
                <label key={category} className="option">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Age Group</h4>
            <div className="options">
              {ageGroups.map((age) => (
                <label key={age} className="option">
                  <input
                    type="radio"
                    name="ageGroup"
                    value={age}
                    checked={filters.ageGroup === age}
                    onChange={(e) => handleFilterChange('ageGroup', e.target.value)}
                  />
                  <span>{age}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Price Range</h4>
            <div className="price-range">
              <input
                type="range"
                min="0"
                max="100"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
              />
              <div className="price-labels">
                <span>$0</span>
                <span className="highlight">${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Sort By</h4>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
