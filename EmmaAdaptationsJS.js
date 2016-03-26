

var description = document.getElementById("description");
var headerButton = document.getElementById("header");
var Emma1972Button = document.getElementById("Emma1972");
var Emma1996Button = document.getElementById("Emma1996");
var Emma1997Button = document.getElementById("Emma1997");
var Emma2009Button = document.getElementById("Emma2009");
var Emma1972Circle = document.getElementById("Emma1972Circle");
var Emma1996Circle = document.getElementById("Emma1996Circle");
var Emma1997Circle = document.getElementById("Emma1997Circle");
var Emma2009Circle = document.getElementById("Emma2009Circle");
var EmmaApprovedDiv = document.getElementById("EmmaApprovedEmotion");
var EmmaApprovedPicture = document.getElementById("EmmaApprovedEmotionPicture");

function headerChange() {
	description.innerHTML = "Click the Emma icons to read descriptions of each adaptation!";
	Emma1972Circle.setAttribute("class","unselected");
	Emma1996Circle.setAttribute("class","unselected");
	Emma1997Circle.setAttribute("class","unselected");
	Emma2009Circle.setAttribute("class","unselected");
}

function Emma1972Change() {
	description.innerHTML = "This was a six-part TV serial by the BBC in 1972.";
	Emma1972Circle.setAttribute("class","selected");
	Emma1996Circle.setAttribute("class","unselected");
	Emma1997Circle.setAttribute("class","unselected");
	Emma2009Circle.setAttribute("class","unselected");
}

function Emma1996Change() {
	description.innerHTML = "This was a theatrical release by Miramax Films in 1996.";
	Emma1972Circle.setAttribute("class","unselected");
	Emma1996Circle.setAttribute("class","selected");
	Emma1997Circle.setAttribute("class","unselected");
	Emma2009Circle.setAttribute("class","unselected");
}

function Emma1997Change() {
	description.innerHTML = "This was a TV film by ITV in 1997.";
	Emma1972Circle.setAttribute("class","unselected");
	Emma1996Circle.setAttribute("class","unselected");
	Emma1997Circle.setAttribute("class","selected");
	Emma2009Circle.setAttribute("class","unselected");
}

function Emma2009Change() {
	description.innerHTML = "This was a four-part TV serial by the BBC in 2009.";
	Emma1972Circle.setAttribute("class","unselected");
	Emma1996Circle.setAttribute("class","unselected");
	Emma1997Circle.setAttribute("class","unselected");
	Emma2009Circle.setAttribute("class","selected");
}

var date = new Date();


var isItEmmaDayVar = document.getElementById("isItEmmaDayID");
var EmmaApprovedSprite = document.getElementById("EmmaApprovedEmotionSprite");

function isItEmmaDay() {
	if (date.getDay() == 1) {
		isItEmmaDayVar.innerHTML = "What are you waiting for?  It's Monday!  Click the link above to see the latest video!";
		EmmaApprovedDiv.setAttribute("class","itIsTime");
		EmmaApprovedPicture.src = "EmmaApprovedHappy.png";
		
	}
	else if(date.getDay() == 4) {
		isItEmmaDayVar.innerHTML = "What are you waiting for?  It's Thursday!  Click the link above to see the latest video!";
		EmmaApprovedDiv.setAttribute("class","itIsTime");
		EmmaApprovedPicture.src = "EmmaApprovedHappy.png";
		
	}
	else {
		isItEmmaDayVar.innerHTML = "Too bad, it's not playing today!";
		EmmaApprovedDiv.setAttribute("class","itIsNotTime");
		EmmaApprovedPicture.src = "EmmaApprovedSad.png";
		
	}
}

headerButton.addEventListener("click", headerChange, false);
Emma1972Button.addEventListener("click", Emma1972Change, false);
Emma1996Button.addEventListener("click", Emma1996Change, false);
Emma1997Button.addEventListener("click", Emma1997Change, false);
Emma2009Button.addEventListener("click", Emma2009Change, false);
window.addEventListener("load", isItEmmaDay, false);

