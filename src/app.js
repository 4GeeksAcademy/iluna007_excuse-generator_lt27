/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let whotoblame = ["la rana", "mi abuelo", "el gato", "el chancho"];
let whattheydid = ["se comió", "se orinó en", "arruinó", "rompió"];
let whatdoyouwanttoavoid = [
  "mi tarea",
  "mi trabajo",
  "el modelo",
  "la maqueta"
];
let when = [
  "antes de la clase",
  "justo hace 1 hr",
  "a penas la termine",
  "durante la cena",
  "cuando estaba dormido",
  "mientras miraba la tele"
];

function excusa1() {
  let domain =
    whotoblame[Math.floor(Math.random() * whotoblame.length)] +
    " " +
    whattheydid[Math.floor(Math.random() * whattheydid.length)] +
    " " +
    whatdoyouwanttoavoid[
      Math.floor(Math.random() * whatdoyouwanttoavoid.length)
    ] +
    " " +
    when[Math.floor(Math.random() * when.length)];

  return domain;
}

document.getElementById("excusa").addEventListener("click", function() {
  this.innerHTML = excusa1();
});
