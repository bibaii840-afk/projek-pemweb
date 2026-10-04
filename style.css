:root {
  --utama: #4F46E5;
  --utama-gelap: #3730A3;
  --aksen: #F59E0B;
  --netral: #EEF2FF;
  --teks: #1E1B4B;
  --teks-redup: #4B5563;
  --sukses: #166534;
  --galat: #B91C1C;
  --putih: #FFFFFF;
  --font-heading: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  --spasi-1: 8px;
  --spasi-2: 16px;
  --spasi-3: 24px;
  --spasi-4: 32px;
  --radius: 8px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--teks);
  background: var(--putih);
  line-height: 1.6;
}

h1, h2, h3 { font-family: var(--font-heading); line-height: 1.25; margin: 0 0 var(--spasi-1); }
h1 { font-size: 1.75rem; }
h2 { font-size: 1.375rem; }
h3 { font-size: 1.05rem; }
p { margin: 0 0 var(--spasi-1); }
a { color: var(--utama); }

:focus-visible { outline: 3px solid var(--aksen); outline-offset: 2px; }

.sr-only {
  position: absolute; width: 1px; height: 1px; overflow: hidden;
  clip: rect(0 0 0 0); white-space: nowrap;
}

/* Header dan navigasi (Flexbox) */
.situs-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--spasi-2) var(--spasi-3);
  border-bottom: 1px solid #E5E7EB;
  background: var(--putih);
}
.logo { font-family: var(--font-heading); font-weight: 600; font-size: 1.25rem; color: var(--utama); text-decoration: none; }
.menu-toggle {
  background: none; border: 1px solid var(--utama); color: var(--utama);
  border-radius: var(--radius); padding: var(--spasi-1) var(--spasi-2);
  font: inherit; cursor: pointer;
}
.nav-menu { display: none; width: 100%; }
.nav-menu.aktif { display: block; }
.nav-menu ul { list-style: none; margin: var(--spasi-2) 0 0; padding: 0; display: flex; flex-direction: column; gap: var(--spasi-1); }
.nav-menu a { display: block; padding: var(--spasi-1) 0; text-decoration: none; color: var(--teks); font-weight: 500; }
.nav-menu a:hover, .nav-menu a[aria-current="page"] { color: var(--utama); }

main { padding: var(--spasi-3); max-width: 1100px; margin: 0 auto; }
section { margin-bottom: var(--spasi-4); }

/* Hero */
.hero {
  background: var(--utama); color: var(--putih);
  border-radius: 12px; padding: var(--spasi-4) var(--spasi-3);
}
.hero h1, .hero p { color: var(--putih); }
.hitung { font-weight: 500; color: #FDE68A; }

/* Tombol */
.btn {
  display: inline-block; border: 0; border-radius: var(--radius);
  background: var(--utama); color: var(--putih);
  font: 500 1rem var(--font-body); padding: 10px var(--spasi-3);
  text-decoration: none; cursor: pointer; transition: background .15s;
}
.btn:hover { background: var(--utama-gelap); }
.btn-aksen { background: var(--aksen); color: #412402; }
.btn-aksen:hover { background: #D98A06; }
.btn-kecil { padding: 6px var(--spasi-2); font-size: .9rem; }
.btn[aria-disabled="true"] { background: #D1D5DB; color: #4B5563; pointer-events: none; }

/* Filter dan pencarian (Flexbox) */
.filter { display: flex; flex-wrap: wrap; gap: var(--spasi-1); margin-bottom: var(--spasi-2); }
.chip {
  border: 1px solid var(--utama); background: var(--netral); color: var(--utama-gelap);
  border-radius: 999px; padding: 6px var(--spasi-2); font: 500 .9rem var(--font-body); cursor: pointer;
}
.chip[aria-pressed="true"] { background: var(--utama); color: var(--putih); }
.cari {
  width: 100%; max-width: 420px; margin-bottom: var(--spasi-3);
  padding: 10px 12px; font: inherit;
  border: 1px solid #9CA3AF; border-radius: var(--radius);
}

/* Daftar kartu (CSS Grid): mobile 1 kolom */
.daftar-event { display: grid; gap: var(--spasi-3); grid-template-columns: 1fr; }
.kartu {
  border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden;
  background: var(--putih); display: flex; flex-direction: column;
  transition: border-color .15s, transform .15s;
}
.kartu:hover { border-color: var(--utama); transform: translateY(-2px); }
.kartu img {
  width: 100%; height: 130px; object-fit: cover; display: block;
  background: var(--netral); color: var(--utama-gelap);
  font-weight: 500; text-align: center; line-height: 130px;
}
.kartu-isi { padding: var(--spasi-2); display: flex; flex-direction: column; gap: 4px; flex: 1; }
.kartu-isi .btn { margin-top: auto; align-self: flex-start; }
.meta { color: var(--teks-redup); font-size: .9rem; }
.status { display: inline-block; font-size: .8rem; font-weight: 500; padding: 2px 10px; border-radius: 999px; align-self: flex-start; }
.status.tersedia { background: #DCFCE7; color: #14532D; }
.status.penuh { background: #FEE2E2; color: #7F1D1D; }
.kosong { color: var(--teks-redup); padding: var(--spasi-3) 0; }

/* Form */
.form-grid { display: grid; gap: var(--spasi-2); grid-template-columns: 1fr; max-width: 560px; }
.field label { display: block; font-weight: 500; margin-bottom: 4px; }
.field input, .field select {
  width: 100%; padding: 10px 12px; font: inherit;
  border: 1px solid #9CA3AF; border-radius: var(--radius); background: var(--putih);
}
.field input[aria-invalid="true"] { border-color: var(--galat); }
.galat { color: var(--galat); font-size: .875rem; min-height: 1.2em; display: block; }
.pesan { margin-top: var(--spasi-2); font-weight: 500; }
.pesan.sukses { color: var(--sukses); }
.pesan.gagal { color: var(--galat); }
.pendaftar { padding-left: var(--spasi-3); }

/* Footer */
.situs-footer { background: var(--teks); color: #E0E7FF; padding: var(--spasi-3); text-align: center; }

/* Tablet */
@media (min-width: 768px) {
  h1 { font-size: 2.25rem; }
  .menu-toggle { display: none; }
  .nav-menu { display: block; width: auto; }
  .nav-menu ul { flex-direction: row; margin: 0; gap: var(--spasi-3); }
  .daftar-event { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 { font-size: 2.75rem; }
  .hero { padding: 64px var(--spasi-4); }
  .daftar-event { grid-template-columns: repeat(3, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}
