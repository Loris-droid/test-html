function dollar()
{
/* déclaration d'une variable ciblant un élément html */
let somme = document.getElementById("somme").value;
let prixDollar = 1.15*(somme);      /*conversion en dollar */
prixDollar=Math.round(prixDollar*100)/100; /*permet d'arrondir au centime près*/

/* variable lié à l'élément div */
document.getElementById('conversion').innerHTML= prixDollar + " dollars";
}

function livre()
{
/* déclaration d'une variable ciblant un élément html */
let somme = document.getElementById("somme").value;
let prixLivre = 0.86*(somme);      /*conversion en livre sterling */
prixLivre=Math.round(prixLivre*100)/100; /*permet d'arrondir au centime près*/

/* variable lié à l'élément div */
document.getElementById('conversion').innerHTML= prixLivre + " livre sterling";
}

function yen()
{
/* déclaration d'une variable ciblant un élément html */
let somme = document.getElementById("somme").value;
let prixYen = 183.89*(somme);      /*conversion en yen */
prixYen=Math.round(prixYen*100)/100; /*permet d'arrondir au centime près*/

/* variable lié à l'élément div */
document.getElementById('conversion').innerHTML= prixYen + " yen";
}