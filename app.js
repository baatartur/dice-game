//Шоо буулгахад санамсаргүй 1-6 хүртэл буулгах хувьсагч
newGame();
var isNewGame;
var activePlayer;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;
// Тоглогчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores;
// Тоглоомын төгөсгөл

// шоо зургаар буудаг хувьсагч
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame) {
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
  } else {
    alert("Тоглоом дууссан тул New Game товчийг дарнуу");
  }
});

// Hold list эвэнт хийх
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScores;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // ssss
    if (scores[activePlayer] >= 100) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent =
        " Та хожилоо ";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      nextPlayer();
    }
  } else {
    alert("Тоглоом дууссан тул New Game товчийг дарнуу");
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
  isNewGame = true;
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
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
}
