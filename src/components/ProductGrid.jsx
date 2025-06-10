import React from 'react';
import { Star, Heart } from 'lucide-react';
import '../css/ProductGrid.css'; // Create this CSS file

export const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        const discountPercentage = product.originalPrice
          ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
          : 0;

        return (
          <div
            key={product.id}
            onClick={() => onProductClick(product)}
            className="product-card"
          >
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} className="product-img" />
              {discountPercentage > 0 && (
                <div className="discount-badge">{discountPercentage}% OFF</div>
              )}
              <button className="wishlist-btn">
                <Heart className="wishlist-icon" />
              </button>
            </div>

            <div className="product-info">
              <p className="brand">{product.brand}</p>
              <h3 className="name">{product.name}</h3>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                  />
                ))}
                <span className="review-count">({product.reviews})</span>
              </div>

              <div className="price">
                <span className="current-price">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>

              <div className="sizes">
                {product.sizes.slice(0, 3).map((size) => (
                  <span key={size} className="size">{size}</span>
                ))}
                {product.sizes.length > 3 && (
                  <span className="more-sizes">+{product.sizes.length - 3} more</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
