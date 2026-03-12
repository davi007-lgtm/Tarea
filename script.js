const poderes = [
  "Volar",
  "Invisibilidad",
  "Teletransportación",
  "Control del tiempo",
  "Super fuerza"];

let actual = -1;
let intentos = 0;

const nombreEl = document.getElementById('nombre');
const contadorEl = document.getElementById('contador').querySelector('strong');
const items = document.querySelectorAll('#lista li');

document.getElementById('btnDescubrir').addEventListener('click', function () {
  let siguiente;
  do { siguiente = Math.floor(Math.random() * poderes.length); } while (siguiente === actual);
  actual = siguiente;

  intentos++;
  contadorEl.textContent = intentos;

  nombreEl.textContent = poderes[actual];

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
  items[actual].classList.add('active');
});