import React, { useState } from 'react';
import Slider from './Slider';
import Form from './Form';
import './Card.css';

function Card({ product, language }) {
  const [expanded, setExpanded] = useState(false); // State to toggle expansion

  // Toggle expansion when clicking on the card (expand only)
  const handleExpand = () => setExpanded(true);

  // Close the expanded card only when clicking on the close button
  const handleClose = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the card
    setExpanded(false); // Collapse the card
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
      {/* Render the image or slider based on the expanded state */}
      {!expanded ? (
        <img 
          src={process.env.PUBLIC_URL + product.images[0]} 
          alt={product.title} 
          className="card-image" 
        />
      ) : (
        <Slider images={product.images} />
      )}

      <h2>{product.title}</h2>
      <p>{product.price}</p>

      {/* Render the expanded content if 'expanded' is true */}
      {expanded && (
        <div className="expanded-card">
          <h3 className='specs'>مشخصات</h3>
          {/* Add RTL class conditionally based on the selected language */}
          <ul className={language === 'dari' || language === 'pashto' ? 'rtl' : ''}>
            {product.specification[language].map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          {/* Pass `rtl` class to the Form component */}
          <Form language={language} rtl={language === 'dari' || language === 'pashto'} />
          
          {/* Close button, which calls handleClose */}
          <button className='close' onClick={handleClose}>X</button>
        </div>
      )}
    </div>
  );
}

export default Card;
