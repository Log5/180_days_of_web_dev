let position = -1;
let toolArray = ["rock", "paper", "scissors", "lizard", "spock"];
let userTool;
let userScore = 0;
let computerScore = 0;

function changeToolLeft() {	
	position++;
	if (position == 5) {
		position = 0;
	};
	console.log(position);
	document.getElementById("user_to_hide").style.display = "none"
	userTool = toolArray[position];
	switch (userTool) {
		case "rock":
			document.getElementById("user_rock").style.display = "block";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "paper":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "block";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "scissors":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "block";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "lizard":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "block";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "spock":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "block";
			break;
		default:
			break;
	}
}


function changeToolRight() {
	position--;
	if (position == -1 || position == -2) {
		position = 4;
	};
	console.log(position);
	document.getElementById("user_to_hide").style.display = "none"
	userTool = toolArray[position];
	switch (userTool) {
		case "rock":
			document.getElementById("user_rock").style.display = "block";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "paper":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "block";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "scissors":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "block";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "lizard":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "block";
			document.getElementById("user_spock").style.display = "none";
			break;
		case "spock":
			document.getElementById("user_rock").style.display = "none";
			document.getElementById("user_paper").style.display = "none";
			document.getElementById("user_scissors").style.display = "none";
			document.getElementById("user_lizard").style.display = "none";
			document.getElementById("user_spock").style.display = "block";
			break;
		default:
			break;
	}
}

function combat() {
	let randomNumber = Math.floor(Math.random()*5);

	let computer_tool = toolArray[randomNumber];
	console.log(`Computer: ${computer_tool}.`);

	console.log(`User: ${userTool}`);

	document.getElementById("comp_to_hide").style.display = "none"
	switch (computer_tool) {
		case "rock":
			document.getElementById("comp_rock").style.display = "block";
			document.getElementById("comp_paper").style.display = "none";
			document.getElementById("comp_scissors").style.display = "none";
			document.getElementById("comp_lizard").style.display = "none";
			document.getElementById("comp_spock").style.display = "none";
			break;
		case "paper":
			document.getElementById("comp_rock").style.display = "none";
			document.getElementById("comp_paper").style.display = "block";
			document.getElementById("comp_scissors").style.display = "none";
			document.getElementById("comp_lizard").style.display = "none";
			document.getElementById("comp_spock").style.display = "none";
			break;
		case "scissors":
			document.getElementById("comp_rock").style.display = "none";
			document.getElementById("comp_paper").style.display = "none";
			document.getElementById("comp_scissors").style.display = "block";
			document.getElementById("comp_lizard").style.display = "none";
			document.getElementById("comp_spock").style.display = "none";
			break;
		case "lizard":
			document.getElementById("comp_rock").style.display = "none";
			document.getElementById("comp_paper").style.display = "none";
			document.getElementById("comp_scissors").style.display = "none";
			document.getElementById("comp_lizard").style.display = "block";
			document.getElementById("comp_spock").style.display = "none";
			break;
		case "spock":
			document.getElementById("comp_rock").style.display = "none";
			document.getElementById("comp_paper").style.display = "none";
			document.getElementById("comp_scissors").style.display = "none";
			document.getElementById("comp_lizard").style.display = "none";
			document.getElementById("comp_spock").style.display = "block";
			break;
		default:
			break;
	}

	if (userTool == undefined) {
		console.log("Undefined")
		return document.getElementById("message_text").innerHTML = "Choose a weapon with the red arrows!";
	};

	if (computer_tool == userTool) {
		console.log("That's a tie!")
		document.getElementById("message_text").innerHTML = "That's a tie!";
		return winner = "Tie"
	};

	switch (userTool) {
		case "rock":
			computer_tool == "paper" || computer_tool == "spock" ? result = "Computer won!" : result = "You won!";
			break;
		case "paper":
			computer_tool == "lizard" || computer_tool == "scissors" ? result = "Computer won!" : result = "You won!";
			break;
		case "scissors":
			computer_tool == "rock" || computer_tool == "spock" ? result = "Computer won!" : result = "You won!";
			break;
		case "lizard":
			computer_tool == "rock" || computer_tool == "scissors" ? result = "Computer won!" : result = "You won!";
			break;
		case "spock":
			computer_tool == "lizard" || computer_tool == "paper" ? result = "Computer won!" : result = "You won!";
			break;
		default:
			break;
	};

	console.log(result);
	document.getElementById("message_text").innerHTML = result;

	if (result == "You won!") {
		userScore++;
		console.log(userScore);
		document.getElementById("user_score_text").innerHTML = userScore;
	} else if (result == "Computer won!") {
		computerScore++;
		console.log(computerScore);
		document.getElementById("computer_score_text").innerHTML = computerScore;
	};
}























