import React, { useState } from 'react';
import HeaderDari from './components/HeaderDari';
import HeaderPashto from './components/HeaderPashto';
import SearchDari from './components/SearchDari';
import SearchPashto from './components/SearchPashto';
import Card from './components/Card'; // Import the Card component for earphones
import Card1 from './components/Card1'; // Import the Card component for watches
import Card2 from './components/Card2'; // Import the Card component for watches
import './App.css';

function App() {
  const [language, setLanguage] = useState('dari');

  const toggleLanguage = (lang) => setLanguage(lang);

  return (
    <div className="app-container">
      {language === 'dari' ? <HeaderDari /> : <HeaderPashto />}

      <div className="search-and-language">
        {language === 'dari' ? <SearchDari /> : <SearchPashto />}

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
        <h2>گوشکی </h2>
        <Card /> {/* Render the self-contained Card component */}
      
        <h2>سات </h2>
        <Card1 /> {/* Render the self-contained Card component */}
        
        <h2>پاور بانک</h2>
        <Card2 /> {/* Render the self-contained Card component */}
      </div>
    </div>
  );
}

export default App;