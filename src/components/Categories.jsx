import React from 'react';
import '../css/Categories.css';
import { useNavigate } from 'react-router-dom';


const categories = [
  {
    title: "Kid's wear",
    subtitle: "Prescription & Fashion eyewear for kids",
    image: "Kids.jpg",
    gradient: "blue"
  },
  {
    title: "Men's wear",
    subtitle: "UV Protection & Stylish eyewear for men",
    image: "Mens.jpg",
    gradient: "orange"
  },
  {
    title: "Women's wear",
    subtitle: "Daily & Monthly eyewear options for women",
    image: "Womens.jpg",
    gradient: "green"
  },
  {
    title: "Gym's wear",
    subtitle: "Safe & Comfortable eyewear for gym-goers",
    image: "Gym.jpg",
    gradient: "pink"
  }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle) => {
    if (categoryTitle === "Kid's wear") {
      navigate('/KidsProduct');
    }
  };

  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className="categories-header">
          <h2>Shop by Category</h2>
          <p>Find the perfect eyewear for every need and style preference</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-card group gradient-${category.gradient}`}
              onClick={() => handleCategoryClick(category.title)}
              style={{ cursor: 'pointer' }}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
                <div className="category-overlay"></div>
              </div>

              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
                <div className="shop-now">Shop Now →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Categories;
