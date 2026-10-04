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

/* ===== 2. MENU HAMBURGER ===== */
const tombolMenu = document.querySelector("#menu-toggle");
const menuNav = document.querySelector("#nav-menu");

tombolMenu.addEventListener("click", () => {
  menuNav.classList.toggle("aktif");
  const terbuka = menuNav.classList.contains("aktif");
  tombolMenu.setAttribute("aria-expanded", terbuka);
});

/* ===== 3. TAMPILKAN DAFTAR EVENT ===== */
const wadah = document.querySelector("#daftar-event");

function tampilkanEvent() {
  if (!wadah) return;

  // Perulangan + percabangan: pilih event yang cocok dengan filter dan pencarian
  let hasil = [];
  for (const e of events) {
    const cocokKategori = kategoriAktif === "semua" || e.kategori === kategoriAktif;
    const cocokKata = e.judul.toLowerCase().includes(kataCari.toLowerCase());
    if (cocokKategori && cocokKata) {
      hasil.push(e);
    }
  }

  // Di beranda hanya tampil 3 event (lihat data-batas di HTML)
  if (wadah.dataset.batas) {
    hasil = hasil.slice(0, Number(wadah.dataset.batas));
  }

  if (hasil.length === 0) {
    wadah.innerHTML = "<p>Event tidak ditemukan. Coba kata kunci lain.</p>";
    return;
  }

  let html = "";
  for (const e of hasil) {
    let status = "";
    let tombol = "";
    if (e.kuota > 0) {
      status = '<span class="status tersedia">Tersedia</span>';
      tombol = `<a class="btn btn-kecil" href="daftar.html?id=${e.id}">Daftar</a>`;
    } else {
      status = '<span class="status penuh">Penuh</span>';
      tombol = '<a class="btn btn-kecil" aria-disabled="true">Kuota penuh</a>';
    }

    html += `
      <article class="kartu">
        <img src="${e.gambar || ''}" alt="Gambar ${e.kategori}">
        <div class="kartu-isi">
          <h3>${e.judul}</h3>
          <p class="meta">${e.tanggal} | Sisa kuota: ${e.kuota}</p>
          ${status}
          ${tombol}
        </div>
      </article>`;
  }
  wadah.innerHTML = html;
}

/* ===== 4. FILTER DAN PENCARIAN ===== */
const semuaChip = document.querySelectorAll(".chip");

semuaChip.forEach((chip) => {
  chip.addEventListener("click", () => {
    kategoriAktif = chip.dataset.kategori;
    semuaChip.forEach((c) => c.setAttribute("aria-pressed", "false"));
    chip.setAttribute("aria-pressed", "true");
    tampilkanEvent();
  });
});

const kolomCari = document.querySelector("#cari");
if (kolomCari) {
  kolomCari.addEventListener("input", () => {
    kataCari = kolomCari.value;
    tampilkanEvent();
  });
}

tampilkanEvent();
