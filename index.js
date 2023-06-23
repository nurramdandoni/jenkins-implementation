const express = require('express');
const app = express();
const port = 4000;

// Endpoint "welcome"
app.get('/welcome', (req, res) => {
  res.send('Selamat datang di API sederhana With Jenkins (Auto Deploy Every Commit/ Merge), Semangattttttt!');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
