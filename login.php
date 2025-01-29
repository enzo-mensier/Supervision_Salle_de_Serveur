<!DOCTYPE html>
<!--Page de connexion par défaut-->
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true">
        
            <div class="signup">
                <form id="adminForm">
                    <label for="chk" aria-hidden="true">Administrateur</label>
                    <input type="text" name="username" id="adminUsername" placeholder="Nom d'utilisateur" required="">
                    <input type="email" name="email" id="adminEmail" placeholder="Email" required="">
                    <input type="password" name="password" id="adminPassword" placeholder="Mot de passe" required="">
                    <button type="button" onclick="loginAdmin()">Se connecter</button>
                </form>
            </div>
            <div class="user">
                <form id="userForm">
                    <label for="chk" aria-hidden="true">Utilisateur</label>
                    <input type="text" name="username" id="userUsername" placeholder="Nom d'utilisateur" required="">
                    <input type="password" name="password" id="userPassword" placeholder="Mot de passe" required="">
                    <button type="button" onclick="loginUser()">Se connecter</button>
                </form>
            </div>
    </div>
    <script>
        function loginAdmin() {
            var username = document.getElementById("adminUsername").value;
            var email = document.getElementById("adminEmail").value;
            var password = document.getElementById("adminPassword").value;
            
            // Vérification des identifiants
            if (username === "enzo" && password === "admin") {
                // Redirection vers une autre page
                window.location.href = "admin/acceuil.html";
            } else {
                // Affichage d'un message d'erreur
                alert("Identifiants incorrects pour l'administrateur.");
            }
        }
        
        function loginUser() {
            var username = document.getElementById("userUsername").value;
            var password = document.getElementById("userPassword").value;
            
            // Vérification des identifiants
            if (username === "enzo" && password === "user") {
                // Redirection vers une autre page
                window.location.href = "user/acceuil.html";
            } else {
                // Affichage d'un message d'erreur
                alert("Identifiants incorrects pour l'utilisateur.");
            }
        }
    </script>
</body>
</html>