/* =========================
   SLOW TOUCH – FOREPLAY MODE
========================= */

/* ===== DATA ===== */
const slowTouchData = {
  calm: [
    "Tatap mata pasangan tanpa bicara",
    "Pegang tangan pasangan dengan lembut",
    "Duduk berdekatan tanpa menyentuh",
    "Tarik napas bersamaan 5 kali",
    "Sandarkan kepala ke bahu pasangan",
    "Sentuh lengan dengan ujung jari",
    "Dekatkan wajah tanpa menyentuh"
  ],
  warm: [
    "Usap punggung perlahan",
    "Peluk ringan tanpa mengencangkan",
    "Cium pipi sangat singkat",
    "Gerakkan tangan di atas kulit tanpa menyentuh",
    "Dekatkan tubuh sampai terasa hangat",
    "Pegang pinggang sebentar",
    "Bisikkan satu kata lembut",
    "Sentuh bahu dengan pelan"
  ],
  hot: [
    "Peluk lebih erat selama timer",
    "Cium leher singkat lalu berhenti",
    "Usap pinggang perlahan",
    "Pegang tangan pasangan dan tahan",
    "Dekatkan wajah sampai hampir bersentuhan",
    "Sentuh punggung dengan tekanan lembut",
    "Peluk dari belakang",
    "Tatap mata sambil mendekatkan tubuh"
  ],
  almost: [
    "Dekatkan bibir dan berhenti tepat sebelum menyentuh",
    "Sentuh lalu lepaskan sangat pelan",
    "Tahan posisi intim tanpa bergerak",
    "Pegang pasangan dan tarik napas di lehernya",
    "Dekatkan tubuh sepenuhnya tanpa melanjutkan",
    "Hampir melakukan sesuatu lalu berhenti",
    "Tatap pasangan dengan napas berat"
  ]
};

const levelOrder = ["calm", "warm", "hot", "almost"];
const levelLabelMap = {
  calm: "😌 Calm",
  warm: "🌤 Warm",
  hot: "🔥 Hot",
  almost: "💓 Almost"
};

const levelTime = {
  calm: 20,
  warm: 25,
  hot: 30,
  almost: 40
};

/* ===== STATE ===== */
let currentLevelIndex = 0;
let cardIndex = 0;
let timer = null;
let remaining = 0;

/* ===== ELEMENT SAFE GET ===== */
function $(id) {
  return document.getElementById(id);
}

/* ===== START GAME ===== */
function startSlowTouch() {
  currentLevelIndex = 0;
  cardIndex = 0;
  $("startBtn").disabled = true;
  $("nextBtn").disabled = true;
  playLevelSound();
  drawSlowTouchCard();
}

/* ===== DRAW CARD ===== */
function drawSlowTouchCard() {
  const level = levelOrder[currentLevelIndex];
  const cards = slowTouchData[level];

  if (!cards) return;

  const card = $("stCard");
  const text = $("stText");

  // update UI
  $("levelLabel").innerText = levelLabelMap[level];
  updateProgress();

  // reset anim
  card.classList.remove("flip");
  void card.offsetWidth;

  const msg = cards[Math.floor(Math.random() * cards.length)];
  text.innerText = msg;

  card.classList.add("flip");
  startTimer(levelTime[level]);
}

/* ===== TIMER ===== */
function startTimer(seconds) {
  clearInterval(timer);
  remaining = seconds;
  $("timerText").innerText = remaining;
  $("nextBtn").disabled = true;

  timer = setInterval(() => {
    remaining--;
    $("timerText").innerText = remaining;

    if (remaining <= 0) {
      clearInterval(timer);
      $("nextBtn").disabled = false;
    }
  }, 1000);
}

/* ===== NEXT CARD ===== */
function nextSlowTouch() {
  cardIndex++;

  if (cardIndex >= 5) {
    cardIndex = 0;
    currentLevelIndex++;

    if (currentLevelIndex >= levelOrder.length) {
      endSlowTouch();
      return;
    }

    playLevelSound();
  }

  drawSlowTouchCard();
}

/* ===== END GAME ===== */
function endSlowTouch() {
  stopAllSounds?.();
  showModal(
    "Foreplay selesai.\nSekarang kalian bebas melanjutkan… tanpa game."
  );
  $("startBtn").disabled = false;
  $("nextBtn").disabled = true;
}

/* ===== EXIT ===== */
function exitSlowTouch() {
  clearInterval(timer);
  stopAllSounds?.();
  backToMenu();
}

/* ===== SOUND HANDLER ===== */
function playLevelSound() {
  stopAllSounds?.();

  const level = levelOrder[currentLevelIndex];

  if (level === "calm" || level === "warm") {
    playSound?.("ambient");
  }
  if (level === "hot") {
    playSound?.("heartbeat");
  }
  if (level === "almost") {
    playSound?.("heartbeat");
  }
}

/* ===== PROGRESS BAR ===== */
function updateProgress() {
  const percent =
    ((currentLevelIndex) / (levelOrder.length - 1)) * 100;
  $("progressFill").style.width = percent + "%";
}
