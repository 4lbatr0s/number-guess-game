"use strict";

const createSecretNumber = () => {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  return secretNumber;
};
const displayMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};
const replaceScore = (sc) => {
  document.querySelector(".score").textContent = sc;
};
const replaceNumber = (secret) => {
  document.querySelector(".number").textContent = secret;
};
const replaceGuess = (val) => {
  document.querySelector(".guess").value = val;
};
const replaceHighScore = (val) => {
  document.querySelector(".highscore").textContent = val;
};

let secretNumber = createSecretNumber();
let score = 20;
document.querySelector(".score").textContent = score;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    //if guessNumber is empty
    displayMessage("No guess!");
  } else if (guessNumber === secretNumber){
    displayMessage(`That's right! You won!`);
    replaceNumber(guessNumber);
    document.querySelector("body").style.backgroundColor = "#00ff00";
    document.querySelector(".number").style.width = "30rem";
    let tempHighScore = Number(guessNumber * score);
    tempHighScore>highScore ? highScore = tempHighScore : null
    replaceHighScore(highScore)
 
  } else if(guessNumber!==secretNumber){
      if(score>1){
        guessNumber>secretNumber ? displayMessage('Too high') : displayMessage('Too low')
        score-=1
        replaceScore(score)
      }else{
          displayMessage('Game over, try again.')
          score = 0
          replaceScore(score)
          document.querySelector("body").style.backgroundColor = "#ff0000";
          document.querySelector(".number").style.width = "30rem";
      }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = createSecretNumber();
  score = 20;
  displayMessage("Start guessing...");
  replaceScore(score);
  replaceGuess(null);
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  replaceNumber("?");
});
