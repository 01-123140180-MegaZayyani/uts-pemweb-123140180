import React, { useState } from 'react';

function SearchForm({ onSearch, initialTerm }) {
  const [inputTerm, setInputTerm] = useState(initialTerm);
  const [inputYear, setInputYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form Validation (Checklist)
    if (inputTerm.trim() === "") {
        alert("Judul film tidak boleh kosong!");
        return;
    }
    
    // Panggil fungsi pencarian di App.jsx
    onSearch(inputTerm, inputYear);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Cari Judul Film..."
        value={inputTerm}
        onChange={(e) => setInputTerm(e.target.value)}
        aria-label="Judul Film"
      />
      <input
        type="number"
        placeholder="Tahun (Opsional)"
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
        aria-label="Tahun Film"
        min="1888" 
        max={new Date().getFullYear()}
      />
      <button type="submit">Cari</button>
    </form>
  );
}

export default SearchForm;