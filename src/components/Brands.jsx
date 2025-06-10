import React from 'react';
import '../css/Brands.css'; // import the CSS file

const brands = [
  { name: "RayBan", logo: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Oakley", logo: "https://images.pexels.com/photos/1674751/pexels-photo-1674751.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Gucci", logo: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Prada", logo: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Tom Ford", logo: "https://images.pexels.com/photos/1663455/pexels-photo-1663455.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Versace", logo: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=200" }
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
