const CORRECT_PIN = "6969";

/* ===== PIN ===== */
function checkPIN() {
  const input = document.getElementById("pinInput");
  const error = document.getElementById("pinError");

  if (!input || !error) return;

  if (input.value === CORRECT_PIN) {
    sessionStorage.setItem("pinOK", "1");
    loadPartial("menu");
  } else {
    error.innerText = "PIN salah!";
    input.value = "";
    navigator.vibrate?.(200);
  }
}

function lockApp() {
  sessionStorage.removeItem("pinOK");
  loadPartial("intro");
}

/* ===== NAV ===== */
function openTOD() { loadPartial("tod"); }
function openRoulette() { loadPartial("roulette"); }
function openMood() { loadPartial("mood"); }
function openBody() { loadPartial("bodypart"); }
function openBlind() { loadPartial("blind"); }
function openTouch() { loadPartial("slowtouch"); }
function backToMenu() { loadPartial("menu"); }

/* ===== MODAL ===== */
function showModal(text) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");

  if (!modal || !modalText) {
    console.warn("Modal belum siap");
    return;
  }

  modalText.innerText = text;
  modal.classList.remove("hidden");
  playSound?.("modal");
}


function closeModal() {
  document.getElementById("modal")?.classList.add("hidden");
}

/* ===== AUTO LOAD ===== */
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("pinOK")) {
    loadPartial("menu");
  } else {
    loadPartial("intro");
  }
});
