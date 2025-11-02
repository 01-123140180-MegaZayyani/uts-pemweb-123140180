import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header.jsx';
import SearchForm from './components/SearchForm.jsx';
import DataTable from './components/DataTable.jsx';
import DetailCard from './components/DetailCard.jsx';
import './App.css'; 

// Ambil API Key. INI WAJIB MELALUI ENVIRONMENT VARIABLE (Ketentuan Anti-Hardcode).
const API_KEY = REACT_APP_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;


function App() {
  // State untuk pencarian, data, dan status
  const [searchTerm, setSearchTerm] = useState('inception'); // Default search
  const [searchYear, setSearchYear] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // State untuk detail film
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [movieDetail, setMovieDetail] = useState(null);
  
  // State untuk daftar favorit (Fitur Wajib 4)
  const [favorites, setFavorites] = useState([]);

  // useEffect 1: Memuat favorit dari LocalStorage saat inisialisasi
  useEffect(() => {
    // Mengambil data dari localStorage dan mengkonversinya dari JSON string ke Array
    const savedFavorites = JSON.parse(localStorage.getItem('omdbFavorites')) || [];
    setFavorites(savedFavorites);
  }, []); 

  // Fungsi untuk menambah/menghapus favorit dan menyimpannya ke LocalStorage (Fitur Wajib 4)
  const toggleFavorite = useCallback((imdbID) => {
    let newFavorites;
    if (favorites.includes(imdbID)) {
      // Hapus dari favorit
      newFavorites = favorites.filter(id => id !== imdbID);
    } else {
      // Tambah ke favorit
      newFavorites = [...favorites, imdbID];
    }
    
    setFavorites(newFavorites);
    // Simpan data favorit yang baru ke LocalStorage dalam bentuk string JSON
    localStorage.setItem('omdbFavorites', JSON.stringify(newFavorites));
  }, [favorites]);

  // Fungsi utama untuk Fetching Data Pencarian Film (s=search)
  const fetchMovies = useCallback(async () => {
    if (!searchTerm) return;

    if (!API_KEY || API_KEY.includes('API_KEY')) {
        setError(' API Key belum dikonfigurasi di Environment Variable (REACT_APP_API_KEY).');
        return (
            <div className="app-container">
                <Header />
                <main>
                    <div className="api-error-box">
                        <h2 className="error-message">Deployment Error: API Key Hilang</h2>
                        <p>Kunci API OMDB (**REACT_APP_API_KEY**) gagal dimuat dari Environment Variables Vercel.</p>
                        <p>Pastikan Anda sudah mengaturnya dengan benar di *Project Settings* Vercel dan me-redeploy.</p>
                    </div>
                </main>
            </div>
        );
    }

    setIsLoading(true);
    setError(null);
    setMovies([]);
    
    const yearQuery = searchYear ? `&y=${searchYear}` : '';
    const url = `${BASE_URL}&s=${encodeURIComponent(searchTerm)}${yearQuery}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'Film tidak ditemukan.');
      }
    } catch (err) {
      setError('Gagal mengambil data dari API. Cek koneksi Anda.');
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, searchYear]);

  // useEffect 2: Panggil fetchMovies setiap kali searchTerm atau searchYear berubah
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // useEffect 3: Fetching Detail Film saat selectedMovieId berubah (i=ID)
  useEffect(() => {
    if (!selectedMovieId) {
      setMovieDetail(null);
      return;
    }

    const fetchDetail = async () => {
        try {
            const url = `${BASE_URL}&i=${selectedMovieId}&plot=full`; 
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "True") {
                setMovieDetail(data);
            }
        } catch (err) {
            console.error('Error fetching detail:', err);
        }
    };
    fetchDetail();
  }, [selectedMovieId]);

  // Fungsi untuk menerima input dari SearchForm
  const handleSearch = (newSearchTerm, newSearchYear) => {
    setSearchTerm(newSearchTerm);
    setSearchYear(newSearchYear);
    setSelectedMovieId(null);
  };
  
  // Menambahkan status favorit ke data film untuk rendering
  const moviesWithFavoriteStatus = movies.map(movie => ({
      ...movie,
      isFavorite: favorites.includes(movie.imdbID)
  }));


  return (
    <div className="app-container">
      <Header />
      <main>
        {/* Fitur Wajib 1: Form Pencarian */}
        <SearchForm onSearch={handleSearch} initialTerm={searchTerm} />

        {/* Status Loading dan Error */}
        {isLoading && <p className="status-message">Sedang mencari film...</p>}
        {error && <p className="status-message error-message">Error: {error}</p>}

        {/* Fitur Wajib 2 & 5: Hasil Pencarian (Grid Responsive) */}
        {!isLoading && !error && movies.length > 0 && (
          <DataTable 
            movies={moviesWithFavoriteStatus} 
            onSelectMovie={setSelectedMovieId} 
            toggleFavorite={toggleFavorite}
          />
        )}
        
        {/* Fitur Wajib 3: Detail Film (Modal) */}
        {selectedMovieId && movieDetail && (
          <DetailCard 
            movie={movieDetail} 
            onClose={() => setSelectedMovieId(null)} 
            isFavorite={favorites.includes(selectedMovieId)}
            toggleFavorite={toggleFavorite}
          />
        )}
      </main>
    </div>
  );
}

export default App;