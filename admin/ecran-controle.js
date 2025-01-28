// Fonction pour générer une valeur aléatoire entre min (inclus) et max (inclus)
function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour mettre à jour les valeurs de température et d'humidité
function updateValues() {
    // Définition des valeurs minimales et maximales pour la température et l'humidité
    const minTemperature = 20;
    const maxTemperature = 60;
    const minHumidity = 40;
    const maxHumidity = 100;

    // Génération de valeurs aléatoires pour la température et l'humidité
    const temperature = generateRandomValue(minTemperature, maxTemperature);
    const humidity = generateRandomValue(minHumidity, maxHumidity);

    // Détermination de la couleur de la température en fonction de sa valeur
    let temperatureColor;
    if (temperature >= 20 && temperature < 35) {
        temperatureColor = "green"; // Vert pour une température modérée
    } else if (temperature >= 35 && temperature < 50) {
        temperatureColor = "orange"; // Orange pour une température élevée
    } else {
        temperatureColor = "red"; // Rouge pour une température critique
    }

    // Détermination de la couleur de l'humidité en fonction de sa valeur
    let humidityColor;
    if (humidity >= 40 && humidity < 65) {
        humidityColor = "green"; // Vert pour une humidité normale
    } else if (humidity >= 65 && humidity < 90) {
        humidityColor = "orange"; // Orange pour une humidité élevée
    } else {
        humidityColor = "red"; // Rouge pour une humidité critique
    }

    // Mise à jour des éléments HTML affichant la température et l'humidité
    document.getElementById('temperature').innerText = temperature + '°C';
    document.getElementById('temperature').style.color = temperatureColor; // Changement de la couleur de la température

    document.getElementById('humidity').innerText = humidity + '%';
    document.getElementById('humidity').style.color = humidityColor; // Changement de la couleur de l'humidité
}

// Appel à la fonction updateValues toutes les 1500 millisecondes
setInterval(updateValues, 1500);
