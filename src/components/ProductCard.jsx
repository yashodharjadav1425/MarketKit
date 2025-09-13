import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Navigate to product details page
  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  // Add product to cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <div className="actions">
        <button onClick={handleViewDetails} className="view-btn">
          View
        </button>
        <button onClick={handleAddToCart} className="cart-btn">
          Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
