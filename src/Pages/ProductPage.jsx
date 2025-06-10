import React, { useState } from 'react';
import  Header  from '../components/Header';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../components/Product';
import { products } from '../data/products';

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (productId, size, color, quantity) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(
      item => item.product.id === productId && item.size === size && item.color === color
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item === existingItem
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { product, size, color, quantity }]);
    }

    alert(`Added ${quantity} ${product.name} (${size}, ${color}) to cart!`);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedProduct(null);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-container">
      <Header cartCount={cartItemCount} onSearch={handleSearch} />

      {selectedProduct ? (
        <Product
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onBack={handleBackToProducts}
        />
      ) : (
        <main className="main-content">
          {searchQuery ? (
            <div className="search-results">
              <h2 className="section-title">Search Results for "{searchQuery}"</h2>
              <p className="result-count">{filteredProducts.length} products found</p>
            </div>
          ) : (
            <div className="featured-header">
              <h1 className="section-title">Featured Collection</h1>
              <p className="section-subtitle">Discover our latest fashion trends and styles</p>
            </div>
          )}

          <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
        </main>
      )}
    </div>
  );
}

export default ProductPage;
