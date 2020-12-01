var arrayDirection = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//                     0	1	  2     3    4     5    6    7
var duck = document.getElementById("duck");
var stageImage = document.getElementById("stageImage");
var gameOverScreen = document.getElementById("gameOverScreen");

var scoreboard = document.getElementById("scoreboard");
var scoreboardHit = document.getElementById("hitText");
var scoreboardMiss = document.getElementById("missText");
var finalScoreHitText = document.getElementById("finalScoreHitText");
var finalScoreMissText = document.getElementById("finalScoreMissText");

var retryButton = document.getElementById("retryButton");

var positionX = 515;
var positionY = 260;

var hitScore = 0;
var missScore = 0;
var totalScore = 0;

var clicked = true;

var duckRepeat = setInterval(moveDuck, 500);

duck.addEventListener("click", function(){
	duck.style.display = "none"
	hitScore = hitScore + 1;
	scoreboardHit.innerHTML = hitScore;
	gameOver();
	clicked = false;
})
stageImage.addEventListener("click", function(){
	missScore = missScore + 1;
	scoreboardMiss.innerHTML = missScore;
	gameOver();
})
retryButton.addEventListener("click", function(){
	location.reload();
})
function moveDuck() {
	if (clicked == true) {
		var randomNumber = Math.floor((Math.random() * 8));
		fly(arrayDirection[randomNumber]);
	}
	else {
		duck.style.left = "515px"
		duck.style.top = "260px"
		duck.style.display = "inline";
		positionX = 515;
		positionY = 260;
		clicked = true;
	}	
}
function gameOver() {
	totalScore = hitScore + missScore;
	if (totalScore >= 20) {
		clearInterval(duckRepeat);
		gameOverScreen.style.display = "block";
		duck.style.display = "none";
		scoreboard.style.display = "none";
		finalScoreHitText.innerHTML = hitScore;
		finalScoreMissText.innerHTML = missScore;
	}
}
function fly(direction) {
	if (direction == "N") {
		if (positionY > -40) {
			positionY = positionY - 75;
			duck.style.top = positionY + "px";
		}		
	}
	else if (direction == "NE") {
		if (positionY > -40 && positionX < 1040) {
			positionY = positionY - 75;
			duck.style.top = positionY + "px";
			positionX = positionX + 75;
			duck.style.left = positionX + "px";
		}
	}
	else if (direction == "E") {
		if (positionX < 1040) {
			positionX = positionX + 75;
			duck.style.left = positionX + "px";
		}
	}
	else if (direction == "SE") {
		if (positionY < 485 && positionX < 1040) {
			positionY = positionY + 75;
			duck.style.top = positionY + "px";
			positionX = positionX + 75;
			duck.style.left = positionX + "px";
		}
	}
	else if (direction == "S") {
		if (positionY < 485) {
			positionY = positionY + 75;
			duck.style.top = positionY + "px";
		}	
	}
	else if (direction == "SW") {
		if (positionY < 485 && positionX > -10) {
			positionY = positionY + 75;
			duck.style.top = positionY + "px";
			positionX = positionX - 75;
			duck.style.left = positionX + "px";
		}
	}
	else if (direction == "W") {
		if (positionX > -10) {
			positionX = positionX - 75;
			duck.style.left = positionX + "px";
		}
	}
	else if (direction == "NW") {
		if (positionY > -40 && positionX > -10) {
			positionY = positionY - 75;
			duck.style.top = positionY + "px";
			positionX = positionX - 75;
			duck.style.left = positionX + "px";
		}
	}
	console.log("X = " + positionX + " Y = " + positionY)
}
