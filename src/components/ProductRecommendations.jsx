import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Star, Filter, ShoppingBag, Heart } from 'lucide-react';

import '../css/ProductRecommendations.css';
import { clothingItems } from '../data/ClothingList';

export default function ProductRecommendations() {
  const location = useLocation();
  const user = location.state?.user || {};

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState(new Set());

  const calculateCompatibilityScore = (item) => {
    let score = 0;
    const { bodyType, skinTone, recommendedSize } = user;

    // Match body type
    if (bodyType && item.recommendedFor?.bodyType?.includes(bodyType)) score += 2;

    // Match skin tone
    if (skinTone?.tone && item.recommendedFor?.skinTone?.includes(skinTone.tone)) score += 2;

    // Match recommended size
    if (recommendedSize && item.sizes.includes(recommendedSize)) score += 1;

    // Add rating factor
    score += item.rating * 0.2;

    return score;
  };

  const filteredAndSortedItems = useMemo(() => {
    return clothingItems
      .filter(item => {
        if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

        const matchBodyType = user.bodyType
          ? item.recommendedFor?.bodyType?.includes(user.bodyType)
          : true;

        const matchSkinTone = user.skinTone?.tone
          ? item.recommendedFor?.skinTone?.includes(user.skinTone.tone)
          : true;

        return matchBodyType || matchSkinTone;
      })
      .sort((a, b) => calculateCompatibilityScore(b) - calculateCompatibilityScore(a));
  }, [selectedCategory, user]);

  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const updated = new Set(prev);
      updated.has(itemId) ? updated.delete(itemId) : updated.add(itemId);
      return updated;
    });
  };

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'tops', name: 'Tops' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'outerwear', name: 'Outerwear' }
  ];

  return (
    <div className="recommendation-container">
      <div className="recommendation-header">
        <h2>Recommended for You</h2>
        <p>
          {user.recommendedSize
            ? `Showing items in your size (${user.recommendedSize})`
            : 'Showing best matches based on your profile'}
        </p>
      </div>

      {/* Category Filter */}
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
          >
            <Filter className="icon" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredAndSortedItems.map(item => {
          const matchPercentage = Math.min(100, Math.round((calculateCompatibilityScore(item) / 7.0) * 100));

          return (
            <div key={item.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="match-badge">{matchPercentage}% Match</div>
                <button
                  className={`favorite-button ${favorites.has(item.id) ? 'favorited' : ''}`}
                  onClick={() => toggleFavorite(item.id)}
                >
                  <Heart className="icon" fill={favorites.has(item.id) ? 'currentColor' : 'none'} />
                </button>
                {user.recommendedSize && item.sizes.includes(user.recommendedSize) && (
                  <div className="size-badge">Your Size Available</div>
                )}
              </div>

              <div className="product-info">
                <h3>{item.name}</h3>
                <p className="brand">{item.brand}</p>

                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`icon ${i < Math.floor(item.rating) ? 'star-filled' : 'star-empty'}`}
                    />
                  ))}
                  <span className="rating-score">({item.rating})</span>
                </div>

                <div className="price-sizes">
                  <span className="price">${item.price}</span>
                  <span className="sizes">{item.sizes.join(', ')}</span>
                </div>

                <div className="colors">
                  <div className="label">Available Colors:</div>
                  <div className="color-tags">
                    {item.colors.slice(0, 3).map((color, index) => (
                      <span key={index} className="color-tag">{color}</span>
                    ))}
                    {item.colors.length > 3 && (
                      <span className="color-tag">+{item.colors.length - 3}</span>
                    )}
                  </div>
                </div>

                <button className="add-to-bag">
                  <ShoppingBag className="icon" />
                  Add to Bag
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAndSortedItems.length === 0 && (
        <div className="empty-message">
          <Filter className="icon large" />
          <h3>No items found</h3>
          <p>Try selecting a different category or check back later.</p>
        </div>
      )}
    </div>
  );
}
