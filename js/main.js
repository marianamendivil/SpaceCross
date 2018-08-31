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
	'num1': 'Las copas de __ son muy frágiles',
	'num2': 'Arteria que está al lado del hueso fémur',
	'num3': 'Mago principal de "El Hobbit"',
	'num4': 'Lo inhalamos, pero no lo exhalamos',
	'num5': 'Monstruo humanoide de un solo ojo',
	'num6': 'Se dice del animal que pone huevos',
	'num7': 'Cantante conocido como el Rey del Pop',
	'num8': 'En un juicio, el que recibe la condena'
}

function showH(key){
	document.getElementById("hint").innerHTML = hints[key];
	document.getElementById(key).style.border = "inset blue 3px";
}

function notShowH(key){	
	document.getElementById(key).style.border = "inset rgb(238, 238, 238) 2px";
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