/* ===== 1. DATA (Array of Objects) ===== */
const events = [
  { id: 1, judul: "Seminar AI untuk Mahasiswa", kategori: "seminar", tanggal: "10 November 2026", kuota: 50, gambar: "img/seminar-1.jpg" },
  { id: 2, judul: "Lomba Coding Antar Kampus", kategori: "lomba", tanggal: "20 November 2026", kuota: 0 },
  { id: 3, judul: "Workshop UI/UX dengan Figma", kategori: "workshop", tanggal: "25 November 2026", kuota: 2 },
  { id: 4, judul: "Seminar Karier Teknologi", kategori: "seminar", tanggal: "2 Desember 2026", kuota: 30, gambar: "img/seminar-2.jpg" },
  { id: 5, judul: "Lomba Desain Poster", kategori: "lomba", tanggal: "8 Desember 2026", kuota: 15 },
  { id: 6, judul: "Workshop Web Dasar", kategori: "workshop", tanggal: "15 Desember 2026", kuota: 20 },
];

const pendaftar = [];

let kategoriAktif = "semua";
let kataCari = "";
