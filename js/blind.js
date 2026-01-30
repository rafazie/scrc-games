/* =========================
   BLIND CHOICE DATA (30)
========================= */

const blindDeck = [
  "Truth – jawab jujur",
  "Dare – lakukan tantangan",
  "Bonus – pilih tantangan sendiri",
  "Punishment – spin roulette",
  "Chaos – pasangan tentukan",
  "Truth EXTREME",
  "Dare EXTREME",
  "Ulangi tantangan terakhir",
  "Double tantangan berikutnya",
  "Skip hukuman",
  "Tukar peran",
  "Pasangan memilih aksi",
  "Aksi bebas 10 detik",
  "Pilih game selanjutnya",
  "Mood Hot",
  "Mood Chaos",
  "Lanjut TOD",
  "Lanjut Roulette",
  "Ambil kartu lagi",
  "Truth tentang pasangan",
  "Dare fisik ringan",
  "Dare fisik intens",
  "Bonus spesial",
  "Punishment ringan",
  "Punishment berat",
  "Wildcard",
  "Chaos card",
  "Surprise action",
  "Mystery challenge",
  "Final choice"
];

let blindResult = null;

/* =========================
   LOGIC
========================= */

function pickBlind(index) {
  if (blindResult !== null) return;

  const cards = document.querySelectorAll(".blind");
  const card = cards[index];
  if (!card) return;

  const back = card.querySelector(".card-back");
  if (!back) return;

  blindResult = blindDeck[Math.floor(Math.random() * blindDeck.length)];

  card.classList.remove("flip");
  void card.offsetWidth;

  card.classList.add("shake");
  playSound?.("flip");

  setTimeout(() => {
    back.innerText = blindResult;
    card.classList.remove("shake");
    card.classList.add("flip");
  }, 300);
}

function resetBlind() {
  blindResult = null;

  const cards = document.querySelectorAll(".blind");
  cards.forEach(card => {
    const back = card.querySelector(".card-back");
    if (back) back.innerText = "🎴";

    card.classList.remove("flip", "shake");
  });
}
