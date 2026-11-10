/* =====================================================
   DATA PROJECT
   Semua isi halaman detail project ada di file ini.
   Mau ganti teks / gambar? Cukup edit di sini.
   ===================================================== */

// Link untuk kata "disini" di halaman HIVE AR (ganti dengan link aplikasi HIVE kamu)
const HIVE_LINK = "#";

const PROJECTS = {
  ffuse: {
    title: "FFUSE",
    thumb: "assets/img/thumbs/ffuse.jpg",
    polaroid: "assets/img/results/ffuse-1.jpg",
    intro: "<b>FFUSE</b> merupakan aplikasi web multimedia yang digunakan untuk mengolah file audio dan video secara sederhana melalui browser. Aplikasi ini dibuat agar pengguna dapat melakukan pengolahan dasar seperti konversi audio, ekstraksi audio dari video, kompresi file, pemotongan file, serta pembuatan video dari audio dan gambar tanpa perlu menggunakan software editing yang rumit.",
    toolsIcons: null,
    toolsBold: "HTML, CSS, JavaScript, PHP, FFmpeg,<br>XAMPP, Visual Studio Code, Google Chrome, dan Ngrok.",
    toolsText: "Dalam project ini, renpy untuk bahasa pemrogramannya dan menggunakan visual studio code untuk editornya.",
    meta: ["3 Minggu", "Jun 2026", "Developer", "Website"],
    role: "Dalam project ini, saya berperan sebagai Web Developer. Saya membuat tampilan antarmuka, sistem upload file, validasi format, proses pengolahan multimedia, preview hasil, serta fitur download file.",
    features: "Fitur utama Ffuse meliputi upload file audio/video, MP3 ke OGG, OGG ke MP3, extract audio, kompres file, potong file, audio + gambar menjadi video, preview hasil, dan download file.",
    process: "Pengguna mengunggah file audio atau video melalui halaman web, lalu memilih proses yang ingin dilakukan. File kemudian dikirim ke server dan diproses menggunakan PHP dengan bantuan FFmpeg. Setelah proses selesai, hasilnya akan ditampilkan dalam bentuk preview audio atau video, kemudian dapat diunduh oleh pengguna.",
    resultIntro: "Project ini menghasilkan aplikasi web sederhana yang dapat membantu pengguna mengolah file audio dan video secara lebih praktis.",
    results: [1, 2, 3, 4, 5, 6].map(n => ({ img: `assets/img/results/ffuse-${n}.jpg` }))
  },

  goodpace: {
    title: "GoodPace",
    thumb: "assets/img/thumbs/goodpace.jpg",
    intro: "<b>GoodPace</b> merupakan project UI/UX design berupa prototype website yang dirancang menggunakan Figma. Project ini mengangkat konsep website bertema running dan gaya hidup aktif, dengan fokus pada tampilan visual, kemudahan navigasi, dan pengalaman pengguna yang nyaman.",
    toolsIcons: "assets/img/icons/tools-goodpace.png",
    toolsText: "",
    meta: ["3 Minggu", "Mei 2026", "UI/UX Designer", "Prototype"],
    role: "Dalam project ini sebagai UI/UX Designer Saya merancang tampilan halaman website, menyusun layout, memilih warna dan tipografi, serta membuat prototype interaktif agar alur website dapat dipahami dengan jelas.",
    features: "Output dari project ini berupa prototype website interaktif yang menampilkan halaman utama, navigasi, informasi konten.",
    process: "Proses pengerjaan dimulai dari penyusunan konsep website, lalu dilanjutkan dengan pembuatan layout halaman, pengaturan komposisi visual, dan penyusunan user flow. Setelah desain selesai, setiap halaman dihubungkan menjadi prototype agar pengguna dapat mencoba alur interaksi website secara langsung.",
    resultIntro: "Project ini menghasilkan desain website prototype yang dapat digunakan sebagai gambaran awal sebelum masuk ke tahap pengembangan.",
    results: [{ img: "assets/img/results/goodpace-1.jpg", wide: true }]
  },

  pencil: {
    title: "Real Time Pencil Sketch",
    thumb: "assets/img/thumbs/pencil.jpg",
    intro: "<b>Real Time Pencil Sketch</b> merupakan project computer vision yang digunakan untuk mengubah tampilan webcam menjadi efek sketsa pensil secara langsung. Project ini memanfaatkan teknik image processing untuk memproses gambar dari kamera, lalu mengubahnya menjadi visual hitam putih yang menyerupai goresan pensil.",
    toolsIcons: "assets/img/icons/tools-pencil.png",
    toolsText: "Dalam pembuatan project ini, saya menggunakan beberapa alat dan teknologi pendukung, yaitu Python sebagai bahasa pemrograman utama, OpenCV sebagai library untuk mengolah citra secara real-time, NumPy untuk membantu proses pengolahan data gambar dalam bentuk array, serta Webcam sebagai perangkat input untuk menangkap gambar atau video secara langsung.",
    meta: ["1 Minggu", "Nov 2025", "Developer", "Filter Pensil sketch"],
    role: "Dalam project ini, saya berperan sebagai anggota kelompok yang bertugas sebagai developer yaitu progammer open cv, saya juga ikut dalam proses penyusunan konsep, implementasi program, dan pembuatan materi presentasi project.",
    features: "Project ini memiliki fitur utama berupa pengambilan video dari webcam secara real-time, konversi frame ke grayscale, inversi warna, Gaussian blur, penerapan efek color dodge, serta tampilan hasil sketsa secara langsung.",
    process: "Program bekerja dengan mengambil gambar dari webcam secara real-time menggunakan OpenCV. Setiap frame yang tertangkap kamera akan diproses melalui beberapa tahap, yaitu resize frame, konversi gambar ke grayscale, inversi warna, Gaussian blur, lalu penerapan efek color dodge. Proses tersebut menghasilkan tampilan gambar hitam putih dengan garis dan bayangan yang menyerupai sketsa pensil. Hasil akhirnya kemudian ditampilkan secara langsung melalui jendela output program.",
    resultIntro: "Project ini menghasilkan program sederhana yang dapat menampilkan efek sketsa pensil dari kamera secara real-time.",
    results: [{ img: "assets/img/results/pencil-1.jpg", wide: true }]
  },

  visnov: {
    title: "Visual Novel",
    thumb: "assets/img/thumbs/visnov.jpg",
    intro: "<b>Legenda Gunung Kelud: Lembu Suro</b> merupakan project visual novel interaktif yang mengangkat cerita rakyat dari Jawa Timur. Project ini menceritakan kisah Lembu Suro, Putri Dyah Ayu Pusparani, dan kutukan yang dipercaya menjadi asal mula legenda Gunung Kelud. Cerita dikemas dalam bentuk game visual novel dengan dialog, karakter, latar, pilihan cerita, audio, dan elemen interaktif.",
    toolsIcons: "assets/img/icons/tools-visnov.png",
    toolsText: "Dalam project ini, renpy untuk bahasa pemrogramannya dan menggunakan visual studio code untuk editornya.",
    meta: ["3 Minggu", "Jun 2025", "Developer", "Visual Novel Interaktif"],
    role: "Dalam project ini, saya berperan sebagai Visual Novel Developer / Programmer yang bertanggung jawab dalam proses coding dan implementasi game. Saya mengubah alur cerita menjadi sistem visual novel, mengatur dialog karakter, menampilkan background dan sprite, menambahkan audio, membuat pilihan interaktif, serta mengatur transisi antar scene agar cerita dapat berjalan sesuai alur.",
    features: "Output project ini berupa game visual novel interaktif dengan cerita legenda Gunung Kelud. Fitur utamanya meliputi dialog karakter, pilihan cerita, perubahan ekspresi karakter, pergantian background, audio dan sound effect, transisi scene, serta mini game/puzzle.",
    process: "Proses pembuatan dimulai dari penyusunan alur cerita, karakter, dan story flow. Setelah aset karakter, background, dan audio disiapkan, saya mengimplementasikannya ke dalam Ren’Py menggunakan script. Setiap scene diatur melalui kode, mulai dari pergantian latar, kemunculan karakter, dialog, sound effect, background music, hingga pilihan yang dapat dipilih oleh pemain. Project ini juga memiliki elemen mini game/puzzle sebagai bagian dari interaksi pemain.",
    resultIntro: "Project ini menghasilkan visual novel berbasis cerita rakyat yang dapat dimainkan oleh pengguna.",
    results: [1, 2, 3, 4, 5, 6].map(n => ({ img: `assets/img/results/visnov-${n}.jpg` }))
  },

  anim3d: {
    title: "ANIMASI 3D",
    thumb: "assets/img/thumbs/anim3d.jpg",
    intro: "<b>Level Up atau Amal Up?</b> merupakan project animasi 3D yang dibuat menggunakan Blender. Project ini mengangkat cerita tentang seorang anak bernama Icud yang mengalami dilema moral ketika menemukan uang di taman. Cerita ini dikemas dengan konsep ringan, komedi, dan edukatif, melalui konflik antara keinginan untuk top up game dan dorongan untuk berbuat baik.",
    toolsIcons: "assets/img/icons/tools-anim3d.png",
    toolsText: "Dalam project ini, baik untuk membuat karakter atau proses animasi menggunakan blender.",
    meta: ["3 Minggu", "Nov 2025", "Script Writer & 3D Character", "Animasi 3D"],
    role: "Dalam project ini, saya berperan dalam pembuatan script cerita dan perancangan karakter setan. Saya menyusun alur cerita, dialog antar karakter, pembagian scene, serta membantu membangun karakter setan sebagai tokoh imajiner.",
    features: "Output dari project ini berupa animasi 3D.",
    process: "Proses pembuatan project dimulai dari penyusunan premis dan sinopsis cerita, lalu dikembangkan menjadi beberapa scene dengan detail shot, dialog, durasi, BGM, dan SFX. Setelah script selesai, karakter 3D mulai dibuat, kemudian mulai dilanjutkan proses editing animasi.",
    resultIntro: "Project ini menghasilkan animasi 3D edukatif yang menyampaikan pesan tentang keikhlasan, tanggung jawab, dan pentingnya memilih tindakan yang benar.",
    results: [
      { img: "assets/img/results/anim3d-1.jpg", caption: "Karakter Setan pada cerita" },
      { img: "assets/img/results/anim3d-2.jpg", caption: "Script Cerita", narrow: true }
    ]
  },

  hive: {
    title: "Hive AR",
    thumb: "assets/img/thumbs/hive.jpg",
    polaroid: "assets/img/results/hive-1.jpg",
    intro: "<b>HIVE: Hijaiyah Verse</b> merupakan project Web-AR edukatif yang dirancang sebagai media pembelajaran Al-Qur’an, khususnya Juz Amma, untuk anak-anak. Project ini menggabungkan teknologi Augmented Reality, audio murottal, dan Speech Recognition agar proses belajar mengaji menjadi lebih interaktif, menarik, dan tidak monoton.",
    toolsIcons: "assets/img/icons/tools-hive.png",
    toolsText: "Dalam pembuatan project Augmented Reality (AR) ini, saya menggunakan beberapa alat dan teknologi pendukung, yaitu HTML sebagai struktur dasar halaman web, CSS untuk mengatur tampilan dan desain, JavaScript untuk menjalankan fungsi interaktif, A-Frame untuk membuat objek dan scene 3D berbasis web, AR.js untuk menampilkan pengalaman AR melalui kamera, Web Speech API untuk fitur pengenalan atau keluaran suara, serta Visual Studio Code sebagai aplikasi editor kode dalam proses pengembangan project.",
    meta: ["3 Minggu", "Nov 2025", "Developer & Project Manager", "Augmented Reality"],
    role: "Dalam project ini, saya berperan sebagai Programmer dan Project Manager. Saya ikut membangun scene AR dan antarmuka menggunakan A-Frame, menerapkan deteksi marker dengan AR.js, mengintegrasikan fitur Speech Recognition menggunakan Web Speech API, serta membantu membuat alur aplikasi, navigasi, sistem skoring, testing, debugging, dan deployment.",
    features: "Fitur utama project ini meliputi deteksi marker AR, tampilan menu surah interaktif, mode dengar murottal, mode latihan membaca ayat, validasi suara menggunakan Web Speech API, sistem skor per ayat, nilai akhir, serta status lulus atau tidak lulus.",
    process: "Pengguna membuka aplikasi melalui browser, lalu mengarahkan kamera ke marker kaligrafi “Bismillah”. Setelah marker terdeteksi, sistem menampilkan tampilan AR berisi karakter dan menu pilihan mode belajar. Pengguna dapat memilih mode “Dengar” untuk mendengarkan contoh bacaan, atau “Mulai Latihan” untuk membaca ayat secara langsung. Pada mode latihan, Web Speech API menangkap suara pengguna, mengubahnya menjadi teks, lalu sistem mencocokkan hasil bacaan dengan teks ayat yang benar. Setelah seluruh ayat selesai dibaca, aplikasi menampilkan nilai akhir dan status kelulusan.",
    resultIntro: "Project ini menghasilkan program media pembelajaran Al-Qur’an berbasis Web-AR yang dapat diakses melalui browser tanpa instalasi aplikasi tambahan.",
    resultLink: { before: "Project AR ini dapat diakses ", text: "disini", after: ".", href: HIVE_LINK },
    results: [{ img: "assets/img/results/hive-1.jpg", wide: true }],
    phones: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(n => `assets/img/results/hive-${n}.jpg`)
  },

  vidmap: {
    title: "VideoMapping",
    thumb: "assets/img/thumbs/vidmap.jpg",
    intro: "<b>Video Mapping Project</b> merupakan project audio visual yang menampilkan cerita sejarah melalui perpaduan visual, audio, narasi, dan proyeksi pada fasad bangunan. Project ini dibuat untuk menghadirkan pengalaman menonton yang lebih imersif, dengan visual yang disusun berdasarkan alur cerita, storyboard, efek transisi, serta penyesuaian bentuk bangunan agar hasil proyeksi terlihat menyatu dengan fasad.",
    toolsIcons: "assets/img/icons/tools-vidmap.png",
    toolsText: "Dalam project ini, untuk keperluan membuat jadwal dan laporan tim saya menggunakan spreadsheet dan microsoft word. Untuk keperluan editing gambar saya menggunakan adobe illustrator yang kemudian saya edit video di adobe after effect.",
    meta: ["3 bulan", "Nov 2025", "Project Manager", "Video Mapping"],
    role: "Dalam project ini, saya berperan sebagai Project Manager yang membantu mengatur alur kerja tim, membagi tugas, memantau progress, serta memastikan setiap bagian project berjalan sesuai timeline. Selain itu, saya juga membantu bagian kreatif, khususnya dalam proses editing opening.",
    features: "Output project ini berupa pertunjukan video mapping yang menggabungkan narasi sejarah, visual motion, audio, efek transisi, opening video, serta proyeksi yang disesuaikan dengan fasad bangunan.",
    process: "Proses pembuatan project dimulai dari riset tema dan penyusunan narasi, lalu dikembangkan menjadi visual script dan storyboard. Setelah itu, aset visual disiapkan dan diedit sesuai alur cerita. Pada tahap mapping, visual disesuaikan dengan bentuk fasad menggunakan slice agar posisi, ukuran, dan komposisi proyeksi tidak keluar dari area bangunan. Setelah semua bagian selesai, project diuji untuk melihat kesesuaian visual, audio, alur cerita, dan pengalaman penonton.",
    resultIntro: "Project ini menghasilkan karya video mapping yang mampu menyampaikan cerita sejarah secara visual dan menarik.",
    results: [
      { img: "assets/img/results/vidmap-1.jpg", caption: "Editing asset" },
      { img: "assets/img/results/vidmap-2.jpg", caption: "Editing asset" },
      { img: "assets/img/results/vidmap-3.jpg", caption: "PJK Pengerjaan Project" }
    ]
  },

  anim2d: {
    title: "ANIMASI 2D",
    thumb: "assets/img/thumbs/anim2d.jpg",
    intro: "<b>Implementasi IoT untuk Keamanan Rumah</b> merupakan project animasi 2D yang membahas peran Internet of Things dalam kehidupan sehari-hari, khususnya pada sistem smart home. Animasi ini menjelaskan bagaimana perangkat rumah seperti lampu, kamera, pintu, AC, dan kompor dapat terhubung ke internet serta dikendalikan dari jarak jauh untuk meningkatkan keamanan, kenyamanan, dan efisiensi energi.",
    toolsIcons: "assets/img/icons/tools-anim2d.png",
    toolsText: "Dalam project ini, menggunakan adobe after effect untuk membuat animasi atau motion graphic. Adobe illustrator digunakan untuk membuat asset.",
    meta: ["3 Minggu", "Jun 2025", "Script Writer & Asset & Animator", "Animasi 2D"],
    role: "Dalam project ini, saya berperan dalam pembuatan script, pembuatan aset visual, serta proses animasi 2D. Saya menyusun alur cerita, voice over, pembagian scene, dan konsep visual. Selain itu, saya juga mengisi voice over, membuat aset menggunakan Adobe Illustrator dan menganimasikannya menggunakan Adobe After Effects.",
    features: "Output dari project ini berupa animasi 2D edukatif yang menjelaskan konsep IoT dalam smart home. Elemen utama yang ditampilkan meliputi kontrol perangkat melalui smartphone, otomatisasi, integrasi antarperangkat, monitoring real-time, serta manfaat IoT untuk keamanan rumah.",
    process: "Proses pembuatan project dimulai dari penyusunan naskah dan pembagian scene berdasarkan durasi. Setelah alur cerita selesai, aset visual seperti rumah, perangkat smart home, ikon, teks, dan elemen pendukung dibuat menggunakan Adobe Illustrator. Aset tersebut kemudian dianimasikan di Adobe After Effects dengan gerakan sederhana seperti pop-up, dissolve, pergerakan ikon, transisi teks, dan animasi perangkat agar penjelasan IoT lebih mudah dipahami.",
    resultIntro: "Project ini menghasilkan animasi 2D informatif yang menyampaikan konsep teknologi IoT secara visual, sederhana, dan menarik.",
    results: [
      { img: "assets/img/results/anim2d-1.jpg", caption: "Membuat script cerita" },
      { img: "assets/img/results/anim2d-2.jpg", caption: "Membuat Assets" },
      { img: "assets/img/results/anim2d-3.jpg", caption: "Membuat animasi 2D" }
    ]
  },

  headway: {
    title: "HeadWay",
    thumb: "assets/img/thumbs/headway.jpg",
    intro: "<b>HeadWay</b> merupakan project desain visual untuk aplikasi layanan kesehatan mental yang dirancang agar pengguna dapat mengakses layanan konsultasi psikologis secara lebih mudah, nyaman, dan privat. Project ini berfokus pada pembuatan identitas visual, desain antarmuka, serta media promosi yang sesuai dengan konsep aplikasi kesehatan mental yang tenang, profesional, dan user-friendly.",
    toolsIcons: "assets/img/icons/tools-headway.png",
    toolsText: "Dalam project ini, menggunakan canva untuk editing dan figma untuk design ui website.",
    meta: ["3 Minggu", "Jun 2025", "Creative Design & UI/UX designer", "Design"],
    role: "Dalam project ini, saya berperan sebagai Project Manager, UI Designer, dan Graphic Designer. Saya membantu mengatur alur kerja project, melakukan riset konsep, merancang tampilan website prototype di Figma, serta membuat media visual pendukung seperti brosur dan feed Instagram.",
    features: "Output dari project ini berupa desain website prototype, brosur, feed Instagram, konsep identitas visual, layout antarmuka, serta elemen grafis pendukung untuk kebutuhan branding aplikasi Headway.",
    process: "Proses pengerjaan dimulai dari riset kebutuhan pengguna dan analisis aplikasi sejenis, kemudian dilanjutkan dengan penyusunan konsep visual seperti warna, tipografi, layout, dan elemen grafis. Setelah konsep ditentukan, saya membuat desain website prototype menggunakan Figma, lalu mengembangkan media promosi seperti brosur dan feed Instagram agar identitas visual Headway terlihat konsisten di berbagai media.",
    resultIntro: "Project ini menghasilkan desain visual yang dapat membantu memperkuat identitas aplikasi Headway sebagai layanan kesehatan mental digital.",
    results: [1, 2, 3].map(n => ({ img: `assets/img/results/headway-${n}.jpg` }))
  }
};

// Daftar kartu di halaman Projects: [id, judul, kategori, keterangan singkat]
// kategori: web | design | code | motion
const PROJECT_GRID = [
  ["ffuse", "FFUSE Converter", "web", "Multimedia Converter with FFmpeg"],
  ["goodpace", "GoodPace Website", "design", "Prototipe UI/UX"],
  ["pencil", "Real Time Pensil Sketch", "code", "Computer Vision"],
  ["visnov", "Visual Novel", "code", "Legenda Gunung Kelud"],
  ["anim3d", "Animasi 3D", "motion", "Level Up atau Amal Up?"],
  ["hive", "HIVE AR", "web", "Augmented Reality — Hijaiyah Verse"],
  ["vidmap", "Video Mapping", "motion", "Audio visual pada fasad bangunan"],
  ["anim2d", "Animasi 2D", "motion", "Implementasi IoT untuk Keamanan Rumah"],
  ["headway", "Headway", "design", "Desain visual aplikasi kesehatan mental"]
];
