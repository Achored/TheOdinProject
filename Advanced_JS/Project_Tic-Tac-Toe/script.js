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

var back = document.getElementById("back");
var start = document.getElementById("start");

// Tic tac toe div
var game =document.getElementById("game");
var buttons = game.getElementsByTagName("button");

// Tic tac toe buttons
var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");

let i = 0;

// Functions to hide and show a Player 1 or Player 2 div
show = (show) => {
    show.style.display = "flex";
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
 
  if (player1_name.value != ""){
    show(player2);
    hide(player1);
  }
  else {
    alert("Please input a value.");}
});


//Button to play with an AI instead of another player

vsAI.addEventListener("click", function(event){
  hide(players);
  show(game);
  hide(play_btn);
});

// Starts the game and show the tic tac toe division

start.addEventListener("click", function(event){
  if (player2_name.value != ""){
    hide(players);
    hide(play_btn);
    show(game);
    
  }
  else {
    alert("Please input a value.");}
});

back.addEventListener("click", function(event){
  show(players);
  show(player1);
  hide(player2);
});


checkTurn = (button) => {
  if  (i % 2 === 0) {
    button.textContent = "X";
  }
  else {
    button.textContent = "O";
  }
}

ifClicked = (button) => {
  if (button.textContent == "X" || button.textContent == "O") {
    alert("Button already clicked. Choose another one.");
  }
  else {
    checkTurn(button);
   
  }
}

for (let j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener("click", function() {
    ifClicked(buttons[j]);
    i = i + 1;

    // Check who wins
    if (
      (button0.textContent === "X" && button1.textContent === "X" && button2.textContent === "X") ||
      (button3.textContent === "X" && button4.textContent === "X" && button5.textContent === "X") ||
      (button6.textContent === "X" && button7.textContent === "X" && button8.textContent === "X") ||
      (button0.textContent === "X" && button3.textContent === "X" && button6.textContent === "X") ||
      (button1.textContent === "X" && button4.textContent === "X" && button7.textContent === "X") ||
      (button2.textContent === "X" && button5.textContent === "X" && button8.textContent === "X") ||
      (button0.textContent === "X" && button4.textContent === "X" && button8.textContent === "X") ||
      (button2.textContent === "X" && button4.textContent === "X" && button6.textContent === "X")
      )
        {
          alert (player1_name.value + " wins!")
        }
    
      else if (
        (button0.textContent === "O" && button1.textContent === "O" && button2.textContent === "O") ||
        (button3.textContent === "O" && button4.textContent === "O" && button5.textContent === "O") ||
        (button6.textContent === "O" && button7.textContent === "O" && button8.textContent === "O") ||
        (button0.textContent === "O" && button3.textContent === "O" && button6.textContent === "O") ||
        (button1.textContent === "O" && button4.textContent === "O" && button7.textContent === "O") ||
        (button2.textContent === "O" && button5.textContent === "O" && button8.textContent === "O") ||
        (button0.textContent === "O" && button4.textContent === "O" && button8.textContent === "O") ||
        (button2.textContent === "O" && button4.textContent === "O" && button6.textContent === "O")
      )
        {
          alert (player2_name.value + " wins!")
        }

        else if (
          button0.textContent != "" &&
          button1.textContent != "" &&
          button2.textContent != "" &&
          button3.textContent != "" &&
          button4.textContent != "" &&
          button5.textContent != "" &&
          button6.textContent != "" &&
          button7.textContent != "" &&
          button8.textContent != "" 
        ) {
      alert("It's a tie!");}
    });
}

