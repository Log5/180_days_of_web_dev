function askQuestion() {
	let randomNumber = Math.floor(Math.random()*8);
	let ballText = ["It is certain", "It is decidedly so", "Reply hazy try again", "Cannot predict now", "Do not count on it", "My sources say no", "Outlook not so good", "Signs point to yes"];
	let result = ballText[randomNumber];
	document.getElementById("ball_text").innerHTML = result;
	document.getElementById("ball_text").style.fontSize = "small";
}