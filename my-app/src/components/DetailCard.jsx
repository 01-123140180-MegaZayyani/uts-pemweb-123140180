import React from 'react';

function DetailCard({ movie, onClose, isFavorite, toggleFavorite }) {
    if (!movie) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="detail-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                
                <h2>{movie.Title} ({movie.Year})</h2>
                
                <div className="detail-content">
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x450?text=No+Poster'} alt={`Poster ${movie.Title}`} />
                    
                    <div>
                        <p><strong>Rating IMDb:</strong> {movie.imdbRating} / 10 ({movie.imdbVotes} votes)</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Sutradara:</strong> {movie.Director}</p>
                        <p><strong>Aktor:</strong> {movie.Actors}</p>
                        <p><strong>Plot:</strong> {movie.Plot}</p>
                        
                        {/* Tombol Favorit di Detail */}
                        <button 
                            onClick={() => toggleFavorite(movie.imdbID)}
                            className={isFavorite ? 'btn-favorite active' : 'btn-favorite'}
                        >
                            {isFavorite ? '❤️ Hapus dari Favorit' : '🤍 Tambah ke Favorit'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;