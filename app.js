// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores = 0;

//Шоо буулгахад санамсаргүй 1-6 хүртэл буулгах хувьсагч
var dice = Math.floor(Math.random() * 6) + 1;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
});
