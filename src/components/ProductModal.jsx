import React, { useState } from 'react';
import '../css/ProductModal.css';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product || !isOpen) return null;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select color and size');
      return;
    }
    onAddToCart(product, quantity, selectedColor, selectedSize);
    onClose();
  };

  const getColorStyle = (color) => {
    const colorMap = {
      white: '#ffffff', black: '#000000', red: '#ef4444', blue: '#3b82f6',
      green: '#10b981', pink: '#ec4899', purple: '#8b5cf6', yellow: '#f59e0b',
      gray: '#6b7280', navy: '#1e40af', 'light blue': '#60a5fa', 'dark blue': '#1d4ed8'
    };
    return { backgroundColor: colorMap[color.toLowerCase()] || '#d1d5db' };
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Product Details</h2>
          <button onClick={onClose} className="modal-close">×</button>
        </div>

        <div className="modal-body">
          <div className="modal-grid">
            <div className="modal-image-container">
              <img src={product.image} alt={product.name} className="modal-image" />
              {product.originalPrice && (
                <div className="discount-badge">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              )}
            </div>

            <div className="modal-details">
              <div className="modal-meta">
                <span className="modal-category">{product.category}</span>
                <span className="modal-age-group">{product.ageGroup}</span>
              </div>
              <h1 className="modal-title">{product.name}</h1>

              <div className="modal-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>★</span>
                ))}
                <span className="modal-review-count">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="modal-pricing">
                <span className="modal-price">${product.price}</span>
                {product.originalPrice && (
                  <span className="modal-original-price">${product.originalPrice}</span>
                )}
              </div>

              <div className="modal-section">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

              <div className="modal-section">
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Color</h3>
                <div className="modal-color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    >
                      <div className="color-dot" style={getColorStyle(color)}></div>
                      <span>{color}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Size</h3>
                <div className="modal-size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Quantity</h3>
                <div className="modal-quantity">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <div className="modal-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
                <button className="wishlist-btn">♥</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
