// VARIABLES
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const PLAYER_WIDTH = 20;
const PLAYER_MAX_SPEED = 600;

const LASER_MAX_SPEED = 300;
const LASER_COOLDOWN = 0.2;

const ENEMY_LASER_COOLDOWN = 0.8 + Math.floor(Math.random()*5);
const ENEMY_LASER_MAX_SPEED = 300;

const GAME_STATE = {
	gameOver: false,
	lastTime: Date.now(),
	playerX: 0,
	playerY: 0,
	leftPressed: false,
	rightPressed: false,
	spacePressed: false,
	playerCooldown: 0,
	lasers: [],
	enemies: [],
	enemiesCooldown: 0, 
	enemyLasers: []
};

const ENEMIES_PER_ROW = 10;
const ENEMY_HORIZONTAL_PADDING = 80;
const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_VERTICAL_SPACING = 80;


// SET POSISTION FUNCTION

function setPostion($el, x, y) {
	$el.style.transform = "translate(" + x + "px , " + y + "px";
}

function clamp(v, min, max) {
	if (v < min) {
		return min;
	} else if (v > max) {
		return max;
	} else {
		return v;
	}
}

// CREATE PLAYER FUNCTION

function createPlayer($container) {
	GAME_STATE.playerX = GAME_WIDTH / 2;
	GAME_STATE.playerY = GAME_HEIGHT - 50;
	const $player = document.createElement("img");
	$player.src = "img/player-blue-1.png";
	$player.className = "player";
	$container.appendChild($player);
	setPostion($player, GAME_STATE.playerX, GAME_STATE.playerY);
}

// UPDATE PLAYER

function updatePlayer(dt, $container) {
	if (GAME_STATE.leftPressed) {
		GAME_STATE.playerX -= dt * PLAYER_MAX_SPEED;
	} else if (GAME_STATE.rightPressed) {
		GAME_STATE.playerX += dt * PLAYER_MAX_SPEED;
	};

	const $player = document.querySelector(".player");
	setPostion($player, clamp(GAME_STATE.playerX, (0 + PLAYER_WIDTH), (GAME_WIDTH - PLAYER_WIDTH)), GAME_STATE.playerY);

	if (GAME_STATE.spacePressed && GAME_STATE.playerCooldown <= 0) {
		createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY);
		GAME_STATE.playerCooldown = LASER_COOLDOWN;
	}

	if (GAME_STATE.playerCooldown > 0) {
		GAME_STATE.playerCooldown -= dt;
	}
}

// CREATE LASER FUNCTIONS

function createLaser($container, x, y) {
	const $element = document.createElement("img");
	$element.src = "img/laser-blue-1.png";
	$element.className = "laser";
	$container.appendChild($element);
	const laser = {x, y, $element};
	GAME_STATE.lasers.push(laser);
	setPostion($element, x, y);
}

function createEnemyLaser($container, x, y) {
	
	const $element = document.createElement("img");
	$element.src = "img/laser-red-12.png";
	$element.className = "enemy-laser";
	$container.appendChild($element);
	const enemyLaser = {x, y, $element};
	GAME_STATE.enemyLasers.push(enemyLaser);
	setPostion($element, x, y);	
}

// UPDATE LASERS

function updateLasers(dt, $container) {
	const lasers = GAME_STATE.lasers;

	for (let i = 0; i < lasers.length; i++) {
		const laser = lasers[i];
		laser.y -= dt * LASER_MAX_SPEED;
		if (laser.y < 0) {
			destroyLaser($container, laser);
		}
		setPostion(laser.$element, laser.x, laser.y);
		const r1 = laser.$element.getBoundingClientRect();
		const enemies = GAME_STATE.enemies;
		for (let j = 0; j < enemies.length; j++)  {
			const enemy = enemies[j];
			if (enemy.isDead) continue;
			const r2 = enemy.$element.getBoundingClientRect();
			if (intersection(r1, r2)) {
				// Enemy was hit
				destroyEnemy($container, enemy);
				destroyLaser($container, laser);
				break;
			}
		}
	}

	GAME_STATE.lasers = GAME_STATE.lasers.filter(e => !e.isDead)
}

function destroyLaser($container, laser) {
	$container.removeChild(laser.$element);
	laser.isDead = true;
}

// CREATE ENEMIES FUNCTION 

function createEnemy($container, x, y) {
	const $element = document.createElement("img");
	$element.src = "img/enemy-blue-1.png";
	$element.className = "enemy";
	$container.appendChild($element);
	let laserFired = false;
	const enemy = {x, y, $element, laserFired}

	GAME_STATE.enemies.push(enemy);
	setPostion($element, x, y);
}

// UPDATE ENEMIES FUNCTION

function updateEnemies(dt, $container) {
	const dx = Math.sin(GAME_STATE.lastTime / 1000.0) * 50;
	const dy = Math.cos(GAME_STATE.lastTime / 1000.0) * 10;

	const enemies = GAME_STATE.enemies;
	for (let i = 0; i < enemies.length; i++) {
		const enemy = enemies[i];
		const x = enemy.x + dx;
		const y = enemy.y + dy;
		setPostion(enemy.$element, x, y);

		// GENERATE ENEMY LASER
		//if (!GAME_STATE.enemies[i].laserFired) {
		//		createEnemyLaser($container, enemy.x, enemy.y, i);
		//		GAME_STATE.enemies[i].laserFired = true;
		//}

		if (!GAME_STATE.enemies[i].laserFired && GAME_STATE.enemiesCooldown <= 0) {
			createEnemyLaser($container, enemy.x, enemy.y, i);
			GAME_STATE.enemies[i].laserFired = true;
			GAME_STATE.enemiesCooldown = ENEMY_LASER_COOLDOWN;
		}

		if (GAME_STATE.enemiesCooldown > 0) {
			GAME_STATE.enemies[i].laserFired = false;
			GAME_STATE.enemiesCooldown -= dt;
		}
		
	}

	GAME_STATE.enemies = GAME_STATE.enemies.filter(e => !e.isDead);
}

function destroyEnemy($container, enemy) {
	$container.removeChild(enemy.$element);
	enemy.isDead = true;
}

function destroyPlayer($container, player) {
	$container.removeChild(player);
	GAME_STATE.gameOver = true;
	document.querySelector(".game-over").style.display = "block";
}

// UDPATE ENEMY LASERS

function updateEnemyLaser(dt, $container) {
	const enemyLasers = GAME_STATE.enemyLasers;

	for (let i = 0; i < enemyLasers.length; i++) {
		const enemyLaser = enemyLasers[i];
		enemyLaser.y += dt * ENEMY_LASER_MAX_SPEED;
		setPostion(enemyLaser.$element, enemyLaser.x, enemyLaser.y);
		if (enemyLaser.y > GAME_HEIGHT) {
			destroyLaser($container, enemyLaser);
		}

		const r1 = enemyLaser.$element.getBoundingClientRect();
		const $player = document.querySelector(".player");
		const r2 = $player.getBoundingClientRect();
		if (intersection(r1, r2)) {
			// Player was hit
			destroyPlayer($container, $player);
			destroyLaser($container, enemyLaser);
			console.log("Game Over");
			break;
		}
	}

	GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(e => !e.isDead)


}

// CHECK INTERSECTION BETWEEN LASERS AND ENEMIES / PLAYER

function intersection(r1, r2) {
	return !(
		r1.left > r2.right ||
		r1.right < r2.left ||
		r1.top > r2.bottom ||
		r1.bottom < r2.top 
		)
}

// GAME LOOP FUNCTION

function update() {
	const currentTime = Date.now();
	const dt = (currentTime - GAME_STATE.lastTime) / 1000;

	const $container = document.querySelector(".game");
	
	if (!GAME_STATE.gameOver) {
		updatePlayer(dt, $container);
		updateLasers(dt, $container);
		updateEnemies(dt, $container);
		updateEnemyLaser(dt, $container);
	}

	if (GAME_STATE.enemies.length === 0) {
		GAME_STATE.gameOver = true;
		document.querySelector(".congratulations").style.display = "block";
	}

	GAME_STATE.lastTime = currentTime;
	window.requestAnimationFrame(update);
}

// KEYBOARD LISTENER

function onKeyDown(e) {

	const $player = document.querySelector(".player");

	if (e.keyCode === KEY_CODE_LEFT) {
		GAME_STATE.leftPressed = true;
	} else if (e.keyCode === KEY_CODE_RIGHT) {
		GAME_STATE.rightPressed = true;
	} else if (e.keyCode === KEY_CODE_SPACE) {
		GAME_STATE.spacePressed = true;
	};
}

function onKeyUp(e) {

	const $player = document.querySelector(".player");

	if (e.keyCode === KEY_CODE_LEFT) {
		GAME_STATE.leftPressed = false;
	} else if (e.keyCode === KEY_CODE_RIGHT) {
		GAME_STATE.rightPressed = false;
	} else if (e.keyCode === KEY_CODE_SPACE) {
		GAME_STATE.spacePressed = false;
	};
}

// INIT FUNCTION

function init() {
	const $container = document.querySelector(".game");
	createPlayer($container);

	const enemySpacing = (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);
	for (let j = 0; j < 3; j++) {
		const y = ENEMY_VERTICAL_PADDING + (j * ENEMY_VERTICAL_SPACING);
		for (let i = 0; i < ENEMIES_PER_ROW; i++) {
			const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING;
			createEnemy($container, x, y);
		}
	}
}


// INIT GAME

init();

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);

























