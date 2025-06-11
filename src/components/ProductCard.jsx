// ProductCard.js
import React from 'react';
import '../css/ProductCard.css';

export default function ProductCard({ product, onAddToCart, onProductClick }) {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  const getColorCode = (color) => {
    const colorMap = {
      white: '#ffffff',
      black: '#000000',
      red: '#ef4444',
      blue: '#3b82f6',
      green: '#10b981',
      pink: '#ec4899',
      purple: '#8b5cf6',
      yellow: '#f59e0b',
      gray: '#6b7280',
      navy: '#1e40af',
      'light blue': '#60a5fa',
      'dark blue': '#1d4ed8'
    };
    return colorMap[color.toLowerCase()] || '#d1d5db';
  };

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />

        {product.originalPrice && (
          <div className="discount-badge">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}

        <button className="wishlist-button">
          ♥
        </button>

        <button className="quick-add-button" onClick={handleAddToCart}>
          🛒
        </button>
      </div>

      <div className="product-info">
        <div className="category-age">
          <span className="category">{product.category}</span>
          <span className="age-group">{product.ageGroup}</span>
        </div>

        <h3 className="product-name">{product.name}</h3>

        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>★</span>
          ))}
          <span className="reviews">{product.rating} ({product.reviews})</span>
        </div>

        <div className="colors">
          <span className="colors-label">Colors:</span>
          <div className="color-dots">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="color-dot"
                style={{ backgroundColor: getColorCode(color) }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="more-colors">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>

        <div className="price-add">
          <div className="price">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
