var arrayDirection = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//                     0	1	  2     3    4     5    6    7
var duck = document.getElementById("duck");
var stageImage = document.getElementById("stageImage");
var gameOverScreen = document.getElementById("gameOverScreen");
var stage = document.getElementById("stage");

var scoreboard = document.getElementById("scoreboard");
var scoreboardHit = document.getElementById("hitText");
var scoreboardMiss = document.getElementById("missText");
var finalScoreHitText = document.getElementById("finalScoreHitText");
var finalScoreMissText = document.getElementById("finalScoreMissText");
var gameplayFeedback = document.getElementById("gameplayFeedback");

var retryButton = document.getElementById("retryButton");

var arrayStartPositionX = [-10, 65, 140, 215, 290, 365, 440, 515, 590, 665, 740, 815, 890, 965, 1040];
//                          0    1   2    3    4    5    6    7    8    9    10   11   12   13   14
var arrayStartPositionY = [485, 410, 335, 260, 185, 110, 35, -40];
//                          0    1    2    3    4    5    6    7

var positionX = 515;
var positionY = 260;

var hitScore = 0;
var missScore = 0;
var totalScore = 0;

var clicked = false;

var duckRepeat = setInterval(moveDuck, 500);

duck.addEventListener("click", function(){
	duck.style.display = "none"
	hitScore = hitScore + 1;
	scoreboardHit.innerHTML = hitScore;
	gameOver();
	clicked = true;
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
	if (clicked == false) {
		var randomNumber = Math.floor((Math.random() * 8));
		fly(arrayDirection[randomNumber]);
	}
	else {
		var randomPositionX = Math.floor((Math.random() * arrayStartPositionX.length));
		var randomPositionY = Math.floor((Math.random() * arrayStartPositionY.length));
		duck.style.left = arrayStartPositionX[randomPositionX] + "px";
		duck.style.top = arrayStartPositionY[randomPositionY] + "px";
		duck.style.display = "inline";
		positionX = arrayStartPositionX[randomPositionX];
		positionY = arrayStartPositionY[randomPositionY];
		clicked = false;
	}	
}
function gameOver() {
	totalScore = hitScore + missScore;
	if (totalScore >= 20) {
		clearInterval(duckRepeat);
		gameOverScreen.style.display = "block";
		stage.style.display = "none";
		scoreboard.style.display = "none";
		finalScoreHitText.innerHTML = hitScore;
		finalScoreMissText.innerHTML = missScore;
		if (hitScore <= 5) {
			gameplayFeedback.innerHTML = "Are you playing on a controller <br> or are you just not trying?";
		}
		else if (hitScore > 5 && hitScore <= 12) {
			gameplayFeedback.innerHTML = "Good not great.";
		}
		else if (hitScore > 12 && hitScore < 20) {
			gameplayFeedback.innerHTML = "You're really good at this!";
		}
		else {
			gameplayFeedback.innerHTML = "Ducks will get nightmares <br> about you.";
		}
		
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
