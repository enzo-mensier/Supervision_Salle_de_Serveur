<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="acceuil.css">
    <link rel="stylesheet" href="main.css">
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
    
    <section id="image-section">
        <div class="image-container">
            <img src="images/img-serveur.jpg" alt="Image Serveur" class="image-description">
            <div class="text-container">
                <div class="description-contexte">
                    <p>
                        Description du contexte : <br><br>
                        Nomios est une entreprise informatique qui accompagne les clients dans l’étude,<br>
                        le choix, l’installation de solutions de sécurité. <br>
                        Maintenir l’équipement informatique à des températures et un taux d’humidité constants <br>
                        est un élément essentiel. <br>
                        Une température trop élevée engendre des pannes et une diminution de la durée de vie du matériel.
                        Une humidité trop élevée engendre de la condensation.
                    </p>
                </div>
                <div class="besoin-client">
                    <p>
                        Expression du besoin client :<br><br>
                        Pour éviter les pannes, condensation, il est important de pouvoir mesurer, <br>
                        stocker et visualiser les métriques environnementales de la salle de serveurs. <br><br>
                        De plus, l’administrateur doit être alerté en cas de température trop élevée. 
                    </p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <img src="images/our-logo.png" alt="logo-MAE">
        <p>Chef de projet : Muhammed Benali</p>
        <p>Technicien Réseau : Abdessamad Bouarfaoui </p>
        <p>Développeur : Enzo Mensier</p>
    </footer>

</body> 
</html>
