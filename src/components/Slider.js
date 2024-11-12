// src/components/Slider.js

import React, { useState } from 'react';
import './Slider.css';

function Slider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`slider-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="image-counter">
        {currentImageIndex + 1} / {images.length}
      </div>

      <button className="slider-button prev" onClick={prevImage}>
        &#10094;
      </button>
      
      <img
        src={process.env.PUBLIC_URL + images[currentImageIndex]}
        alt={`Product ${currentImageIndex + 1}`}
        className="slider-image"
        onClick={toggleExpand}
      />

      <button className="slider-button next" onClick={nextImage}>
        &#10095;
      </button>

      {isExpanded && (
        <div className="expanded-overlay" onClick={toggleExpand}>
          <div className="expanded-image-container" onClick={(e) => e.stopPropagation()}>
            <div className="expanded-controls">
              <button className="slider-button prev" onClick={prevImage}>
                &#10094;
              </button>
              <button className="slider-button next" onClick={nextImage}>
                &#10095;
              </button>
            </div>
            <img
              src={process.env.PUBLIC_URL + images[currentImageIndex]}
              alt={`Product ${currentImageIndex + 1}`}
              className="expanded-image"
            />
            
            {/* Thumbnail Gallery */}
            <div className="thumbnail-gallery">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={process.env.PUBLIC_URL + image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail-image ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => selectImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
