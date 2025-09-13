import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import "./Home.css";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Function to determine slice based on screen width
    const updateFeaturedProducts = () => {
      if (window.innerWidth <= 768) {
        // Mobile: show 0 to 4
        setFeaturedProducts(productsData.slice(0, 4));
      } else {
        // Desktop/tablet: show 0 to 3
        setFeaturedProducts(productsData.slice(0, 3));
      }
    };

    updateFeaturedProducts(); // initial check

    // Update on window resize
    window.addEventListener("resize", updateFeaturedProducts);
    return () => window.removeEventListener("resize", updateFeaturedProducts);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 3000); // switch product every 3 seconds
    return () => clearInterval(interval);
  }, [featuredProducts]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Shop Smarter, Live Better</h1>
        <p className="hero-subtitle">
          Discover quality products at amazing prices. Your wishlist, delivered to your door!
        </p>
        <button
          className="hero-cta"
          onClick={() => (window.location.href = "/shop")}
        >
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className="featured-title">Featured Products</h2>
        <div className="products-grid home-products">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className={index === activeIndex ? "active" : "inactive"}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
