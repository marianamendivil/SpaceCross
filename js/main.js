/*
	menup
	levelp
	gamep
	infop
	creditp
*/

window.onload = init;
function init (){

	// Nav 
	document.getElementById("loadp").style.display = "block";

	var time = document.getElementById("time");
	setTimeout(()=>{document.getElementById("loadp").style.display = "none"; document.getElementById("menup").style.display = "block";},2000);

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

	// Game

		var gameHelper = document.querySelector('.gameHelper');

	gameHelper.onkeyup = function(e) {
	    var max = 7; // The maxlength you want
	  
	    if(gameHelper.value.length > max) {
	      gameHelper.value = gameHelper.value.substring(0, max);
	    }
	  
	};

	var num1 = document.getElementById("num1");
	num1.addEventListener('focus', ()=>{showH('num1')}, true);
	num1.addEventListener('blur', ()=>{notShowH('num1')}, true);

	var num2 = document.getElementById("num2");
	num2.addEventListener('focus', ()=>{showH('num2')}, true);
	num2.addEventListener('blur', ()=>{notShowH('num2')}, true);

	var num3 = document.getElementById("num3");
	num3.addEventListener('focus', ()=>{showH('num3')}, true);
	num3.addEventListener('blur', ()=>{notShowH('num3')}, true);

	var num4 = document.getElementById("num4");
	num4.addEventListener('focus', ()=>{showH('num4')}, true);
	num4.addEventListener('blur', ()=>{notShowH('num4')}, true);

	var num5 = document.getElementById("num5");
	num5.addEventListener('focus', ()=>{showH('num5')}, true);
	num5.addEventListener('blur', ()=>{notShowH('num5')}, true);

	var num6 = document.getElementById("num6");
	num6.addEventListener('focus', ()=>{showH('num6')}, true);
	num6.addEventListener('blur', ()=>{notShowH('num6')}, true);

	var num7 = document.getElementById("num7");
	num7.addEventListener('focus', ()=>{showH('num7')}, true);
	num7.addEventListener('blur', ()=>{notShowH('num7')}, true);

	var num8 = document.getElementById("num8");
	num8.addEventListener('focus', ()=>{showH('num8')}, true);
	num8.addEventListener('blur', ()=>{notShowH('num8')}, true);

}

hints = {
	'num1': {
		'hint': 'Las copas de __ son muy frágiles',
		'answ': 'cristal'
	},
	'num2': { 
		'hint': 'Arteria que está al lado del hueso fémur',
		'answ': 'femoral'
	},
	'num3': {
		'hint': 'Mago principal de "El Hobbit"',
		'answ': 'gandalf'
	},
	'num4': {
		'hint': 'Lo inhalamos, pero no lo exhalamos',
		'answ': 'oxigeno'
	},
	'num5': {
		'hint': 'Monstruo humanoide de un solo ojo',
		'answ': 'ciclope'
	},
	'num6': {
		'hint': 'Se dice del animal que pone huevos',
		'answ': 'oviparo'
	},
	'num7': {
		'hint': 'Cantante conocido como el Rey del Pop',
		'answ': 'jackson'
	},
	'num8': {
		'hint': 'En un juicio, el que recibe la condena',
		'answ': 'acusado'
	}
}

function check(key){
	var userAnsw = document.getElementById(key).value.toUpperCase().substring(0,7);
	var answ = hints[key]['answ'].toUpperCase();
	if (userAnsw == answ) {
		document.getElementById(key).readOnly = true;
		document.getElementById(key).style.border = "0px";
		document.getElementById(key).style.padding = "2px 2px 2px 24ra px";
	}
	else{
		document.getElementById(key).value = "";
	}
}

function showH(key){
	document.getElementById("hint").innerHTML = hints[key]['hint'];
	document.getElementById(key).style.border = "inset blue 3px";
}

function notShowH(key){	
	document.getElementById(key).style.border = "inset rgb(238, 238, 238) 2px";
	check(key);
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