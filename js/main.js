"use strict";

const resetButton = document.querySelector(".js-reset");
const playPauseButton = document.querySelector(".js-play");
const secondsBall = document.querySelector(".js-seconds");

let seconds = "00";
let minutes = "00";
let hours = "00";
let interval = null;

// Determinar cuando incrementar el siguiente valor
// Si los valores son inferiores a 10 añade un 0 delante
function stopWatch() {
  seconds++;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (seconds / 60 === 1) {
    seconds = "00";
    minutes++;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (minutes / 60 === 1) {
      minutes = "00";
      hours++;
      if (hours < 10) {
        hours = "0" + hours;
      }
    }
  }
  //Mostrar en pantalla los valores actualizados del tiempo
  document.querySelector(".js-timer").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}

// Activa el botón Play Pause
// Cambia el estilo del botón entre Play y Pause
const playPaused = () => {
  const isPaused = playPauseButton.classList.contains("pausebutton");
  if (isPaused) {
    window.clearInterval(interval);
    playPauseButton.classList.remove("pausebutton");
  } else {
    interval = window.setInterval(stopWatch, 1000);
    playPauseButton.classList.add("pausebutton");
  }
};

// Activa el botón Reset, pone a 0 los valores y para el cronómetro
const reset = () => {
  window.clearInterval(interval);
  seconds = "00";
  minutes = "00";
  hours = "00";
  document.querySelector(".js-timer").innerHTML = "00:00:00";
  playPauseButton.classList.remove("pausebutton");
};
