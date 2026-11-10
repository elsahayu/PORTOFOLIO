# Portofolio Elsa (elsahyr)

Website portofolio hasil konversi desain Figma → HTML, CSS, JavaScript biasa (tanpa framework).

## Cara menjalankan
1. Ekstrak ZIP ini.
2. Klik dua kali `index.html` (terbuka di browser). Butuh internet agar font Google Fonts termuat.
3. (Opsional) Pakai server lokal: buka terminal di folder ini lalu `python -m http.server 8000`, buka http://localhost:8000

## Struktur folder
```
index.html      → Home
projects.html   → Daftar project
project.html    → Halaman detail (satu template untuk 9 project: project.html?id=ffuse)
about.html      → About Me
css/style.css   → Semua gaya tampilan (gaya editorial krem + hitam + biru, responsif)
js/main.js      → Menu HP, animasi scroll, lightbox, pembuat halaman
js/projects-data.js → ISI SEMUA PROJECT (teks, gambar). Edit di sini.
assets/img/     → ui (hero, foto, keranjang), thumbs, results, icons
```

## Yang perlu kamu ganti
- `js/projects-data.js` → `HIVE_LINK` : isi link aplikasi HIVE (kata "disini" di halaman HIVE AR).
- Gambar di `assets/img` di-crop dari PNG desain (resolusi terbatas). Ganti dengan file asli beresolusi tinggi dengan nama yang sama.
