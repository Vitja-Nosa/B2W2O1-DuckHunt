var arrayDirection = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//                     0	1	  2     3    4     5    6    7
var duck = document.getElementById("duck");
var stageImage = document.getElementById("stageImage");

var scoreboardHit = document.getElementById("hit");
var scoreboardMiss = document.getElementById("miss");

var positionX = 515;
var positionY = 260;

var hitScore = 0;
var missScore = 0;

window.setInterval(moveDuck, 500);

duck.addEventListener("click", function(){
	hitScore = hitScore + 1;
	console.log(positionX)
	scoreboardHit.innerHTML = hitScore;
	duck.style.display = "none"
})
stageImage.addEventListener("click", function(){
	missScore = missScore + 1;
	scoreboardMiss.innerHTML = missScore;
})
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
}
function moveDuck() {
	duck.style.display = "inline"
	var randomNumber = Math.floor((Math.random() * 8));
	fly(arrayDirection[randomNumber]);
}
