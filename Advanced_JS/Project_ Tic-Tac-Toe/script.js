var players= document.getElementById("players");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player1_name = document.getElementById("player1-name")
var player2_name = document.getElementById("player2-name")
var play_btn = document.getElementById("play");
var next_btn = document.getElementById("next");
var vsAI = document.getElementById("vs-AI");
var start = document.getElementById("start");
var game =document.getElementById("game");

function show(show){
    show.style.display = "block";
}

function hide(hide){
  hide.style.display = "none";
}

next_btn.addEventListener("click", function(event){
  hide(player1);
  show(player2);
});
/* function player2_show(){
    player2.style.display = "block";
}

function player1_hide() {
    player1.style.display = "none";
}
function player2_hide() {
    player2.style.display = "none";
}
*/

play_btn.addEventListener("click", function(event){
  show(players);
  show(player1);
  hide(player2);
});

next_btn.addEventListener("click", function(event){
    player2_show();
});

vsAIbtn.addEventListener("click", function(event){

});

start.addEventListener("click", function(event){
  game.style.display = "block"
});
// Function to handle the OK button click event
function onOkClicked() {
  var text = input.value;
  alert("You entered: " + text);
  hideDialog();
}

// Attach event listeners to the dialog box and the OK button
dialog.addEventListener("click", function(event) {
  if (event.target == dialog) {
    hideDialog();
  }
});
document.getElementById("btn-ok").addEventListener("click", onOkClicked);


