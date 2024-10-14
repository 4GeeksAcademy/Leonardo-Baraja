/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["♦", "♥", "♠", "♣"];
const numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function inicializar() {
  document.getElementById("generarCarta").onclick = generarCarta;
}

function generarCarta() {
  const numero = numeros[Math.floor(Math.random() * numeros.length)];
  const palo = palos[Math.floor(Math.random() * palos.length)];

  document.getElementById("numero").innerHTML = numero;
  document.getElementById("paloArriba").innerHTML = palo;
  document.getElementById("paloAbajo").innerHTML = palo;

  const color = palo === "♦" || palo === "♥" ? "red" : "black";
  const paloArriba = document.getElementById("paloArriba");
  const paloAbajo = document.getElementById("paloAbajo");

  paloArriba.style.color = paloAbajo.style.color = color;
}
inicializar();
