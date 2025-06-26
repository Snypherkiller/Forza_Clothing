import React from 'react';
import '../../css/Home.css';
import ImageCarousel from '../components/imageCarousel';

import prod from '../components/prod.png';
const Home = () => {
  const scrollToProducts = () => {
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <ImageCarousel/>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Impossible is Nothing</h1>
          <p>Explore the latest collection from Adidas.</p>
          <button onClick={scrollToProducts}>Explore Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {[
            { name: "Ultraboost", price: "$180", img: prod },
            { name: "Superstar", price: "$90", img: prod },
            { name: "Stan Smith", price: "$85", img: prod },
          ].map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Forza. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
