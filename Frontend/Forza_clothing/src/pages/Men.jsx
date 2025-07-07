import React from 'react'
import '../../css/Men.css'
import forza1 from "../components/images/forza1.png";
import forza2 from "../components/images/forza2.png";
import forza3 from "../components/images/forza3.png";
import forza4 from "../components/images/forza4.png";
import forza5 from "../components/images/forza5.png";
import forza6 from "../components/images/forza6.png";
import forza7 from "../components/images/forza7.png";
import forza8 from "../components/images/forza8.png";


const Men = () => {
  return (
    <div className="men-page">
      <h1 className="men-page h1">Mens wear</h1>
      <div className="men-products">
        {[
          { name: "Ultraboost", price: "$180", img: forza1 },
          { name: "Superstar", price: "$90", img: forza2 },
          { name: "Stan Smith", price: "$85", img: forza3 },
          { name: "Stan Smith", price: "$85", img: forza4 },
          { name: "Stan Smith", price: "$85", img: forza5 },
          { name: "Stan Smith", price: "$85", img: forza6 },
          { name: "Stan Smith", price: "$85", img: forza7 },
          { name: "Stan Smith", price: "$85", img: forza8 },
        ].map((product, index) => (
          <div key={index} className="men-product-card">
            <img src={product.img} alt={product.name} />
            <h3 className="men-product-card h2">{product.name}</h3>
            <p className="men-product-card .price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men