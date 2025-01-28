// Lorsque le formulaire d'inscription est soumis...
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    // Récupère les valeurs des champs du formulaire
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isAdmin = document.getElementById("adminCheckbox").checked; // Vérifie si la case "admin" est cochée
    var adminEmail = document.getElementById("adminEmail").value;

    // Enregistre les données de l'utilisateur localement ou les envoie à un serveur
    var userData = {
        username: username,
        password: password,
        isAdmin: isAdmin,
        adminEmail: isAdmin ? adminEmail : "" // Si l'utilisateur est admin, enregistre l'e-mail, sinon une chaîne vide
    };

    console.log("Données de l'utilisateur:", userData); // Affiche les données de l'utilisateur dans la console

    // Affiche les informations de l'utilisateur dans la section appropriée de la page
    document.getElementById("displayUsername").textContent = userData.username;
    document.getElementById("displayPassword").textContent = userData.password;
    document.getElementById("displayAdmin").textContent = userData.isAdmin ? "Oui" : "Non";
    // Affiche "Oui" si l'utilisateur est admin, sinon "Non"
    document.getElementById("displayEmail").textContent = userData.adminEmail;

    // Efface les champs du formulaire après soumission
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("adminCheckbox").checked = false;
    document.getElementById("adminEmail").value = "";

    // Affiche la section d'informations de l'utilisateur
    document.getElementById("user-info").style.display = "block";

    // Affiche le bouton pour retirer l'accès
    document.getElementById("removeAccessBtn").style.display = "block";

    // Ajuste les largeurs des éléments après soumission
    document.querySelector('.input-container').style.width = '60%';
    document.querySelector('.user-info-card').style.width = '40%';
});

// Lorsque la case "admin" est cochée ou décochée ces actions sont excécutés
document.getElementById("adminCheckbox").addEventListener("change", function() {
    var adminEmailInput = document.getElementById("adminEmail");
    if (this.checked) {
        adminEmailInput.style.display = "block"; // Affiche le champ d'e-mail admin si la case est cochée
    } else {
        adminEmailInput.style.display = "none"; // Sinon, cache le champ d'e-mail admin
    }
});

// Lorsque le bouton de suppression d'accès est cliqué ces actions sont excécuté
document.getElementById("removeAccessBtn").addEventListener("click", function() {
    document.getElementById("signup-form").reset();
    document.getElementById("user-info").style.display = "none";
    document.getElementById("removeAccessBtn").style.display = "none";

    // Ajuste les largeurs des éléments après la suppression de l'accès
    document.querySelector('.input-container').style.width = '100%';
    document.querySelector('.user-info-card').style.width = '0%';
});