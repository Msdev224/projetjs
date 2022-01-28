let bodyEl=document.getElementsByTagName("body")[0];
let title=document.getElementById("title");
let minuteurEL=document.getElementById("minuteur");
let joursEl=document.getElementById("j");
let heuresEl=document.getElementById("h");
let minutesEl=document.getElementById("m");
let secondesEl=document.getElementById("s");

let now=new Date().getTime();
const dateOffsetInMinutes = now.getTimezoneOffset();

const unJourEnMs=1000*60*0*24;
const uneHeureEnMs=1000*60*60;
const uneMinuteEnMs=1000*60;

//const newYear=Date.now() - dateOffsetInMinutes*uneMinuteEnMs+3000

const newYear=new Date("2022");

const getCountdown = () => {
	let nowDate=Date.now();
	let tempsRestantEnMs=newYear-nowDate+dateOffsetInMinutes*uneMinuteEnMs;
	//jours
	let nbJours=Math.floor(tempsRestantEnMs/unJourEnMs);
	//heures
	let resteTempsSansJoursMs=tempsRestantEnMs-nbJours*unJourEnMs;
	let nbHeures=Math.floor(resteTempsSansJoursMs/uneHeureEnMs);
	//minute
	let resteTempsSansHeuresMs=resteTempsSansJoursMs-nbHeures*uneHeureEnMs;
	let nbMinutes=Math.floor(resteTempsSansHeuresMs/uneMinuteEnMs);
	//seconde
	let resteTempsSansMinutesMs=resteTempsSansHeuresMs-nbMinutes*uneMinuteEnMs;
	let nbSecondes=Math.floor(resteTempsSansMinutesMs/1000);

	joursEl.textContent=nbJours;
	heuresEl.textContent=nbHeures;
	minutesEl.textContent=nbMinutes;
	secondesEl.textContent=nbSecondes;

	if(tempsRestantEnMs<=0){
		clearInterval(countDownInterval);
		bodyEl.style.backgroundImage='url("c.jpg")'
		joursEl.textContent=0;
		heuresEl.textContent=0;
		minutesEl.textContent=0;
		secondesEl.textContent=0;
		titleEl.innerHTML="Bonne Année !!!";
	}
}
let countDownInterval=setInterval(getCountdown,1000);
getCountdown();

/*const text=document.querySelector("h2")


function getChrono() {
	const now = new Date().getTime();
	const countdownDate = new Date("January 30, 2022").getTime();
	const distanceBase = countdownDate - now;
	const days = Math.floor(distanceBase/(1000*60*60*24));
	const hours = Math.floor((distanceBase%(1000*60*60*24))/(1000*60*60));
	const minutes = Math.floor((distanceBase%(1000*60*60))/(1000*60));
	const seconds = Math.floor((distanceBase%(1000*60))/(1000));
	text.innerText="${days}j  ${hours}h  ${minutes}m  ${seconds}s";
	
}
getChrono()*/