<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


<?php
// Paramètres de connexion à la base de données
$servername = "192.168.112.159";
$username = "root";
$password = "";
$database = "iot_db";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $database);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Requête SQL pour récupérer la dernière valeur de température et d'humidité
$sql = "SELECT Température, Humidité FROM dht11 ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

$température = null;
$humidité = null;

if ($result->num_rows > 0) {
    // Récupérer les valeurs de température et d'humidité
    $row = $result->fetch_assoc();
    $température = $row["Température"];
    $humidité = $row["Humidité"];
}

// Fermeture de la connexion à la base de données
$conn->close();
?>


</body>
</html>