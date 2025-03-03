async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById('result').innerText = `Error: ${data.message}`;
            return;
        }

        const tempC = data.main.temp;
        const tempF = (tempC * 9/5) + 32;

        document.getElementById('result').innerText = 
            `Temperature in ${city}: ${tempC.toFixed(1)}°C / ${tempF.toFixed(1)}°F`;
    } catch (error) {
        document.getElementById('result').innerText = 'Failed to fetch weather data';
    }
}
