window.onload = function() {
 	// variables
	let flip = document.getElementById("flip");
	let letter = document.getElementById("letter");
	let btnOpen = document.getElementById("open");
	let btnClose = document.getElementById("close");

	// listener
	btnOpen.addEventListener("click", open);
	btnClose.addEventListener("click", close);
}

// open
function open() {
	flip.classList.add("open");
	flip.classList.remove("close");
	setTimeout(function () {
		letter.classList.add("letterOpen");
		letter.classList.remove("letterClose");
		letter.style.zIndex = "7";
	}, 400);
}

// close
function close() {
	letter.classList.remove("letterOpen");
	letter.classList.add("letterClose");
	setTimeout(function () {
		flip.classList.remove("open");
		flip.classList.add("close");
		letter.style.zIndex = "5";
	}, 300);
}
