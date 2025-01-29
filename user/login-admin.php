<!DOCTYPE html>
<!--Page de connexion en mode administrateur-->
<html>
<head>
    <title>Login Admin</title>
    <link rel="stylesheet" type="text/css" href="login-admin.css">
    <!-- ICON -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true">
 
        <div class="signup">
            <form id="loginForm">
                <label for="chk" aria-hidden="true">Passez Administrateur !</label>
                <input type="text" id="username" name="username" placeholder="Nom d'utilisateur" required="">
                <input type="password" id="password" name="password" placeholder="Mot de passe" required="">
                <button type="submit">Se connecter</button>
                <a href="acceuil.html" id="img-arrow">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </a>
            </form>
        </div>
    </div>

    <script>
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            // Vérifie les données entrées par l'utilisateur
            if (username === "enzo" && password === "admin") {
                // Redirection si les valeurs sont correctes
                window.location.href = "../admin/acceuil.html";
            } else {
                alert("Identifiants incorrects. Veuillez réessayer.");
            }
        });
    </script>
</body>
</html>