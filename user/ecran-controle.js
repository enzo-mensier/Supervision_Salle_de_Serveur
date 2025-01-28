function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateValues() {
    const minTemperature = 20;
    const maxTemperature = 60;
    const minHumidity = 40;
    const maxHumidity = 100;

    const temperature = generateRandomValue(minTemperature, maxTemperature);
    const humidity = generateRandomValue(minHumidity, maxHumidity);

    // Couleurs pour la température
    let temperatureColor;
    if (temperature >= 20 && temperature < 35) {
        temperatureColor = "green";
    } else if (temperature >= 35 && temperature < 50) {
        temperatureColor = "orange";
    } else {
        temperatureColor = "red";
    }
    // Couleurs pour l'humidité
    let humidityColor;
    if (humidity >= 40 && humidity < 65) {
        humidityColor = "green";
    } else if (humidity >= 65 && humidity < 90) {
        humidityColor = "orange";
    } else {
        humidityColor = "red";
    }
    document.getElementById('temperature').innerText = temperature + '°C';
    document.getElementById('temperature').style.color = temperatureColor;
    
    document.getElementById('humidity').innerText = humidity + '%';
    document.getElementById('humidity').style.color = humidityColor;
}

setInterval(updateValues, 1500); // Met à jour les valeurs toutes les 1.5 secondes
