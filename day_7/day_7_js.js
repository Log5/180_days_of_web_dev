
//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
//this is the variable for the name of the character
var playerName;



//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario

input.onkeypress = function(event) {
	console.log(input.value);
	if (event.key == "Enter" || event.keyCode == 13) {
		playerName = input.value;
		input.parentNode.removeChild(input)
		advanceTo(scenario.two)
	}
};

//this changes the text and puts in your characters name

var changeText = function(words) {
	text.innerHTML = words.replace("Player Name", playerName);
};


//this looks at the number of options we have set and creates enough buttons



var changeButtons = function(buttonList = []) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
var advanceTo = function(s) {
  changeText(s.text)
  changeButtons(s.buttons)
};






//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
var scenario = {
  one: {
    text: "Welcome! Are you ready for your next Tycoon adventure?<br/> Enter your name to begin!",
  },
  two: {
    text: "Well, Player Name, you are given $10,000 by your dad to invest in your future.<br/> What should be your first investment?",
    buttons: [["Invest in an AI startup", "advanceTo(scenario.three)"],["Buy a second-hand BMW Z4", "advanceTo(scenario.four)"]]
  },
  three: {
    text: "Well done, Player Name! The startup you have invested in has been acquired by Elon Musk two weeks after your investment! You now have a capital of $50,000.</br> What will you do?",
    buttons: [["Launch your own bio-tech startup", "advanceTo(scenario.five)"], ["Take a gap year to travel the world", "advanceTo(scenario.six)"]]
  },
  four: {
    text: "Two months after, you are broke and forced to take a meaningless and boring accounting job...",
    buttons: [["Try again", "advanceTo(scenario.two)"]]
  },
  five: {
    text: "You've decided to name your startup Theronas and to work on some revolutionary poop testing device. Sadly, you have difficulties to raise money (despite your turtleneck) and your working capital is decreasing rapidly. What should you do?",
    buttons: [["Perseve! [to include motivational quote]", "advanceTo(scenario.four)"], ["Sell now, before its too late", "advanceTo(scenario.seven)"]]
  },
  six: {
  	text: "First stop: Japan! During a karaoke party, you meet some Japan dude who runs a shoe factory nearby. Later that night you end up signing a purchase agreement for 30,000 pairs of Nuke shoes!",
	buttons: [["Try to sell all the shoes on the West Coast, near the surfers", "advanceTo(scenario.eight)"], ["Rebrand the shoes to Nike and sell back the contract to some tourist in the street", "advanceTo(scenario.nine)"]]
  },
  seven: {
  	text: "You manage to sell your company, including all patents, to a wealthy plastic surgeon. You have $30,000 in bank. What do you want to do?",
  	buttons: [["Take a flight to Belgium to drink some real beers", "advanceTo(scenario.ten)"],["Buy a hoverboard","advanceTo(scenario.ten)"]]
  },
  eight: {
  	text: "Nuke shoes are a massive success on the West Coast! All the 30,000 pairs have been sold quicker than the new iPhone! You have $100,000 on your bank account. What do you want to do?",
  	buttons: [["Send a message to Elon to check if he's willing to sell Tesla", "advanceTo(scenario.ten)"],["Start a candy shop", "advanceTo(scenario.ten)"]]
  },
  nine: {
  	text:"That's a nice try, but the first tourist you approached was the Deputy Director of the FBI in vacation with his family. You will spend the night in jail.",
  	buttons: [["Bribe the guard with the $5,000 you had in your left sock", "advanceTo(scenario.ten)"],["Dig a tunnel with a spoon", "advanceTo(scenario.ten)"]]
  },
  ten: {
  	text: "To be continued! Drop me an email to loic.boset@gmail.com if you'd like more of this game!",
  	buttons: [["Try again", "advanceTo(scenario.two)"]]
  }
};


//this is the code that starts the game
advanceTo(scenario.one);