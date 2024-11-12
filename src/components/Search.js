// src/components/Search.js
import React, { useState } from 'react';
import Card from './Card';
import './Search.css';

function Search({ data, language }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Ensure `data` exists before attempting to filter
  const filteredData = data ? data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
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
