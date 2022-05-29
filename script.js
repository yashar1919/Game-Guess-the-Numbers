const gameArea = document.getElementsByClassName("game")[0];
const button = document.getElementById("start_btn");
const message = document.getElementById("message");
var num = 0;

button.addEventListener("click", gameHandler);

let gamePlay = false;
let score = 0;
function gameHandler() {
  if (!gamePlay) {
    gamePlay = true;
    gameArea.innerHTML = "";
    document.getElementById("finished_game").innerHTML = "";
    numOfCombo();
    score = 0;
    generation();
    button.innerHTML = "check correctly";
    message.innerHTML = "Number of Guesses:";
  } else {
    const numbers = document.querySelectorAll(".numb_id");
    score++;
    message.innerHTML = "Number of Guesses: " + score;
    let winCondition = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].optional) {
        numbers[i].style.backgroundColor = "green";
        numbers[i].style.color = "white";
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].optional ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "white";
      }
      if (winCondition == numbers.length) {
        document.getElementById("finished_game").innerHTML =
          "You solved the game with " + score + " guesses";
        endGame();
      }
    }
  }
}

function numOfCombo() {
  var text = "";
  num = prompt("Enter number of ComboBox: ");
  if (num == null || num == "") {
    text = "invalid input!!❌";
    document.getElementById("prompt").innerHTML = text;
    document.getElementById("prompt").style.color = "red";
  } else {
    text = "OK, Let's Go ✔";
    document.getElementById("prompt").innerHTML = text;
    document.getElementById("prompt").style.color = "green";
  }
}

function endGame() {
  gamePlay = false;
  button.innerHTML = "Restart";
}

function generation() {
  for (let i = 0; i < num; i++) {
    let element = document.createElement("input");
    element.setAttribute("type", "number");
    element.min = 0;
    element.max = 9;
    //  element.size = 1;
    element.style.width = "100px";
    element.classList.add("numb_id");
    element.optional = Math.floor(Math.random() * 10);
    element.value = 0;
    //  element.order = i;
    gameArea.appendChild(element);
  }
}
