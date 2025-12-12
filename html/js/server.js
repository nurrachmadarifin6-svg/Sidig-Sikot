const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Untuk membaca data dari form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Folder public berisi seluruh file HTML, CSS, JS, Gambar
app.use(express.static(path.join(__dirname, "public")));

// ROUTE UTAMA (untuk membuka index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/*
  ENDPOINT UNTUK FORM ALUMNI
  (kamu tinggal ganti penyimpanannya, misal ke database, Google Sheet, dsb)
*/
app.post("/api/alumni", (req, res) => {
  const { nama, alamat, wa } = req.body;

  console.log("Data alumni masuk:");
  console.log("Nama:", nama);
  console.log("Alamat:", alamat);
  console.log("WA:", wa);

  // sementara kita hanya kirim respon sukses
  res.json({ success: true, message: "Data alumni berhasil diterima server" });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});