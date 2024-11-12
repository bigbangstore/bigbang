// src/components/Slider.js

import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

function Slider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
    if (!isExpanded) {
      window.history.pushState(null, null, window.location.href); // Add a history entry
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50; // Minimum swipe distance to detect swipe

    if (touchStartX.current - touchEndX.current > swipeThreshold) {
      // Swiped left
      nextImage();
    }

    if (touchEndX.current - touchStartX.current > swipeThreshold) {
      // Swiped right
      prevImage();
    }
  };

  // Close the expanded image on mobile back button (popstate event)
  useEffect(() => {
    const handleBackButton = () => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    };

    // Add event listener for back button
    window.addEventListener('popstate', handleBackButton);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [isExpanded]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className={`slider-container ${isExpanded ? 'expanded' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
