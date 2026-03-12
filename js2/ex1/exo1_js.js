//LES VARIABLES
let position=0; // variable position de la trottinette
let largeurEcran = window.innerWidth; // Largeur actuelle de l'écran
let positionFinale = largeurEcran-130 ; // limite avant le bord droit

let trott = document.getElementsByClassName("trot")[0]; 
let stop = false;
let debut = 0;
let fin;

// LES FONCTIONS

function depart_aleatoire(){  // fonction appelée à chaque click sur le bouton "Go"
    let depart = Math.random()*3000+2000;
    setTimeout('deplacement()',depart); //appel de la fonction déplacement après une durée de 0ms 
}

function deplacement(){
  if (debut==0) {
        debut = new Date();
    }
    position = position + 25;
    trott.style.left = position + "px";
    if (position < positionFinale && !stop) {
        setTimeout('deplacement()',30);
    }
    else if(position > positionFinale && !stop) {
        document.getElementsByClassName("trot") [0].src = 'mur.jpg'
        document.getElementsByClassName("trot") [0].style.width = '200px'
        trott.style.left = 0
        stop = true;
        document.getElementById('reflexe').innerHTML = "On vous a dit de mettre un casque pour faire de la trottinette";
    }
}
function stop_deplacement(){
  fin = new Date();
document.getElementById('reflexe').innerHTML= 'Temps de réaction : ' + (fin.getTime() - debut.getTime()) + ' msec';
    stop = true;
}
function recommencer() {
    position = 0;
    stop = false;
    debut = 0;
    trott.src = 'trottinette.png';
    trott.style.left = 0 ;
    document.getElementById('reflexe').innerHTML = "";
}