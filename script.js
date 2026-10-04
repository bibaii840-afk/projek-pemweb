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

/* ===== 5. FORM PENDAFTARAN ===== */
const form = document.querySelector("#form-daftar");

if (form) {
  const pilihEvent = document.querySelector("#pilih-event");
  const pesan = document.querySelector("#pesan");
  const daftarPendaftar = document.querySelector("#daftar-pendaftar");

  function isiPilihan() {
    pilihEvent.innerHTML = "";
    for (const e of events) {
      pilihEvent.innerHTML += `<option value="${e.id}">${e.judul}</option>`;
    }
    const idDariUrl = new URLSearchParams(location.search).get("id");
    if (idDariUrl) pilihEvent.value = idDariUrl;
  }

  function tampilkanPendaftar() {
    if (pendaftar.length === 0) {
      daftarPendaftar.innerHTML = "<li>Belum ada pendaftar.</li>";
      return;
    }
    daftarPendaftar.innerHTML = "";
    for (const p of pendaftar) {
      daftarPendaftar.innerHTML += `<li>${p.nama} (${p.nim}) - ${p.judulEvent}</li>`;
    }
  }

  function tampilkanGalat(id, teks) {
    document.querySelector("#galat-" + id).textContent = teks;
    document.querySelector("#" + id).setAttribute("aria-invalid", teks !== "");
  }

  function formValid(nama, nim, email) {
    let valid = true;

    if (nama.length < 3) {
      tampilkanGalat("nama", "Nama minimal 3 karakter.");
      valid = false;
    } else {
      tampilkanGalat("nama", "");
    }

    if (nim.length < 8 || isNaN(nim)) {
      tampilkanGalat("nim", "NIM berupa angka, minimal 8 digit.");
      valid = false;
    } else {
      tampilkanGalat("nim", "");
    }

    if (!email.includes("@") || !email.includes(".")) {
      tampilkanGalat("email", "Masukkan email yang valid.");
      valid = false;
    } else {
      tampilkanGalat("email", "");
    }

    return valid;
  }

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const nama = document.querySelector("#nama").value.trim();
    const nim = document.querySelector("#nim").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (!formValid(nama, nim, email)) {
      pesan.textContent = "Periksa kembali isian kamu.";
      pesan.className = "pesan gagal";
      return;
    }

    const e = events.find((item) => item.id === Number(pilihEvent.value));

    if (e.kuota === 0) {
      pesan.textContent = "Kuota event ini sudah penuh. Pilih event lain.";
      pesan.className = "pesan gagal";
      return;
    }

    e.kuota = e.kuota - 1;
    pendaftar.push({ nama: nama, nim: nim, judulEvent: e.judul });

    pesan.textContent = "Terima kasih, kamu terdaftar di " + e.judul + ".";
    pesan.className = "pesan sukses";
    form.reset();
    tampilkanPendaftar();
  });

  isiPilihan();
  tampilkanPendaftar();
}
