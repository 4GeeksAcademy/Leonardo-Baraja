/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// donde se almacenan todas las posibilidades de las cartas
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

// Funcion para que al iniciar la pagina aparezca la primera carta aleatoria
generarCarta();

// Funcion para el boton de generar carta
function inicializar() {
  document.getElementById("generarCarta").onclick = generarCarta;
}

// Funcion de generar carta aleatoria
function generarCarta() {
  const numero = numeros[Math.floor(Math.random() * numeros.length)];
  const palo = palos[Math.floor(Math.random() * palos.length)];


  // Donde apareceran el palo y el numero aleatorio en el HTML 
  document.getElementById("numero").innerHTML = numero;
  document.getElementById("paloArriba").innerHTML = palo;
  document.getElementById("paloAbajo").innerHTML = palo;

  // En caso de ser Diamante o corazones obtendran el color rojo sino seran negros 
  const color = palo === "♦" || palo === "♥" ? "red" : "black";
  const paloArriba = document.getElementById("paloArriba");
  const paloAbajo = document.getElementById("paloAbajo");

  // Modificar el estilo de palo arriba y palo abajo por su color 
  paloArriba.style.color = paloAbajo.style.color = color;
}

inicializar();
