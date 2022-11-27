const btn = document.getElementById('boutton');
const input = document.getElementById('inputVille');
const form = document.getElementById('form')
const nomVille = document.getElementById('ville');
const temperature = document.getElementById('temp');
const ressentie = document.getElementById('res');
const tMax = document.getElementById('max');
const tMin = document.getElementById('min');
const vent = document.getElementById('vent');
const humidite = document.getElementById('humidite');
const etatDuCiel = document.getElementById('ciel');



btn.addEventListener('click', (event) => {
    event.preventDefault();
    let textinput = input.value;
    return weather(textinput)
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let textinput = input.value;
    return weather(textinput)
})

function weather(ville) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville},FRS&units=metric&appid=8ac3c3fb7a8376c6b0bf6e83078f35bf`)
        .then((response) => response.json())

        .then(data => {
            console.log(data);
            nomVille.innerHTML = data.name;
            temperature.innerHTML = 'Température actuelle : ' + data.main.temp + '°';
            ressentie.innerHTML = 'Température ressentie : ' + data.main.feels_like + '°';
            tMax.innerHTML = 'Température maximale : ' + data.main.temp_max + '°';
            tMin.innerHTML = 'Température minimale : ' + data.main.temp_min + '°';
            humidite.innerHTML = "Taux d'humidité : " + data.main.humidity + '%'

            const direction = data.wind.deg

            let x = direction;
            switch (true) {

                case x == 0:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord';
                    break;

                case x < 45:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Nord/Est';
                    break;

                case x == 45:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Est';
                    break;

                case x < 90:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Est/Nord/Est';
                    break;

                case x == 90:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Est';
                    break;

                case x < 135:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Est/Sud/Est';
                    break;

                case x == 135:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Est';
                    break;

                case x < 180:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Sud/Est';
                    break;

                case x == 180:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud';
                    break;

                case x < 225:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Sud/Ouest';
                    break;

                case x == 225:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Ouest';
                    break;

                case x < 270:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Ouest/Sud/Ouest';
                    break;

                case x == 270:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Ouest';
                    break;

                case x < 315:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Ouest/Nord/Ouest';
                    break;

                case x == 315:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Ouest';
                    break;

                case x < 360:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Nord/Ouest';
                    break;

                default:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Direction inconnue';
                    break;

            }
            const ciel = data.weather[0].main
            const img = document.getElementById('img')

            switch (ciel) {
                case 'Clouds':
                    etatDuCiel.innerHTML = 'Nuageux';
                    img.src = "./images/nuageux.jpg"
                    break;
                case 'Thunderstorm':
                    etatDuCiel.innerHTML = 'Orageux';
                    img.src = "./images/orageux.jpg"
                    break;
                case 'Drizzle':
                    etatDuCiel.innerHTML = 'Pluie fine';
                    img.src = "./images/bruine.jpg"
                    break;
                case 'Rain':
                    etatDuCiel.innerHTML = 'Pluvieux';
                    img.src = "./images/pluie.jpg"
                    break;
                case 'Snow':
                    etatDuCiel.innerHTML = 'Chute de neige';
                    img.src = "./images/neige.jpg"
                    break;
                case 'Clear':
                    etatDuCiel.innerHTML = 'Ciel dégagé';
                    img.src = "./images/degage.jpg"
                    break;
                default:
                    etatDuCiel.innerHTML = 'Brouillard';
                    img.src = "./images/brouillard.jpg"
                    break;
            }

        })
        .catch(error => {
            nomVille === undefined;
            nomVille.innerHTML = 'Inconnue';
        })
}


