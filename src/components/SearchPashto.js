// src/components/SearchPashto.js
import React from 'react';

function SearchPashto({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value); // Updates search term in App.js
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="لټون وکړئ..."
        onChange={handleInputChange}
      />
      <button type="button">لټون</button>
    </div>
  );
}

export default SearchPashto;
