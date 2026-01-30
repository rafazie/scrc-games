let rotation = 0;

const rouletteHot = [
  "Cium pasangan 10 detik",
  "Peluk erat 30 detik",
  "Bisikkan hal paling kamu suka darinya",
  "Pegang tangan sambil tatap mata 1 menit",
  "Cium kening perlahan",
  "Pijat bahu pasangan 1 menit",
  "Kecup pipi kiri & kanan",
  "Puji tubuh pasangan",
  "Peluk dari belakang",
  "Cium leher pelan",
  "Usap rambut pasangan",
  "Pegang pinggang pasangan",
  "Tatap mata sambil tersenyum",
  "Bisikkan fantasi ringan",
  "Cium bibir 5 detik",
  "Pegang tangan dan elus",
  "Cium hidung pasangan",
  "Pijat leher",
  "Peluk sambil tarik napas bareng",
  "Cium tangan pasangan",
  "Sentuh wajah pasangan",
  "Peluk sambil goyang pelan",
  "Cium bahu",
  "Bisikkan kata romantis",
  "Peluk sambil pejamkan mata",
  "Cium punggung tangan",
  "Pegang paha (sopan)",
  "Usap punggung",
  "Cium pipi lama",
  "Peluk lama tanpa bicara"
];

const rouletteExtreme = [
  "Cium bibir 20 detik",
  "Cium leher agak lama",
  "Peluk erat dari belakang",
  "Bisikkan fantasi paling berani",
  "Pegang pinggang dengan erat",
  "Cium bahu & leher",
  "Tatap mata sambil dekatkan wajah",
  "Pijat paha pasangan",
  "Cium perlahan dari pipi ke bibir",
  "Peluk sambil sentuh punggung",
  "Kecup bibir berulang",
  "Pegang wajah dengan dua tangan",
  "Cium leher sambil peluk",
  "Sentuh pinggang & punggung",
  "Bisikkan keinginan malam ini",
  "Peluk sambil rebah",
  "Cium bahu lama",
  "Pijat punggung bawah",
  "Pegang paha agak lama",
  "Cium bibir sambil pejam mata",
  "Dekap sambil usap punggung",
  "Cium leher dari belakang",
  "Pegang pinggang erat",
  "Sentuh wajah & leher",
  "Peluk sambil tarik napas bareng",
  "Cium sambil senyum",
  "Usap paha pelan",
  "Peluk lama tanpa bicara",
  "Cium bibir terakhir",
  "Tantangan bebas pasangan"
];


function spinRoulette() {
  const wheel = document.getElementById("wheel");
  if (!wheel) return;

  const slice = 360 / rouletteHot.length;
  const index = Math.floor(Math.random() * rouletteHot.length);

  rotation += 360 * 5 + index * slice;
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    showModal(rouletteHot[index]);
  }, 4000);
}
