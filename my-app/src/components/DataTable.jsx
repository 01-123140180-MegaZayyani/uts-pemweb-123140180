import React from 'react';

function DataTable({ movies, onSelectMovie, toggleFavorite }) {
  return (
    <div className="movie-grid"> 
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x450?text=No+Poster'} 
            alt={`Poster ${movie.Title}`}
            // Fitur Wajib 3: Trigger modal detail saat poster diklik
            onClick={() => onSelectMovie(movie.imdbID)}
          />
          <div className="card-info">
            <h4>{movie.Title}</h4>
            <p>Tahun: {movie.Year}</p>
            
            {/* Fitur Wajib 4: Tombol Favorit */}
            <button 
              onClick={(e) => { 
                e.stopPropagation(); // Mencegah pemicu detail
                toggleFavorite(movie.imdbID); 
              }}
              className={movie.isFavorite ? 'btn-favorite active' : 'btn-favorite'}
            >
              {movie.isFavorite ? '❤️ Hapus Favorit' : '🤍 Tambah Favorit'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataTable;