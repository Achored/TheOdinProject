// Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs 
var players= document.getElementById("players");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

// Input type = text 
var player1_name = document.getElementById("player1-name")
var player2_name = document.getElementById("player2-name")

// Main button
var play_btn = document.getElementById("play");

// Player 1 Div buttons
var next_btn = document.getElementById("next");
var vsAI = document.getElementById("vs-AI");

// Player 2 Div buttons

var start = document.getElementById("start");

// Tic tac toe div
var game =document.getElementById("game");
var buttons = game.getElementsByTagName("button");

// Tic tac toe buttons
var buttonClass = document.getElementsByClassName("ttt")
var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");


// Functions to hide and show a Player 1 or Player 2 div
show = (show) => {
    show.style.display = "block";
}

hide = (hide) =>{
  hide.style.display = "none";
}

// Button to start the game and proceed to input details for player 1 and 2

play_btn.addEventListener("click", function(event){
  show(players);
  show(player1);
  hide(player2);
});

// Button to input player 2 details

next_btn.addEventListener("click", function(event){
  hide(player1);
  show(player2);
});


//Button to play with an AI instead of another player

vsAI.addEventListener("click", function(event){
  hide(players);
  show(game);
  hide(play_btn);
});

// Starts the game and show the tic tac toe division

start.addEventListener("click", function(event){
  hide(players);
  show(game);
  hide(play_btn);
});

//

button0.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button0.textContent = "X";
  } else {
    button0.textContent = "O";
  }
});

button1.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button1.textContent = "X";
  } else {
    button1.textContent = "O";
  }
});

button2.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button2.textContent = "X";
  } else {
    button2.textContent = "O";
  }
});

button3.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button3.textContent = "X";
  } else {
    button3.textContent = "O";
  }
});

button4.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button4.textContent = "X";
  } else {
    button4.textContent = "O";
  }
});

button5.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button5.textContent = "X";
  } else {
    button5.textContent = "O";
  }
});

button6.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button6.textContent = "X";
  } else {
    button6.textContent = "O";
  }
});

button7.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button7.textContent = "X";
  } else {
    button7.textContent = "O";
  }
});

button8.addEventListener("click", function(event){
  let i = turnChecker();
  if (i % 2 === 0) {
    button8.textContent = "X";
  } else {
    button8.textContent = "O";
  }
});


function turnChecker() {
  for (let i = 0; i <= 8; i++) {
    if (buttons.addEventListener("click", function(event) {})) {
      i++;
      return i;
    }
  }
}
