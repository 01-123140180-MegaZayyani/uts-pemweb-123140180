import React, { useState } from 'react';

function SearchForm({ onSearch, initialTerm }) {
  const SearchForm = ({ onSearch, initialTerm }) => {
      // Input 1 (Text): Judul Film
      const [searchTerm, setSearchTerm] = useState(initialTerm);
      
      // Input 2 (Number): Tahun
      const [searchYear, setSearchYear] = useState('');
      
      // Input 3 (Select/Dropdown): Tipe
      const [searchType, setSearchType] = useState(''); // movie, series, episode
      
      // Input 4 (Radio Button): Plot Length
      const [plotLength, setPlotLength] = useState('short'); 
      
      // Input 5 (Select/Dropdown, Baru): Genre
      const [searchGenre, setSearchGenre] = useState('');

      const handleSubmit = (e) => {
          e.preventDefault();
          onSearch(searchTerm, searchYear, searchType);
      };

      return (
          <div className="search-form-container">
              <form className="search-form" onSubmit={handleSubmit}>
                  <div className="search-form-grid">
                      
                      {/* INPUT 1: Judul Film (Text - Required) */}
                      <div className="form-group">
                          <label htmlFor="title">1. Judul Film (Wajib)</label>
                          <input
                              id="title"
                              type="text"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              placeholder="Contoh: The Matrix"
                              required
                          />
                      </div>

                      {/* INPUT 2: Tahun Rilis (Number - HTML5 Validation min/max) */}
                      <div className="form-group">
                          <label htmlFor="year">2. Tahun Rilis (Nomor)</label>
                          <input
                              id="year"
                              type="number"
                              value={searchYear}
                              onChange={(e) => setSearchYear(e.target.value)}
                              placeholder="Contoh: 1999"
                              min="1900"
                              max={new Date().getFullYear()} // Maksimal tahun saat ini
                          />
                      </div>
                      
                      {/* INPUT 3: Tipe Konten (Select/Dropdown) */}
                      <div className="form-group">
                          <label htmlFor="type">3. Tipe Konten (Pilihan)</label>
                          <select 
                              id="type"
                              value={searchType}
                              onChange={(e) => setSearchType(e.target.value)}
                          >
                              <option value="">Semua Tipe</option>
                              <option value="movie">Movie</option>
                              <option value="series">Series</option>
                              <option value="episode">Episode</option>
                          </select>
                      </div>

                      {/* INPUT 4: Plot Length (Radio Button) */}
                      <div className="form-group">
                          <label>4. Plot Detail (Radio Button)</label>
                          <div className="radio-group">
                              <label>
                                  <input 
                                      type="radio" 
                                      name="plot" 
                                      value="short" 
                                      checked={plotLength === 'short'} 
                                      onChange={(e) => setPlotLength(e.target.value)}
                                  /> 
                                  Singkat
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="plot" 
                                      value="full" 
                                      checked={plotLength === 'full'} 
                                      onChange={(e) => setPlotLength(e.target.value)}
                                  /> 
                                  Penuh
                              </label>
                          </div>
                      </div>
                      
                      {/* INPUT 5: Genre (Select/Dropdown) */}
                      <div className="form-group">
                          <label htmlFor="genre">5. Genre (Pilihan)</label>
                          <select
                              id="genre"
                              value={searchGenre}
                              onChange={(e) => setSearchGenre(e.target.value)}
                          >
                              <option value="">Semua Genre</option>
                              <option value="action">Action</option>
                              <option value="comedy">Comedy</option>
                              <option value="drama">Drama</option>
                              <option value="horror">Horror</option>
                              <option value="scifi">Sci-Fi</option>
                              <option value="thriller">Thriller</option>
                          </select>
                      </div>

                  </div>
                  
                  {/* Submit Button */}
                  <div className="submit-button-container">
                      <button type="submit">Cari Film (5 Kriteria Input Terpenuhi)</button>
                  </div>
              </form>
          </div>
      );
  };
}

export default SearchForm;