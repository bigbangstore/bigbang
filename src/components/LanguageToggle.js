// src/components/LanguageToggle.js
import React from 'react';
import './LanguageToggle.css';

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="language-toggle">
      <button
        className={language === 'dari' ? 'active' : ''}
        onClick={() => setLanguage('dari')}
      >
        دری
      </button>
      <button
        className={language === 'pashto' ? 'active' : ''}
        onClick={() => setLanguage('pashto')}
      >
        پشتو
      </button>
    </div>
  );
}

export default LanguageToggle;
