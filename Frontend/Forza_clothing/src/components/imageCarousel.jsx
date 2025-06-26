import React from 'react';
import './imageCarousel.css';

import prod1 from '../components/prod1.png';

const ImageCarousel = () => {
  const images = [
    prod1,
    prod1,
    prod1,
    prod1,
  ];

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
