//memoire
const memo=document.querySelector("#memoire");
const ecranc=document.querySelector("#ecran");
let precedent=0;
let affichage="";
let operation=null;
let memoire;
window.onload= () => {
	let touches=document.querySelectorAll("span");
	for(let touche of touches){
		touche.addEventListener("click",gerertouches);
	}
	memoire=(localStorage.memoire)? parseFloat(localStorage.memoire):0;
	if(memoire!=0)memo.getElementsByClassName.display="initial";
}

function gerertouches() {
	let touche= this.innerText;
	if(parseFloat(touche)>=0 || touche ==="."){
		affichage = (affichage === "") ? touche.toString():affichage+touche.toString();
		ecranc.innerText=affichage
	}
	else{
		switch(touche){
			case"C":
			precedent=0;
			affichage="";
			operation=null;
			ecranc.innerText=0;
				break;
			case"+":
			case"-":
			case"*":
			case"/":
				precedent=(precedent===0) ? parseFloat(affichage):
				calculer(precedent,parseFloat(affichage),operation);
				ecranc.innerText=precedent;
				operation=touche;
				affichage="";
				break;
			case"=":
				precedent=(precedent===0) ? parseFloat(affichage):
				calculer(precedent,parseFloat(affichage),operation);
				ecranc.innerText=precedent;
				affichage=precedent;
				precedent=0
				break;
			case"M+":
				 localStorage.memoire=(localStorage.memoire)?parseFloat(localStorage.memoire)+parseFloat(affichage):parseFloat(affichage);
				 memo.style.display="initial";
				break;
			case"MC":
				localStorage.memoire=0;
				memo.style.display="none";break;
			case"MR":
			memoire=(localStorage.memoire)? parseFloat(localStorage.memoire):0;
			affichage=memoire;
			ecranc.innerText=memoire;break;
			default:break;
		}
	}
}
/**
 * Effectuer le calcul
 * @param {number} nb1
 * @param {number} nb2
 * @param {string} operation
 * @returns number
 */
function calculer(nb1,nb2,operation){
	nb1=parseFloat(nb1);
	nb2=parseFloat(nb2);
	if(operation==="+")return nb1+nb2;
	if(operation==="-")return nb1-nb2;
	if(operation==="*")return nb1*nb2;
	if(operation==="/")return nb1/nb2;
}