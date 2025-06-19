function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '30e16b2720c2ee59cf93bfbee309f5cf'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    // Show loading animation
    document.getElementById('weatherResult').innerHTML = `
      <div class="loader"></div>
      <p>Loading weather data...</p>
    `;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          document.getElementById('weatherResult').innerHTML = `<p>City not found.</p>`;
          return;
        }
  
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
  
        document.getElementById('weatherResult').innerHTML = `
          <p><strong>Temperature:</strong> ${temp}°C</p>
          <p><strong>Condition:</strong> ${description}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
        `;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        document.getElementById('weatherResult').innerHTML = `<p>Unable to get weather data.</p>`;
      });
  }

  function getWeatherRukungiri() {
    const city = 'Rukungiri';
    const apiKey = '30e16b2720c2ee59cf93bfbee309f5cf'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById('weatherRukungiri').innerHTML = `
      <div class="loader"></div>
      <p>Loading weather data...</p>
    `;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          document.getElementById('weatherRukungiri').innerHTML = `<p>City not found.</p>`;
          return;
        }

        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.getElementById('weatherRukungiri').innerHTML = `
          <p><strong>Temperature:</strong> ${temp}\u00b0C</p>
          <p><strong>Condition:</strong> ${description}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
        `;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        document.getElementById('weatherRukungiri').innerHTML = `<p>Unable to get weather data.</p>`;
      });
  }

  window.onload = function() {
    getWeatherRukungiri();
  };
