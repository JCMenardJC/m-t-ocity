const btn = document.getElementById('boutton');
const input = document.getElementById('inputVille');
const nomVille = document.getElementById('ville')
const temperature = document.getElementById('temp')
const ressentie = document.getElementById('res')
const tMax = document.getElementById('max')
const tMin = document.getElementById('min')
const vent = document.getElementById('vent')
const humidite = document.getElementById('humidite')

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let textinput = input.value;
    return coordonees(textinput)
});

function coordonees(ville) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville},FRS&units=metric&appid=8ac3c3fb7a8376c6b0bf6e83078f35bf`)
        .then((response) => response.json())

        .then(data => {
            console.log(data);
            nomVille.innerHTML = data.name;
            temperature.innerHTML = 'Température actuelle : ' + data.main.temp + '°';
            ressentie.innerHTML = 'Température ressentie : ' + data.main.feels_like + '°';
            tMax.innerHTML = 'Température maximale : ' + data.main.temp_max + '°';
            tMin.innerHTML = 'Température minimale : ' + data.main.temp_min + '°';

        }

        );
}
