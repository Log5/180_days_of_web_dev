// TESTING AREA



// VARIABLE DEFINTION

const character = document.getElementById("character");
const block = document.getElementById("block");

const enemies = document.getElementById("enemy");
const start_game_btn = document.getElementById("start_game_btn");
let positionChar = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
let enemy_width = 20;
let enemy_height = 20;
let character_width = 30;

let characterPosX = 
	parseInt(window.getComputedStyle(character).getPropertyValue("left"));
let enemyPosX = 
	parseInt(window.getComputedStyle(enemies).getPropertyValue("left"));
let enemyPosY = 
	parseInt(window.getComputedStyle(enemies).getPropertyValue("top"));

let characterPos = (characterPosX * 2) + 30;
let enemyPos = (enemyPosX * 2) + enemy_width;
let colision = characterPos - enemyPos;

let gameOver = false;
let score = 0;
let scoreID = document.getElementById("score");
scoreID.innerHTML = score;

// START GAME

function start_game() {
	start_game_btn.style.display= "none";
	reset_game_btn.style.display= "none";
	enemies.classList.remove("display_none");
	enemies.classList.add("block_animation");
	generate_size_pos_1();
	scoring();
	checkDead();
	console.log("Start game executed");
}

// MOVE FUNCTION

function move_left() {

	positionChar -= 40;

	if (positionChar > 0) {
		character.style.left = positionChar + "px";
	} else {
		positionChar = 0;
		character.style.left = positionChar + "px";
	}
	
}

function move_right() {
	
	positionChar += 40;

	if (positionChar < 270) {
		character.style.left = positionChar + "px";
	} else {
		positionChar = 270;
		character.style.left = positionChar + "px";
	}
}

document.addEventListener("keydown", event => {

	switch(event.keyCode) {
		case 37: 
			move_left();
			break;
		case 39:
			move_right();
			break;
	}

});

// GENERATE SCORE

function scoring() {
	let scoreCounter = setInterval(function() {
		score += 1;
		scoreID.innerHTML = score;

		if (gameOver == true) {
			clearInterval(scoreCounter);
			console.log("Score counter stopped");
		}

	}, 100)
}

// GENERATE ENEMY SIZE AND POS

function generate_size_pos_1() {

	let genSizePos = setInterval(function() {

		// GENERATION POSITION
		enemyPosX = characterPosX;
		enemies.style.left = enemyPosX + "px";

		// GENERATION SIZE
		enemy_width = 40 + (Math.floor(Math.random() * 60));

		if (enemyPosX + enemy_width < 280) {
			enemies.style.width = enemy_width + "px";
		} else {
			enemy_width = 280 - enemyPosX;
			enemies.style.width = enemy_width + "px";
		};

		if (gameOver == true) {
			clearInterval(genSizePos);
			console.log("Interval stopped");
		}

	}, 1000);
}



// CHECK GAME LOST

function checkDead() {

	let checkDead = setInterval(function() {

		characterPosX = 
			parseInt(window.getComputedStyle(character).getPropertyValue("left"));
		enemyPosX = 
			parseInt(window.getComputedStyle(enemies).getPropertyValue("left"));
		enemyPosY = 
			parseInt(window.getComputedStyle(enemies).getPropertyValue("top"));

		characterPos = (characterPosX * 2) + 30;
		enemyPos = (enemyPosX * 2) + enemy_width;
		colision = characterPos - enemyPos;

		if (((enemyPosY > 540) && (enemyPosY < 550)) && (colision >= -(character_width + enemy_width -2)) && (colision <= (character_width + enemy_width -2)) ) {
			gameOver = true;
			enemies.classList.add("display_none");
			enemies.classList.remove("block_animation");
			alert("You lose. Your score is: " + score);
			clearInterval(checkDead);
			document.getElementById("reset_game_btn").style.display = "block";
		}

	}, 10);
}

// RESTART GAME

function reset_game() {
	start_game();
	gameOver = false;
	score = 0;
}



































