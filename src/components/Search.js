import React, { useState } from 'react';
import stringSimilarity from 'string-similarity';
import Card from './Card';
import './Search.css';

function Search({ data, language }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Translation messages
  const instructions = {
    pashto: 'د محصول په اړه د نورو معلوماتو لپاره د محصول پر عکس کلیک وکړئ، او د محصول د غوښتنې لپاره فورمه ډکه کړئ او د لیږلو تڼۍ کلیک کړئ.',
    dari: 'برای کسب اطلاعات بیشتر درباره محصول، روی عکس محصول کلیک کنید و برای سفارش محصول، فرم موجود را پر کنید و دکمه ارسال را بزنید.',
  };

  // Filter data with fuzzy matching
  const filteredData = data
    ? data.filter((product) => {
        // Get similarity score between the search term and the product title
        const similarity = stringSimilarity.compareTwoStrings(
          product.title.toLowerCase(),
          searchTerm.toLowerCase()
        );

        // Only include products with a similarity score above a certain threshold
        // Adjust threshold as needed; 0.3 allows moderate misspellings
        return (
          similarity > 0.3 || product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    : [];

  return (
    <div className="search-container">
      <p className="instructions">{instructions[language]}</p>
      <input
        type="text"
        placeholder={language === 'pashto' ? 'محصولات ولټوئ...' : 'محصولات جستجو کنید...'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="search-results">
        {filteredData.map((product) => (
          <Card key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default Search;
