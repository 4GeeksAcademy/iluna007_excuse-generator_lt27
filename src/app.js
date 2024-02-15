/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let whotoblame = ["the dog", "my gramma", "the cat", "your mama"];
let whattheydid = ["eat", "pissed", "crushed", "broke"];
let whatdoyouwanttoavoid = [
  "my homework",
  "the project",
  "the model",
  "the book"
];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my breakfast",
  "during sleep",
  "michi"
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
