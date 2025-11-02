import React from 'react';
// Import ReactDOM Client untuk me-render aplikasi ke DOM
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx'; // Mengimpor komponen utama
import './index.css'; // Opsional: Untuk styling reset atau global body

// Mendapatkan elemen root dari index.html
const rootElement = document.getElementById('root');

// Membuat root React
const root = ReactDOM.createRoot(rootElement);

// Render komponen utama App ke root
// StrictMode membantu menemukan potensi masalah pada kode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);