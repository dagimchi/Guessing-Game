"use strict";

let number = Math.floor(Math.random() * 20) + 1;

let check = document.querySelector(".btn--check");
let reset = document.querySelector(".btn--again");
let message = document.querySelector(".message");
let score = 20;
let highscore = 0;

check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) message.textContent = "Please enter a valid number.";
  else if (guess === number) {
    message.textContent = "You guessed correctly!";
    document.querySelector(".random-num").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      message.textContent = "Too high. Try again.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost.";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      message.textContent = "Too low. Try again.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost.";
      document.querySelector(".score").textContent = 0;
    }
  }
});

reset.addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".random-num").textContent = "?";
  document.querySelector(".guess").value = "";
  message.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
});
