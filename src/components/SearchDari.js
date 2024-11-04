// src/components/SearchDari.js
import React from 'react';

function SearchDari({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value); // Updates search term in App.js
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="جستجو کنید..."
        onChange={handleInputChange}
      />
      <button type="button">جستجو</button>
    </div>
  );
}

export default SearchDari;
