async function fetchWeather() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    if (data.cod === 200) {
        locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
        temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
        descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    } else {
        locationElement.textContent = 'Location not found';
        temperatureElement.textContent = '';
        descriptionElement.textContent = '';
    }
}
