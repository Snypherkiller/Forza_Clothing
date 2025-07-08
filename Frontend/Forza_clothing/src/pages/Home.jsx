import React, { useState } from "react";
import "../../css/Home.css";
import ImageCarousel from "../components/imageCarousel";

import prod from "../components/prod.png";
import NBA1 from "../components/images/NBA1.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleExploreClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/new-arrivals");
    }, 1200); // Delay to show loading spinner before navigating
  };

  return (
    <div>
      <div>
        {/* Hero Section */}
        <img src={NBA1} alt="Forza skinny" className="hero-img" />
        <section className="hero">
          <div className="hero-text">
            <h1>Impossible is Nothing</h1>
            <p>Explore the latest collection from Forza.</p>
            <button onClick={handleExploreClick} disabled={loading}>
              {loading ? <div className="spinner"></div> : "Explore Now"}
            </button>
          </div>
        </section>
        <ImageCarousel />

        {/* Featured Products */}
        <section id="featured" className="products">
          <h2 className="products-h2">Featured Products</h2>
          <div className="product-grid">
            {[
              { name: "Ultraboost", price: "$180", img: prod },
              { name: "Superstar", price: "$90", img: prod },
              { name: "Stan Smith", price: "$85", img: prod },
            ].map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.img} alt={product.name} />
                <h3 className="products-h2">{product.name}</h3>
                <p className="products-h2">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
