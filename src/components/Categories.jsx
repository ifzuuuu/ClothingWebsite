import React from 'react';
import '../css/Categories.css';

const categories = [
  {
    title: "Eyeglasses",
    subtitle: "Prescription & Fashion",
    image: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=400",
    gradient: "blue"
  },
  {
    title: "Sunglasses",
    subtitle: "UV Protection & Style",
    image: "https://images.pexels.com/photos/1674751/pexels-photo-1674751.jpeg?auto=compress&cs=tinysrgb&w=400",
    gradient: "orange"
  },
  {
    title: "Contact Lenses",
    subtitle: "Daily & Monthly",
    image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
    gradient: "green"
  },
  {
    title: "Kids Eyewear",
    subtitle: "Safe & Comfortable",
    image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400",
    gradient: "pink"
  }
];

const Categories = () => {
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
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
                <div className={`category-overlay`}></div>
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
