const inputJam = document.getElementById("jam");
const inputMenit = document.getElementById("menit");
const inputMakan = document.getElementById("makan");
const inputTerlambat = document.getElementById("terlambat");
const inputLembur = document.getElementById("jamLembur");

inputJam.addEventListener("input", jumlah);
inputMenit.addEventListener("input", jumlah);
inputMakan.addEventListener("input", jumlah);
inputTerlambat.addEventListener("input", jumlah);
inputLembur.addEventListener("input", jumlah);

function jumlah() {
  var a = parseInt(inputJam.value);
  var b = parseInt(inputMenit.value);
  var g = parseInt(inputTerlambat.value);
  var i = parseInt(inputLembur.value);
  var k = parseInt(inputMakan.value);

  var c = 3500000;
  var d = 26;
  var e = 7;
  var f = 60;
  var h = 20000;
  var j = 7000;
  var l = 8000;

  // 👉 default kalau kosong = 0
  if (isNaN(a)) a = 0;
  if (isNaN(b)) b = 0;
  if (isNaN(g)) g = 0;
  if (isNaN(i)) i = 0;
  if (isNaN(k)) k = 0;

  // 👉 hitung masing-masing
  var hasilJam = (c / d / e) * a;
  var hasilMenit = (c / d / e / f) * b;
  var hasilTerlambat = g * h;
  var hasilLembur = i * j;
  var hasilMakan = k * l;

  // 👉 total
  var total = hasilJam + hasilMenit + hasilMakan - hasilTerlambat + hasilLembur;

  // 👉 kalau dua-duanya kosong
  if (a === 0 && b === 0 && g === 0 && i === 0 && k === 0) {
    document.getElementById("hasil").innerHTML = "";
    return;
  }

  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  document.getElementById("hasil").innerHTML = rupiah.format(Math.floor(total));
}
