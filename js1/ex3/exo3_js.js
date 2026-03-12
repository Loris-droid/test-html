let leCarre = document.getElementById("carre");
let message = document.getElementById("message");
     
function modif () { 
  if (leCarre.style.backgroundColor == 'blue') {
    leCarre.style.backgroundColor = 'yellow';
    message.innerHTML = "Survolez le carré jaune.";
  }
  else if (leCarre.style.backgroundColor == 'yellow') {
    leCarre.style.backgroundColor = 'green';
    message.innerHTML = "Survolez le carré vert.";
  }
  else if (leCarre.style.backgroundColor == 'green') {
    leCarre.style.backgroundColor = 'purple';
    message.innerHTML = "Survolez le carré violet.";
  }
  else if (leCarre.style.backgroundColor == 'purple') {
    leCarre.style.backgroundColor = 'orange';
    message.innerHTML = "Survolez le carré orange.";
  }
  else {
    leCarre.style.backgroundColor = 'blue';
    message.innerHTML = "Survolez le carré bleu.";
  }
};

leCarre.addEventListener("mouseover", modif);