const nodemailer = require('nodemailer');

// Fonction pour envoyer un e-mail
async function sendEmail(subject, content) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'votre_adresse_email@gmail.com',
            pass: 'votre_mot_de_passe'
        }
    });

    let mailOptions = {
        from: 'votre_adresse_email@gmail.com',
        to: 'adresse_email_administrateur@example.com',
        subject: subject,
        text: content
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé : ', info.messageId);
}

// Fonction pour vérifier les seuils
function checkThreshold(temperature, humidity) {
    const temperatureThreshold = 60; // seuil de température en degrés Celsius
    const humidityThreshold = 90; // seuil d'humidité en pourcentage

    if (temperature > temperatureThreshold) {
        sendEmail('Alerte : Température élevée', `La température est de ${temperature}°C, ce qui dépasse le seuil de ${temperatureThreshold}°C.`);
    }

    if (humidity > humidityThreshold) {
        sendEmail('Alerte : Humidité élevée', `L'humidité est de ${humidity}%, ce qui dépasse le seuil de ${humidityThreshold}%.`);
    }
}

// Simuler la récupération des données de température et d'humidité
// Remplacez cette partie par la logique réelle de récupération des données depuis votre capteur
function simulateSensorData() {
    const temperature = Math.random() * 100; // température aléatoire entre 0 et 100°C
    const humidity = Math.random() * 100; // humidité aléatoire entre 0 et 100%

    console.log(`Température : ${temperature}°C, Humidité : ${humidity}%`);
    checkThreshold(temperature, humidity);
}

// Exécuter la simulation toutes les 5 secondes (5000 millisecondes)
setInterval(simulateSensorData, 5000);