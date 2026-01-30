/* =========================
   SOUND ENGINE (SAFE)
========================= */

const sounds = {
  flip: new Audio("sounds/flip.mp3"),
  spin: new Audio("sounds/spin.mp3"),
  modal: new Audio("sounds/modal.mp3"),
  error: new Audio("sounds/error.mp3"),
  heartbeat: new Audio("sounds/heartbeat.mp3")
};

// setting default
Object.values(sounds).forEach(s => {
  s.preload = "auto";
});

/* ===== PLAY SOUND ===== */
function playSound(name) {
  const sound = sounds[name];
  if (!sound) return;

  sound.pause();
  sound.currentTime = 0;

  sound.play().catch(() => {
    // silent fail (browser policy)
  });
}

/* ===== STOP ALL ===== */
function stopAllSounds() {
  Object.values(sounds).forEach(s => {
    s.pause();
    s.currentTime = 0;
  });
}

/* ===== HEARTBEAT (EXTREME MODE) ===== */
function startHeartBeat() {
  const hb = sounds.heartbeat;
  if (!hb) return;

  hb.loop = true;
  hb.volume = 0.8;
  hb.play().catch(() => {});
}

function stopHeart() {
  const hb = sounds.heartbeat;
  if (!hb) return;

  hb.pause();
  hb.currentTime = 0;
}
