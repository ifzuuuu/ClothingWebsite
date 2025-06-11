// ShoppingCart.js
import React from 'react';
import '../css/ShoppingCart.css';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

const ShoppingCart = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button onClick={onClose} className="icon-button">
            <X className="icon" />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag className="empty-icon" />
              <h3>Your cart is empty</h3>
              <p>Add some items to get started!</p>
              <button onClick={onClose} className="primary-button">Continue Shopping</button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>Color: {item.selectedColor}</p>
                      <p>Size: {item.selectedSize}</p>
                      <div className="item-actions">
                        <div className="quantity-controls">
                          <button onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))} className="icon-button">
                            <Minus className="icon" />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="icon-button">
                            <Plus className="icon" />
                          </button>
                        </div>
                        <div className="price-actions">
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                          <button onClick={() => onRemoveItem(item.id)} className="remove-button">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="primary-button">Checkout</button>
                <button onClick={onClose} className="secondary-button">Continue Shopping</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
