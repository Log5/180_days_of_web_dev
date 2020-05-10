
function calculateAge() {
	const ageInput = document.getElementById("input_box").value;
	let dog_age;
	if (ageInput > 0) {
		if (ageInput == 1) {
			dog_age = 15;
			document.getElementById("age_result").innerHTML = dog_age;
			document.getElementById("result_message").innerHTML = "That's a young puppy!";
			document.getElementById("image_young").style.display = "block";
			document.getElementById("image_ado").style.display = "none";
			document.getElementById("image_old").style.display = "none";
		} else if (ageInput == 2) {
			dog_age = 24;
			document.getElementById("age_result").innerHTML = dog_age;
			document.getElementById("result_message").innerHTML = "That's a young dog!";
			document.getElementById("image_young").style.display = "none";
			document.getElementById("image_ado").style.display = "block";
			document.getElementById("image_old").style.display = "none";
		} else {
			dog_age = 24 + ((ageInput-2)*5);
			document.getElementById("age_result").innerHTML = dog_age;
			document.getElementById("result_message").innerHTML = "That's an adult dog!";
			document.getElementById("image_young").style.display = "none";
			document.getElementById("image_ado").style.display = "none";
			document.getElementById("image_old").style.display = "block";
		}
	} else {
		return document.getElementById("age_result").innerHTML = 0;
	}
};