var heureDiv= document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    // Déclaration des variables qui seront utilisées :
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom,
    minutes, secondes, deuxChiffres;

    // recuperation de la date actuelle:
    today = new Date();

    // recupération de l'année :
    annee = today.getFullYear();

    // recupération du Mois :
    listeMois = ["Janvier","Février", "Mars", "Avril", "Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Dècembre"];
    mois = listeMois[today.getMonth()]; //getMonth() donne l'index 

    // recupération jours du Mois :
    jourNumero = today.getDate(); 

    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi","Jeudi","Vendredi","Samedi"];
    jourNom = listeJours[today.getDay()];

    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        }else{
            return element;
        }

    }

    heures = deuxChiffres(today.getHours());

    minutes = deuxChiffres(today.getMinutes());

    secondes = deuxChiffres(today.getSeconds());

    
    // affichage dans nos "div" du html
    heureDiv.textContent = heures + ":" + minutes +":"+ secondes;
    dateDiv.textContent = jourNom + ", "+ jourNumero +" "+ mois  + " "+ annee;
    
    setTimeout(affichageHeure, 1000);
}

affichageHeure();
