import React, { useState } from 'react';
import {
  Star, Heart, ShoppingCart, Share2, Truck, Shield, RotateCcw, ArrowLeft, Plus, Minus
} from 'lucide-react';
import '../css/Product.css';

export const Product = ({ product, onAddToCart, onBack }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('details');

  const images = Array(4).fill(product.image);
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} />
          Back
        </button>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>

      <div className="content-container">
        {/* Images */}
        <div className="images-section">
          <div className="main-image">
            <img src={images[selectedImageIndex]} alt={product.name} />
          </div>
          <div className="thumbnails">
            {images.map((src, idx) => (
              <button
                key={idx}
                className={`thumb-btn ${selectedImageIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedImageIndex(idx)}
              >
                <img src={src} alt={`${product.name} ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="info-section">
          <div className="title-rating">
            <h2 className="brand">{product.brand}</h2>
            <h1 className="name">{product.name}</h1>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                />
              ))}
              <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="price-section">
            <span className="price-current">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
                <span className="discount-badge">{discountPercentage}% off</span>
              </>
            )}
            <p className="taxes-info">Inclusive of all taxes</p>
          </div>

          <div className="options-section">
            <div className="option-group">
              <label>Size</label>
              <div className="option-buttons">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`option-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Color: {selectedColor}</label>
              <div className="option-buttons">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`option-btn ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Quantity</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
              </div>
            </div>
          </div>

          <div className="actions-section">
            <button onClick={() => onAddToCart(product.id, selectedSize, selectedColor, quantity)} className="add-cart-btn">
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <div className="small-actions">
              <button onClick={() => setIsWishlisted(!isWishlisted)} className={`small-btn ${isWishlisted ? 'wishlisted' : ''}`}>
                <Heart size={20} /> Wishlist
              </button>
              <button className="small-btn"><Share2 size={20} /> Share</button>
            </div>
          </div>

          <div className="delivery-info">
  <div className="delivery-item">
    <Truck className="delivery-icon green" />
    <div>
      <p className="delivery-title">Free Delivery</p>
      <p className="delivery-subtext">Delivered by tomorrow</p>
    </div>
  </div>
  <div className="delivery-item">
    <RotateCcw className="delivery-icon blue" />
    <div>
      <p className="delivery-title">7 Day Return Policy</p>
      <p className="delivery-subtext">Easy returns & exchanges</p>
    </div>
  </div>
  <div className="delivery-item">
    <Shield className="delivery-icon purple" />
    <div>
      <p className="delivery-title">Quality Assured</p>
      <p className="delivery-subtext">100% authentic products</p>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="product-details">
  <h2 className="section-title">Product Details</h2>
  <div className="details-content">
    <div className="detail-block">
      <h3 className="detail-heading">Description</h3>
      <p className="detail-text">{product.description}</p>
    </div>
    <div className="detail-block">
      <h3 className="detail-heading">Specifications</h3>
      <div className="spec-grid">
        <div className="spec-item">
          <span className="spec-label">Brand</span>
          <span className="spec-value">{product.brand}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Category</span>
          <span className="spec-value">{product.category}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Available Sizes</span>
          <span className="spec-value">{product.sizes.join(', ')}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Available Colors</span>
          <span className="spec-value">{product.colors.join(', ')}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="reviews">
  <h2 className="section-title">Customer Reviews</h2>
  <div className="review-grid">
    <div className="rating-summary">
      <div className="rating-score">{product.rating}</div>
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
          />
        ))}
      </div>
      <p className="rating-count">{product.reviews} reviews</p>
    </div>
    <div className="rating-breakdown">
      {[5, 4, 3, 2, 1].map(stars => {
        const percent = stars === 5 ? 60 : stars === 4 ? 25 : stars === 3 ? 10 : 3;
        return (
          <div key={stars} className="rating-bar">
            <span>{stars}★</span>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: `${percent}%` }}></div>
            </div>
            <span className="bar-label">{percent}%</span>
          </div>
        );
      })}
    </div>
  </div>
</div>
    </div>
  );
};
