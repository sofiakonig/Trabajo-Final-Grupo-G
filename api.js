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
            const temperatura = data.main.temp;

            climaResultadoElement.innerHTML = `
                <h5>Información del Clima en ${ciudad}</h5>
                <p>Temperatura: ${temperatura} K</p>
            `;
        })
        
        
        //.catch(error => console.error('Error al obtener datos del clima:', error));
}
