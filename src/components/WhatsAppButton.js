import React from 'react';
import './WhatsAppButton.css';

// Import the image directly
import whatsappIcon from './whatsapp/icons8-whatsapp-512.png'; // Adjust path based on file location

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
        src={whatsappIcon} // Now we are using the imported image directly
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </button>
  );
};

export default WhatsAppButton;
