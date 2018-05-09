var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var logo = document.getElementById("logo");
var h3 = document.getElementById("background");

logo.style.background = "linear-gradient(45deg, " + color1.value + ", " + color2.value + ")";
h3.textContent = body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	h3.textContent =body.style.background+";";
	logo.style.background = "linear-gradient(45deg, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
