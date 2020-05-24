// OPEN / CLOSE MENU FUNCTION

let openedMenu = false;

function menu() {

	if (openedMenu === false) {
		document.getElementById("menu").style.display = "block"
		return openedMenu = true;
	};

	if (openedMenu === true) {
		document.getElementById("menu").style.display = "none"
		return openedMenu = false;
	};
}

// FADE IN FUNCTIONS

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
	threshold: 0,
  	rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	});

}, appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});










