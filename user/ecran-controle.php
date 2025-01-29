<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ecran de contrôle</title>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="ecran-controle.css">

</head>
<body>
    <header class="header-slide-down">
        <a href="login-admin.html"><img src="images/admin-red.png" alt="img-admin" id="img-admin"></a>
        <h1 id="titre-header">SUPERVISION D’UNE SALLE DE SERVEURS IOT</h1>
    </header>
    
    <nav>
        <ul class="nav-menu">
            <li class="active"><a href="acceuil.html" class="btn-nav">PRÉSENTATION</a></li>
            <li><a href="ecran-controle.html" class="btn-nav">ÉCRAN DE CONTRÔLE</a></li>
            <li><a href="historique.html" class="btn-nav">HISTORIQUE</a></li>
            <li><a href="login-admin.html" class="btn-nav">SE CONNECTER</a></li>
        </ul>
    </nav>
    
    <div class="container">
        <div class="card" id="temperatureCard">
            <h2>Température :</h2>
            <p id="temperature">20°C</p>
            <img src="images/temp.png" alt="icone temperature" class="icon-valeur">
        </div>
        <div class="card" id="humidityCard">
            <h2>Humidité :</h2>
            <p id="humidity">60%</p>
            <img src="images/humid.png" alt="icone humidite" class="icon-valeur">
        </div>
    </div>

    
    <footer>
        <img src="images/our-logo.png" alt="logo-MAE">
        <p>Chef de projet : Muhammed Benali</p>
        <p>Technicien Réseau : Abdessamad Bouarfaoui </p>
        <p>Développeur : Enzo Mensier</p>
    </footer>

    <script src="ecran-controle.js"></script>
</body> 
</html>
