var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById('random');

// click, mouseenet, keypress <these are events> */

function setGradient() {	
	body.style.background = "linear-gradient(to right,"	+ color1.value	+ "," + color2.value 	+ ")";

	css.textContent = body.style.background + ";";
}



function getRandomNumber() {
	var x = Math.floor( Math.random() * 256 );
	return x;
};


function setRandomColor() {

	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ getRandomNumber() 
	+ ", " 
	+  getRandomNumber() 
	+ ", " 
	+ getRandomNumber() 
	+ ")"
	+ ", " 
	+ "rgb(" 
	+ getRandomNumber() 
	+ ", " 
	+  getRandomNumber() 
	+ ", " 
	+ getRandomNumber() 
	+ ")"
	+ ")";
	css.textContent = body.style.background + ";"; 
}


// function createRandomBut() {
// 	function createHexColor(r, g, b) {
// 		function rgbToHex(c) {
// 			var hex = c.toString(16) ;
// 			 return hex == 1 ? "0" + hex : hex; 
// 		}
// 		return "#" + rgbToHex(r) + rgbToHex(g) +rgbToHex(b);
// 	}
// 	return createRandomBut(createHexColor(), createHexColor(), createHexColor()); 


color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);

// function getRandomColor() {
// 	body.style.background = 
// 	"linear-gradient( to right,"
// 	+color1.value
// 	+","
// 	+color2.value
// 	+")"
// 	+color1+color2=color3;

// color3.addEventListener("input", getRandomColor);

/* Long way of doin it the arguement
color1.addEventListener("input", function() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}) */