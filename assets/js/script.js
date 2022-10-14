
let deadline = new Date("nov 20,2022 00:00:00").getTime();
const displayDias = document.querySelector(".dias .display");
const displayHoras = document.querySelector(".horas .display");
const displayMinutos = document.querySelector(".minutos .display");
const displaySegundos = document.querySelector(".segundos .display");

showTime();
let countDown = setInterval(() => {
  showTime();
}, 1000);

function showTime() {
  let now = new Date().getTime();

  let time = deadline - now;
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  displayDias.innerHTML = String(days).padStart(2, "0");
  displayHoras.innerHTML = String(hours).padStart(2, "0");
  displayMinutos.innerHTML = String(minutes).padStart(2, "0");
  displaySegundos.innerHTML = String(seconds).padStart(2, "0");
  if (time < 0) {
    clearInterval(countDown);
  }
}
