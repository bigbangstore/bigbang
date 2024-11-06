import React, { useState } from 'react';
import Fuse from 'fuse.js';
import HeaderDari from './components/HeaderDari';
import HeaderPashto from './components/HeaderPashto';
import SearchDari from './components/SearchDari';
import SearchPashto from './components/SearchPashto';
import Card from './components/Card'; // Import the Card component for earphones
import Card1 from './components/Card1'; // Watches
import Card2 from './components/Card2'; // Power banks
import WhatsAppButton from './components/WhatsAppButton'; // Adjust the import path as needed
import './App.css';

function App() {
  const [language, setLanguage] = useState('dari');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, title: "ساعت هوشمند 1", price: "$۷۰۰ افغانی", imgSrc: "smartwatches/smartwatch1.jpg", category: 'smartwatches' },
    { id: 2, title: "ساعت هوشمند 2", price: "500 افغانی", imgSrc: "smartwatches/smartwatch2.jpeg", category: 'smartwatches' },
    { id: 3, title: "ساعت هوشمند 3", price: "400 افغانی", imgSrc: "smartwatches/smartwatch3.jpeg", category: 'smartwatches' },
    { id: 4, title: "ساعت هوشمند 4", price: "1500 افغانی", imgSrc: "smartwatches/smartwatch3.jpeg", category: 'smartwatches' },
    
    // Example entries for earphones
    { id: 5, title: "ایرپاد پرو 2", price: "$۷۰۰ افغانی", imgSrc: "earphones/earphone1.jpg", category: 'earphones' },
    { id: 6, title: "ایرپاد پرو 3", price: "500 افغانی", imgSrc: "earphones/earphone2.jpg", category: 'earphones' },
    { id: 7, title: "ایرپاد پرو", price: "400 افغانی", imgSrc: "earphones/earphone1.jpg", category: 'earphones' },
    { id: 8, title: "مونستر", price: "1500 افغانی", imgSrc: "earphones/earphone2.jpg", category: 'earphones' },

    // Example entries for power banks
    { id: 9, title: "پاور بانک 1", price: "700 افغانی", imgSrc: "powerbanks/powerbank.jpg", category: 'powerbanks' },
    { id: 10, title: "پاور بانک 2", price: "500 افغانی", imgSrc: "powerbanks/powerbank1.jpeg", category: 'powerbanks' },
    { id: 11, title: "پاور بانک 3", price: "400 افغانی", imgSrc: "powerbanks/powerbank3.webp", category: 'powerbanks' },
    { id: 12, title: "پاور بانک 4", price: "1500 افغانی", imgSrc: "powerbanks/powerbank4.jpg", category: 'powerbanks' },
  ];

  const toggleLanguage = (lang) => setLanguage(lang);

  // Fuse.js setup
  const fuse = new Fuse(products, {
    keys: ['title'], // Set the key you want to search (e.g., title)
    threshold: 0.3,   // Set threshold for fuzziness. Lower = stricter matching
    includeScore: true, // Include score to see the relevance
  });

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    console.log("Search Term: ", term.toLowerCase()); // Log the search term
  };

  // Filter products using Fuse.js fuzzy search
  const filteredProducts = fuse.search(searchTerm).map(result => result.item);

  console.log("Filtered Products: ", filteredProducts); // Log filtered products

  return (
    <div className="app-container">
      {language === 'dari' ? <HeaderDari /> : <HeaderPashto />}

      <div className="search-and-language">
        {language === 'dari' ? (
          <SearchDari onSearch={handleSearch} />
        ) : (
          <SearchPashto onSearch={handleSearch} />
        )}

        <div className="language-switcher">
          <button
            onClick={() => toggleLanguage('dari')}
            className={language === 'dari' ? 'active' : ''}
          >
            دری
          </button>
          <button
            onClick={() => toggleLanguage('pashto')}
            className={language === 'pashto' ? 'active' : ''}
          >
            پښتو
          </button>
        </div>
      </div>

      <div className="product-categories">
        {searchTerm ? (
          <div className="search-results">
            {filteredProducts.map(product => (
              <div key={product.id} className="card">
                <img
                  src={require(`./components/images/${product.imgSrc}`)}
                  alt={product.title}
                  className="card-image"
                />
                <h3 className="card-title">{product.title}</h3>
                <p className="card-price">{product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <h2>گوشکی </h2>
            <Card products={products.filter(p => p.category === 'earphones')} />

            <h2>سات </h2>
            <Card1 products={products.filter(p => p.category === 'smartwatches')} />

            <h2>پاور بانک</h2>
            <Card2 products={products.filter(p => p.category === 'powerbanks')} />
          </>
        )}
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default App;
