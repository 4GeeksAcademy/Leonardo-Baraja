/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
const numeros = ["A , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , J , Q , K"];
const aleatorioPalos = Math.floor(Math.random() * palos.length);
const aleatorioNumeros = Math.floor(Math.random() * numeros.length);

window.onload = function() {
  //write your code here
  function generarPaloAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * palos.length);
    return palos[indiceAleatorio];
  }

  console.log(generarPaloAleatorio());
};
