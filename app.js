// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;
// Тоглогчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores;
//Шоо буулгахад санамсаргүй 1-6 хүртэл буулгах хувьсагч
newGame();
// шоо зургаар буудаг хувьсагч
var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 7);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
  // Тоглогчийн ээлжийн оноог өөрчилнөө
  if (dice !== 0) {
    roundScores = roundScores + dice;
    document.getElementById(
      "current-" + activePlayer
    ).textContent = roundScores;
  } else {
    nextPlayer();
  }
});
// Hold list эвэнт хийх
document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] = scores[activePlayer] + roundScores;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent =
      " Танд баяр хүргье !!! ";
  } else {
    nextPlayer();
  }
});
function nextPlayer() {
  roundScores = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", function() {
  newGame();
});
function newGame() {
  activePlayer = 0;
  // Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  // Тоглогчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
  roundScores = 0;
  //Шоо буулгахад санамсаргүй 1-6 хүртэл буулгах хувьсагч
  var dice = Math.floor(Math.random() * 7);
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
}
