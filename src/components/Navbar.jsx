// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext); // Get cart from context
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          MarketKit
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`navbar__nav ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar__link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/shop" className="navbar__link" onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link to="/cart" className="navbar__link navbar__cart" onClick={() => setIsMenuOpen(false)}>
            Cart
            {cartCount > 0 && (
              <span className="navbar__cart-count">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
