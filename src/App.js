// src/App.js
import React, { useState } from 'react';
import data from './data/data';
import LanguageToggle from './components/LanguageToggle';
import Search from './components/Search';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  const [language, setLanguage] = useState('dari');

  return (
    <div className="App">
      <Header />
      <div className="search-toggle-container">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        
        
      </div>
      <Search data={data} language={language} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
