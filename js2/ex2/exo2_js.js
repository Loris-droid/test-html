document.addEventListener("DOMContentLoaded", function () {
    const reponsesCorrectes = ["lumos", "0", "la solution", "tux", "python"];

    const questions = [
        document.getElementById("question1"),
        document.getElementById("question2"),
        document.getElementById("question3"),
        document.getElementById("question4"),
        document.getElementById("question5")
    ];

    const boutonsValider = [
        document.getElementById("valider1"),
        document.getElementById("valider2"),
        document.getElementById("valider3"),
        document.getElementById("valider4"),
        document.getElementById("valider5")
    ];

    const messagesErreur = [
        document.getElementById("erreur1"),
        document.getElementById("erreur2"),
        document.getElementById("erreur3"),
        document.getElementById("erreur4"),
        document.getElementById("erreur5")
    ];

    const boutonFinal = document.getElementById("boutonFinal");
    const messageReussite = document.getElementById("messageReussite");
    const messageEchec = document.getElementById("messageEchec");

    let derniereBonneReponse = 0;

    // Fonction pour vérifier une réponse et afficher la question suivante
    function verifierReponse(index) {
        let champ = questions[index].querySelector("input:checked, input[type='text'], input[type='number'], select");
        let reponseUtilisateur = champ ? champ.value.trim().toLowerCase() : "";

        if (reponseUtilisateur === reponsesCorrectes[index].toLowerCase()) {
            messagesErreur[index].textContent = "";
            questions[index].classList.add("cachee");
            derniereBonneReponse = index; 

            if (index < questions.length - 1) {
                questions[index + 1].classList.remove("cachee");
            } else {
                boutonFinal.classList.remove("cachee");
            }
        } else {
            messagesErreur[index].textContent = "❌ Mauvaise réponse, réessaie !";
        }
    }

    // Ajout des événements sur les boutons "Valider"
    boutonsValider.forEach((bouton, index) => {
        bouton.addEventListener("click", () => verifierReponse(index));
    });

    // Vérification finale avant d'afficher la réussite
    boutonFinal.addEventListener("click", function () {
        if (derniereBonneReponse === questions.length - 1) {
            clearInterval(timer); // Arrêter le timer
            messageReussite.classList.remove("cachee"); // Afficher le message de victoire
            boutonFinal.classList.add("cachee"); // Cacher le bouton final
        }
    });
  
    // Gestion du timer
    let tempsRestant = 60;
    const compteur = document.getElementById("compteur");

    const timer = setInterval(function () {
        tempsRestant--;
        compteur.textContent = tempsRestant;

        if (tempsRestant <= 0) {
            clearInterval(timer);
            messageEchec.classList.remove("cachee"); // Afficher l'échec
            questions.forEach(q => q.classList.add("cachee")); // Cacher toutes les questions
            boutonFinal.classList.add("cachee"); // Cacher le bouton final
        }
    }, 1000);
});
