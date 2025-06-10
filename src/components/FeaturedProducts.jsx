import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import '../css/FeaturedProducts.css';

const products = [
  {
    id: 1,
    name: "Classic Aviator",
    brand: "VisionCraft",
    price: 129,
    originalPrice: 199,
    rating: 4.8,
    reviews: 324,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Modern Square Frame",
    brand: "StyleVision",
    price: 89,
    originalPrice: 129,
    rating: 4.6,
    reviews: 187,
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "New Arrival"
  },
  {
    id: 3,
    name: "Retro Round Glasses",
    brand: "TimelessEye",
    price: 99,
    originalPrice: 149,
    rating: 4.9,
    reviews: 456,
    image: "https://images.pexels.com/photos/1663455/pexels-photo-1663455.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Popular"
  },
  {
    id: 4,
    name: "Sport Sunglasses",
    brand: "ActiveVision",
    price: 159,
    originalPrice: 219,
    rating: 4.7,
    reviews: 289,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Limited Edition"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <h2>Featured Products</h2>
          <p>Discover our most popular and highly-rated eyewear collection</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <span className="badge">{product.badge}</span>
                <button className="wishlist-button">
                  <Heart className="icon" />
                </button>
              </div>
              <div className="product-info">
                <p className="brand">{product.brand}</p>
                <h3 className="product-name">{product.name}</h3>

                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`icon star ${
                        i < Math.floor(product.rating) ? 'filled' : ''
                      }`}
                    />
                  ))}
                  <span className="rating-text">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="price">
                  <span className="current-price">${product.price}</span>
                  <span className="original-price">${product.originalPrice}</span>
                </div>

                <button className="add-to-cart">
                  <ShoppingCart className="icon" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button className="view-all-btn">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
