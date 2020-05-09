
function calculateInput() {
	let inputValue = document.getElementById("userInput").value;

	let selected_degrees = document.getElementById("selected_degrees").value;

	if (selected_degrees === "celsius") {
		let celsius = inputValue;
		let fahrenheit = Math.round(inputValue * (9/5) + 32);
		let kelvin = inputValue * 1 + 273.15;
		let celius_text = document.getElementById("celsius_text").innerHTML = celsius + " degrees";
		let fahrenheit_text = document.getElementById("fahrenheit_text").innerHTML = fahrenheit + " degrees";
		let kelvin_text = document.getElementById("kelvin_text").innerHTML = kelvin + " degrees";
		if (celsius > 25) {
			document.body.style.backgroundColor = "#B9121B";
		} else if (celsius > 10) {
			document.body.style.backgroundColor = "#F6E497";
		} else {
			document.body.style.backgroundColor = "#5EB6DD";
		};

	} else if (selected_degrees === "fahrenheit") {
		let celsius = Math.round((inputValue - 32) * (5/9));
		let fahrenheit = inputValue;
		let kelvin = Math.round((inputValue - 32) * (5/9) + 273,15);
		let celius_text = document.getElementById("celsius_text").innerHTML = celsius + " degrees";
		let fahrenheit_text = document.getElementById("fahrenheit_text").innerHTML = fahrenheit + " degrees";
		let kelvin_text = document.getElementById("kelvin_text").innerHTML = kelvin + " degrees";
		if (celsius > 25) {
			document.body.style.backgroundColor = "#B9121B";
		} else if (celsius > 10) {
			document.body.style.backgroundColor = "#F6E497";
		} else {
			document.body.style.backgroundColor = "#5EB6DD";
		};
	} else {
		let celsius = Math.round(inputValue - 273.15);
		let fahrenheit = Math.round((inputValue - 273.15) * (9/5) + 32);
		let kelvin = inputValue;
		let celius_text = document.getElementById("celsius_text").innerHTML = celsius + " degrees";
		let fahrenheit_text = document.getElementById("fahrenheit_text").innerHTML = fahrenheit + " degrees";
		let kelvin_text = document.getElementById("kelvin_text").innerHTML = kelvin + " degrees";
		if (celsius > 25) {
			document.body.style.backgroundColor = "#B9121B";
		} else if (celsius > 10) {
			document.body.style.backgroundColor = "#F6E497";
		} else {
			document.body.style.backgroundColor = "#5EB6DD";
		};
	};

};
