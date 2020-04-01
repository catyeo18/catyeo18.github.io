window.onload = function() {
	passWord();

 	// variables
	let flip = document.getElementById("flip");
	let letter = document.getElementById("letter");
	let btnOpen = document.getElementById("open");
	let btnClose = document.getElementById("close");

	// listener
	btnOpen.addEventListener("click", open);
	// btnClose.addEventListener("click", close);
}

function revealAll() {
	document.getElementById("all").style.visibility = "visible";
}

function passWord() {
	var testV = 1;
	var pass1 = prompt('Your Favorite Bears','');
	while (testV < 3) {
		if (!pass1)
			history.go(-1);
		if (pass1.toLowerCase() == "milkandmocha" || pass1.toLowerCase() == "milk_and_mocha") {
			alert('<333');
			revealAll();
			break;
		}
		testV+=1;
		var pass1 =
		prompt('This is not the password you are looking for','Your Favorite Bears');
	}
	if (pass1.toLowerCase()!="password" & testV ==3)
		history.go(-1);
	return "";
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
	setTimeout(function () {
		hideEnvelope();
	}, 2000);
	setTimeout(function () {
		revealLetter();
	}, 3500);
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

// hide envelope and buttons
function hideEnvelope() {
	document.getElementById("container").style.visibility = "hidden";
	document.getElementById("open").style.visibility = "hidden";
	document.getElementById("close").style.visibility = "hidden";
}

// reveal handwritten letter image
function revealLetter() {
	document.getElementById("letter_img").style.visibility = "visible";
	// document.getElementById("preletter").style.visibility = "visible";
}
