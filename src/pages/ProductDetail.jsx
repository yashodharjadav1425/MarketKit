import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import { CartContext } from "../context/CartContext"; // import your context
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === parseInt(productId));
  const [isExpanded, setIsExpanded] = useState(false);

  const { addToCart } = useContext(CartContext); // get addToCart function

  if (!product)
    return <div className="product-detail-container">Product not found!</div>;

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const maxLength = 150;
  const displayDescription =
    isExpanded || product.description.length <= maxLength
      ? product.description
      : product.description.slice(0, maxLength) + "...";

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    alert(`${product.title} added to cart!`); // Optional confirmation
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-flex">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h1>{product.title}</h1>

          <p className="product-description" onClick={toggleReadMore}>
            {displayDescription}{" "}
            {product.description.length > maxLength && (
              <span className="read-more-text">
                {isExpanded ? "Read Less" : "Read More"}
              </span>
            )}
          </p>

          <p className="product-price">Price: ${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
