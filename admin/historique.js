// Fonction pour générer une valeur aléatoire
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// Configuration du graphique de température
var temperatureConfig = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Température (°C)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
            fill: false
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Graphique de Température'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Température (°C)'
                }
            }]
        }
    }
};

// Configuration du graphique d'humidité
var humidityConfig = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Humidité (%)',
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            data: [],
            fill: false
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Graphique d\'Humidité'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Humidité (%)'
                }
            }]
        }
    }
};

// Création des graphiques et ajout des animations
window.onload = function() {
    var temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
    var humidityCtx = document.getElementById('humidityChart').getContext('2d');
    window.temperatureChart = new Chart(temperatureCtx, temperatureConfig);
    window.humidityChart = new Chart(humidityCtx, humidityConfig);

    // Boucle de mise à jour
    setInterval(function() {
        var timestamp = new Date().toLocaleTimeString(); // Heure actuelle
        var temperatureValue = getRandomValue(20, 60); // Température aléatoire entre 20°C et 60°C
        var humidityValue = getRandomValue(40, 100); // Humidité aléatoire entre 40% et 100%
        
        // Ajouter les nouvelles valeurs aux graphiques
        addData(window.temperatureChart, timestamp, temperatureValue);
        addData(window.humidityChart, timestamp, humidityValue);
    }, 1000); // 1000 millisecondes = 1 seconde
};

// Fonction pour ajouter une nouvelle valeur au graphique en limitant à 10 valeurs
function addData(chart, label, data) {
    if (chart.data.labels.length >= 10) {
        chart.data.labels.shift(); // Supprimer la première valeur du tableau des labels
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift(); // Supprimer la première valeur du tableau des données
        });
    }
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
