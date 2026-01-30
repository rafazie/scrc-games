/* =========================
   PICK A BODY PART DATA
========================= */

const bodyParts = [
  "Leher", "Bahu", "Lengan", "Tangan", "Punggung",
  "Pinggang", "Perut", "Paha", "Betis", "Wajah",
  "Dada", "Pinggul", "Telinga", "Rambut", "Dagu",
  "Lutut", "Punggung bawah", "Pergelangan tangan",
  "Bahu belakang", "Sisi tubuh",
  "Leher belakang", "Dada atas", "Pinggang samping",
  "Paha dalam", "Betis belakang",
  "Tangan atas", "Perut samping",
  "Bahagian belakang bahu",
  "Punggung tengah",
  "Seluruh tubuh"
];

const actionsHot = [
  "Cium perlahan",
  "Sentuh lembut",
  "Usap pelan",
  "Pegang dengan hangat",
  "Dekatkan wajah",
  "Sentuh selama 10 detik",
  "Cium singkat",
  "Usap dengan jari",
  "Pegang dan tahan",
  "Dekap ringan",
  "Sentuh sambil tatap mata",
  "Cium sambil tersenyum",
  "Sentuh sambil tarik napas",
  "Pegang dengan kedua tangan",
  "Usap naik turun",
  "Sentuh sambil bisik",
  "Cium dari samping",
  "Pegang dari belakang",
  "Dekatkan tubuh",
  "Sentuh perlahan 15 detik",
  "Usap sambil berdiri",
  "Sentuh sambil duduk",
  "Pegang sambil tersenyum",
  "Cium ringan",
  "Sentuh tanpa bicara",
  "Dekap 10 detik",
  "Usap sambil menutup mata",
  "Pegang perlahan",
  "Sentuh singkat",
  "Cium penuh perhatian"
];

const actionsExtreme = [
  "Cium lebih lama",
  "Pegang dengan tegas",
  "Usap dengan tekanan",
  "Dekatkan tubuh sepenuhnya",
  "Sentuh tanpa ragu",
  "Pegang selama 20 detik",
  "Cium dengan intens",
  "Usap perlahan tapi dalam",
  "Pegang sambil menahan",
  "Sentuh dengan dominan",
  "Cium dari sudut berbeda",
  "Pegang sambil arahkan posisi",
  "Usap naik turun perlahan",
  "Sentuh tanpa bicara",
  "Pegang kuat tapi lembut",
  "Cium sambil menahan",
  "Usap sambil dekatkan wajah",
  "Pegang dari belakang",
  "Sentuh dengan penuh niat",
  "Cium lama",
  "Pegang sambil tarik napas",
  "Usap sambil berbisik",
  "Pegang dan tahan posisi",
  "Sentuh intens 15 detik",
  "Cium penuh perhatian",
  "Pegang tanpa melepaskan",
  "Usap menyeluruh",
  "Sentuh dominan",
  "Pegang dengan kontrol",
  "Cium dengan tekanan"
];

/* =========================
   LOGIC
========================= */

function spinBodyPart() {
  const card = document.getElementById("bpCard");
  const text = document.getElementById("bpResult");
  const level = document.getElementById("bpLevel")?.value;

  if (!card || !text) return;

  const part = bodyParts[Math.floor(Math.random() * bodyParts.length)];
  const actionArr = level === "extreme" ? actionsExtreme : actionsHot;
  const action = actionArr[Math.floor(Math.random() * actionArr.length)];

  card.classList.remove("flip");
  void card.offsetWidth;

  text.innerText = `${part} — ${action}`;
  playSound?.("flip");

  card.classList.add("flip");
}
