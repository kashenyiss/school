// Weather Widget using OpenWeather API
const weatherApiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your OpenWeather API key
const location = {
    lat: -0.7109, // Kashenyi Secondary School latitude
    lon: 29.9415 // Kashenyi Secondary School longitude
};

function fetchWeather() {
    // Current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${weatherApiKey}`)
        .then(res => res.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather-current');
            if (data && data.weather && data.main) {
                weatherDiv.innerHTML = `
                    <div><strong>${data.name}</strong> (${data.sys.country})</div>
                    <div><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='${data.weather[0].main}' style='vertical-align:middle;'>
                    <span style='font-size:1.5em;'>${Math.round(data.main.temp)}°C</span> - ${data.weather[0].description}</div>
                    <div>Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s</div>
                `;
            } else {
                weatherDiv.textContent = 'Unable to load weather.';
            }
        });
    // 3-day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${weatherApiKey}`)
        .then(res => res.json())
        .then(data => {
            const forecastDiv = document.getElementById('weather-forecast');
            if (data && data.list) {
                // Group by day
                const days = {};
                data.list.forEach(item => {
                    const date = item.dt_txt.split(' ')[0];
                    if (!days[date]) days[date] = [];
                    days[date].push(item);
                });
                const today = new Date().toISOString().split('T')[0];
                let html = '';
                let count = 0;
                for (let date in days) {
                    if (date < today) continue;
                    // Take the forecast at 12:00 if available, else first
                    let forecast = days[date].find(f => f.dt_txt.includes('12:00:00')) || days[date][0];
                    html += `<div style='text-align:center;'>
                        <div><strong>${new Date(date).toLocaleDateString(undefined, {weekday:'short', month:'short', day:'numeric'})}</strong></div>
                        <img src='https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png' alt='${forecast.weather[0].main}'>
                        <div>${Math.round(forecast.main.temp)}°C</div>
                        <div style='font-size:0.9em;'>${forecast.weather[0].main}</div>
                    </div>`;
                    count++;
                    if (count >= 3) break;
                }
                forecastDiv.innerHTML = html;
            } else {
                forecastDiv.textContent = 'Unable to load forecast.';
            }
        });
}

// Only run if widget exists
if (document.getElementById('weather-widget')) {
    fetchWeather();
    setInterval(fetchWeather, 1000 * 60 * 10); // Update every 10 minutes
}