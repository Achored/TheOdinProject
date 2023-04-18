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
var buttons = game.getElementsByClassName("playb");

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

// Option (New Game/Restart) Buttons

var restart = document.getElementById("restart");
var newgame = document.getElementById("newgame");


// Sets a global variable for game buttons to check turns. 

let i = 0;
let playing = 1;


// Function to disable buttons after the match has been decided. 

disableBtns = () => {
  button0.disabled = true;
  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  button5.disabled = true;
  button6.disabled = true;
  button7.disabled = true;
  button8.disabled = true;
}

enableBtns = () => {
  button0.disabled = false;
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  button4.disabled = false;
  button5.disabled = false;
  button6.disabled = false;
  button7.disabled = false;
  button8.disabled = false;
}


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


// Restarts the game and clears the buttons. If player 1 restarts the game, player 2 wins and vice versa. 

restart.addEventListener("click", function(event) {
  button0.textContent = "";
  button1.textContent = "";
  button2.textContent = "";
  button3.textContent = "";
  button4.textContent = "";
  button5.textContent = "";
  button6.textContent = "";
  button7.textContent = "";
  button8.textContent = "";

  if (playing === 1) {

    if (i % 2 === 0)
    {
      alert(player2_name.value + " wins by default!");
      i = 0;
    } 
    else {
      alert(player1_name.value + " wins by default!");
      i = 0;
    }
  }
  else {
    enableBtns();
    i = 0;
  }
})

// Initiates a new game

newgame.addEventListener("click", function(event){
  player1_name.value = "";
  player2_name.value = "";
  show(players);
  show(player1);
  hide(player2);
  hide(game);

})

// Function that checks the turn (X or O) based on how many clicks were initiated. 

checkTurn = (button) => {
  if  (i % 2 === 0) {
    button.textContent = "X";
  }
  else {
    button.textContent = "O";
  }
}


// Function that checks if the button already has a value of X or O. 
ifClicked = (button) => {
  if (button.textContent == "X" || button.textContent == "O") {
    alert("Button already clicked. Choose another one.");
  }
  else {
    checkTurn(button);
   
  }
}

// Function 
randomNum = () => {
  return Math.floor(Math.random() * 9);
}


//

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
          disableBtns();
          playing = 0;

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
          disableBtns();
          playing = 0;
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
      alert("It's a tie!");
      disableBtns();
      playing = 0;
    }
    });
  }


  function randomNum() {
    if (!randomNum.numbers) {
      randomNum.numbers = Array.from(Array(9).keys()); // create an array [0, 1, 2, ..., 8]
      randomNum.currentIndex = randomNum.numbers.length;
    }
    
    const randomIndex = Math.floor(Math.random() * randomNum.currentIndex);
    const randomNum = randomNum.numbers[randomIndex];
    randomNum.currentIndex--;
    
    // swap the chosen element with the last element to remove it from the list
    [randomNum.numbers[randomIndex], randomNum.numbers[randomNum.currentIndex]] =
      [randomNum.numbers[randomNum.currentIndex], randomNum.numbers[randomIndex]];
    
    return randomNum;
  }