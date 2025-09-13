// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      {/* Updated heading */}
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                {/* Image container with white background */}
                <div className="cart-item-image-container">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                </div>

                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="cart-actions">
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total price */}
          <h2 className="cart-total">Total: ${totalPrice.toFixed(2)}</h2>

          {/* Payment section */}
          <div className="payment-section">
            <h3>Proceed to Payment</h3>
            <p>Select a payment method:</p>
            <div className="payment-options">
              <button className="payment-btn">Credit/Debit Card</button>
              <button className="payment-btn">UPI</button>
              <button className="payment-btn">Net Banking</button>
              <button className="payment-btn">Cash on Delivery</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
