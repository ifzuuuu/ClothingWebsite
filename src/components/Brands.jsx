import React from 'react';
import '../css/Brands.css'; // import the CSS file

const brands = [
  { name: "Zara", logo: "zara.jpg" },
  { name: "H&M", logo: "H&MTshirt.jpg" },
  { name: "Diesel", logo: "DieselJacket.jpg" },
  { name: "Nike", logo: "NikePullover.jpg" },
  { name: "Supreme", logo: "SupremeHoodie.jpg" },
  { name: "Gucci", logo: "GucciJacket.jpg" }
];

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-header">
          <h2>Premium Brands</h2>
          <p>We partner with the world's leading eyewear brands to bring you quality and style</p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-inner">
                <div className="brand-logo">
                  <img src={brand.logo} alt={brand.name} />
                </div>
                <p className="brand-name">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
