import React from 'react';
import './imageCarousel.css';

import forza1 from '../components/images/forza1.png'
import forza2 from "../components/images/forza2.png";
import forza3 from "../components/images/forza3.png";
import forza4 from "../components/images/forza4.png";
import forza5 from "../components/images/forza5.png";
import forza6 from "../components/images/forza6.png";
import forza7 from "../components/images/forza7.png";
import forza8 from "../components/images/forza8.png";


const ImageCarousel = () => {
  const images = [forza1, forza2, forza3, forza4, forza5, forza6, forza7, forza8];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
