function kelvinCelsius(kelvin) {
    return kelvin - 273.15;
}
function buscarClima() {
    const ciudadInput = document.getElementById('cityInput');
    const ciudad = ciudadInput.value;

    // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API real
    const apiKey = 'ca4873a669bdba29a8bc5fe30f33877a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

fetch(apiUrl) 
        .then(response => response.json())
        .then(data => {
            const climaResultadoElement = document.getElementById('climaResultado');
            const temperaturaKelvin = data.main.temp;

            // Convierte Kelvin a Celsius
            const temperaturaCelsius = kelvinCelsius(temperaturaKelvin).toFixed(2);

            let imagenClima;

            // Imagen que veo en función de la temperatura
            if (temperaturaCelsius > 20) {
                imagenClima = 'imagenes/soleado.jpg';
            } else {
                imagenClima = 'imagenes/frio2.png'; 
            }

            climaResultadoElement.innerHTML = `
                <h5> La temperatura actual en ${ciudad} es:</h5>
                <p> ${temperaturaCelsius} °C </p> 
                <img src="${imagenClima}">
            `;
         })
        .catch(error => console.error('Error al obtener datos del clima:', error));


    }









