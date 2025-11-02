# Movie Database Explorer 

🧑‍💻 Author
Mega Zayyani (123140180)
Program Studi Informatika — Institut Teknologi Sumatera
📧 mega.123140180@student.itera.ac.id

🌐 Link Deployment Vercel
Aplikasi ini di-deploy menggunakan Vercel, memastikan penggunaan Environment Variable yang aman untuk API Key.
Link deployment: uts-pemweb-123140180.vercel.app

📝 Deskripsi Proyek
Aplikasi Movie Database Explorer ini adalah katalog film berbasis web yang dibangun menggunakan ReactJS dan OMDb API. Tujuannya adalah untuk memungkinkan pengguna mencari film, melihat detail, dan mengelola daftar film favorit secara lokal.

✅Fitur Wajib yang Terimplementasi:
1. Form Pencarian: Input teks untuk judul dan filter opsional untuk tahun rilis.
2. Tabel Hasil: Menampilkan hasil dalam Grid Layout yang berisi Poster, Judul, Tahun, dan Rating.
3. Detail Film: Menampilkan detail lengkap film dalam Card/Modal saat diklik.
4. Fitur Favorit: Tombol untuk menambah/menghapus film favorit, data dipertahankan menggunakan LocalStorage.
5. Responsif: Tata letak grid dan detail berfungsi mulus di desktop dan mobile.

💻 Cara Instalasi dan Menjalankan
Langkah-langkah ini mengasumsikan Anda sudah memiliki Node.js dan npm terinstal di sistem Anda.
A. Setup Awal dan Kunci API
  1. Clone Repository: Unduh kode proyek ke mesin lokal Anda.
     ```bash
     git clone https://github.com/01-123140180-MegaZayyani/uts-pemweb-123140180
     ```
  3. Dapatkan API Key: Registrasi di OMDb API (https://www.omdbapi.com/) untuk mendapatkan kunci API gratis.
     - Klik "API KEY" kemudian isi email untuk mendapatkan API
     - Terima Kunci: Kunci API (berupa string alfanumerik pendek, misalnya a1b2c3d4) akan dikirimkan ke email Anda.
  4. Konfigurasi .env: Buat file .env di root folder (my-app/) dan masukkan kunci Anda (jangan hardcode di kode).
     ```code snippet
     # .env
     REACT_APP_API_KEY=KUNCI_ANDA_DI_SINI
     ```
B. Instalasi Dependensi dan Menjalankan
  1. Instalasi: Unduh semua library yang terdaftar di package.json ke folder node_modules/.
     ```bash
     npm i
     atau
     npm install
     ```
  2. Jalankan Server: Mulai development server lokal.
     ``` bash
     npm start
     ```
  3. Akses: Aplikasi akan terbuka otomatis di browser Anda pada http://localhost:3000.

Screenshot Aplikasi
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/6d1242b5-08e2-4b3c-b103-19df9c4acbd5" />
