/* =========================
   MOOD GAME DATA
========================= */

const moodData = {
  calm: [
    "Tatap mata pasangan selama 30 detik tanpa bicara",
    "Pegang tangan pasangan dan tarik napas bersama",
    "Peluk pasangan dengan lembut",
    "Sandarkan kepala ke bahu pasangan",
    "Usap punggung pasangan perlahan",
    "Tersenyum dan ucapkan satu hal yang kamu sukai darinya",
    "Duduk berdekatan tanpa menyentuh selama 20 detik",
    "Letakkan tangan di paha pasangan (diizinkan)",
    "Dekatkan wajah tanpa menyentuh",
    "Tarik napas dalam sambil saling memandang"
  ],

  hot: [
    "Peluk pasangan lebih erat selama 20 detik",
    "Bisikkan satu kalimat manis di telinga pasangan",
    "Cium pipi pasangan perlahan",
    "Usap pinggang pasangan dengan lembut",
    "Dekatkan wajah sampai hampir bersentuhan",
    "Pegang tangan pasangan dan arahkan posisinya",
    "Sentuh bahu atau lengan pasangan dengan intens",
    "Peluk dari belakang selama 15 detik",
    "Tatap mata lalu tersenyum nakal",
    "Bisikkan apa yang ingin kamu lakukan nanti"
  ],

  dominant: [
    "Arahkan posisi pasangan sesuai keinginanmu",
    "Pegang pinggang pasangan dengan tegas",
    "Suruh pasangan diam selama 10 detik",
    "Tatap pasangan tanpa berkedip selama 15 detik",
    "Pegang dagu pasangan dan arahkan wajahnya",
    "Berikan satu perintah sederhana",
    "Dekatkan tubuh tanpa menyentuh",
    "Beri instruksi posisi duduk atau berdiri",
    "Pegang tangan pasangan dan tahan",
    "Beri tatapan serius dan pelan"
  ],

  chaos: [
    "Pasangan bebas menentukan satu aksi",
    "Lakukan sesuatu spontan (aman & consensual)",
    "Tukar peran selama 1 ronde",
    "Pilih: Truth atau Dare",
    "Spin Roulette setelah ini",
    "Lanjut ke TOD Extreme",
    "Ulangi aksi terakhir tapi lebih intens",
    "Pasangan memilih mood berikutnya",
    "Aksi bebas selama 10 detik",
    "Langsung lanjut ke game lain"
  ]
};

/* =========================
   MOOD GAME LOGIC
========================= */

function startMood(type) {
  const card = document.getElementById("moodCard");
  const text = document.getElementById("moodText");

  if (!card || !text) return;

  const list = moodData[type];
  if (!list || list.length === 0) return;

  // reset animasi
  card.classList.remove("flip");
  card.classList.remove("shake");
  void card.offsetWidth;

  // shake dulu
  card.classList.add("shake");

  setTimeout(() => {
    const result = list[Math.floor(Math.random() * list.length)];
    text.innerText = result;

    card.classList.remove("shake");
    card.classList.add("flip");
  }, 300);
}
