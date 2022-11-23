const btn = document.getElementById('boutton');
const input = document.getElementById('inputVille');
const nomVille = document.getElementById('ville')
const temperature = document.getElementById('temp')
const ressentie = document.getElementById('res')
const tMax = document.getElementById('max')
const tMin = document.getElementById('min')
const vent = document.getElementById('vent')
const humidite = document.getElementById('humidite')
const etatDuCiel = document.getElementById('ciel')

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let textinput = input.value;
    return weather(textinput)
});


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

            switch (direction) {

                case 0:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord';
                    break;

                case 0 < direction < 45:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Nord/Est';
                    break;

                case 45:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Est';
                    break;

                case 45 < direction < 90:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Est/Nord/Est';
                    break;

                case 90:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Est';
                    break;

                case 90 < direction < 135:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Est/Sud/Est';
                    break;

                case 135:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Est';
                    break;

                case 135 < direction < 180:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Sud/Est';
                    break;

                case 180:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud';
                    break;

                case 180 < direction < 225:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Sud/Ouest';
                    break;

                case 225:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Sud/Ouest';
                    break;

                case (data.wind.deg > 225 && data.wind.deg < 270):
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Ouest/Sud/Ouest';
                    break;

                case 270:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Ouest';
                    break;

                case 270 < direction < 315:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Ouest/Nord/Ouest';
                    break;

                case 315:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Ouest';
                    break;

                case 315 < direction < 360:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Nord/Nord/Ouest';
                    break;

                default:
                    vent.innerHTML = 'Vent : ' + data.wind.speed + 'Km/h' + ' Direction inconnue';

            }
            const ciel = data.weather[0].main
            const img = document.getElementById('img')
            if (ciel === 'Clouds') {
                etatDuCiel.innerHTML = 'Nuageux';
                img.src = "/images/cloudy-in-the-sky-landscape-wallpaper.jpg"
            }
        }

        );
}
