/*
	menup
	levelp
	gamep
	infop
	creditp
*/

window.onload = init;
function init (){
	document.getElementById("menup").style.display = "block";
	
	var jugarButton = document.getElementById("jugarButton");
	jugarButton.addEventListener('click', navigate('menup', 'levelp'));

	var instruccionesButton = document.getElementById("instruccionesButton");
	instruccionesButton.addEventListener('click', navigate('menup', 'infop'));

	var creditosButton = document.getElementById("creditosButton");
	creditosButton.addEventListener('click', navigate('menup', 'creditp'));

	var lvl1Button = document.getElementById("lvl1Button");
	lvl1Button.addEventListener('click', navigate('levelp', 'gamep'));
	
	var levelpBackButton = document.getElementById("levelpBackButton");
	levelpBackButton.addEventListener('click', navigate('levelp', 'menup'));

	var gamepBackButton = document.getElementById("gamepBackButton");
	gamepBackButton.addEventListener('click', navigate('gamep', 'levelp'));
	
	var infopBackButton = document.getElementById("infopBackButton");
	infopBackButton.addEventListener('click', navigate('infop', 'menup'));

	var creditpBackButton = document.getElementById("creditpBackButton");
	creditpBackButton.addEventListener('click', navigate('creditp', 'menup'));
}

function show (id) {
	document.getElementById(id).style.display = "block";
}

function hide (id) {
	document.getElementById(id).style.display = "none";
}

var navigate = function(actual, next) {
	return function () {
		hide(actual);
		show(next);
	}
}