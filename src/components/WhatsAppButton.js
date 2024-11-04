// WhatsAppButton.js

import React from 'react';
import './styles/WhatsAppButton.css';
import whatsappIcon from './images/whatsapp/icons8-whatsapp-512.png'; // Adjust the path based on where you saved the icon
const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // Replace this with your WhatsApp Business number
    const phoneNumber = '93790958221'; // e.g., '1234567890'
    const message = encodeURIComponent('سلام! چطور می توانم کمک کنم؟'); // Customize the default message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Open in a new tab
  };

  return (
    <button className="whatsapp-button" onClick={openWhatsApp}>
      <img
        src={whatsappIcon} // WhatsApp logo
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </button>
  );
};

export default WhatsAppButton;
