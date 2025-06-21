// Add null check for darkToggle
const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
}

// Image Slider Functionality
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('slider-dots');
        let currentSlide = 0;
        let autoSlideInterval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
                if (dotsContainer.children[i]) {
                    dotsContainer.children[i].classList.toggle('active', i === index);
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Create dots only if not already present
        if (dotsContainer.children.length === 0) {
            slides.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.addEventListener('click', () => {
                    currentSlide = i;
                    showSlide(currentSlide);
                    resetAutoSlide();
                });
                dotsContainer.appendChild(dot);
            });
        }

        showSlide(currentSlide);

        if (nextBtn) nextBtn.addEventListener('click', function() { nextSlide(); resetAutoSlide(); });
        if (prevBtn) prevBtn.addEventListener('click', function() { prevSlide(); resetAutoSlide(); });

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 6000);
        }

        autoSlideInterval = setInterval(nextSlide, 6000);
    });
})();

// News & Events dynamic loading for homepage
function loadHomeEvents() {
    // Example events (could be fetched from a server or static array)
    const events = [
        {
            date: 'June 20, 2025',
            title: 'Parents-Teachers Meeting',
            desc: 'All parents are invited for the termly meeting at the main hall, 10:00am.'
        },
        {
            date: 'July 2, 2025',
            title: 'Inter-House Sports Day',
            desc: 'A day of fun and competition among the school houses. All students to participate.'
        },
        {
            date: 'June 12, 2025',
            title: 'Science Fair',
            desc: 'Showcasing student projects and innovations in science and technology.'
        }
    ];
    const eventsDiv = document.getElementById('home-events');
    if (eventsDiv) {
        eventsDiv.innerHTML = `<ul class="event-list">` +
            events.map(event => `
                <li class="event-item">
                    <span class="event-date">${event.date}</span> <span class="event-title">${event.title}</span>
                    <div class="event-desc">${event.desc}</div>
                </li>
            `).join('') + `</ul>`;
    }
}
// Run on homepage load
if (document.getElementById('home-events')) {
    loadHomeEvents();
}
else{
    console.log('home events not found')
}

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
                let html = '<div style="display:flex;gap:18px;">';
                let count = 0;
                for (let date in days) {
                    if (date < today) continue;
                    // Take the forecast at 12:00 if available, else first
                    let forecast = days[date].find(f => f.dt_txt.includes('12:00:00')) || days[date][0];
                    html += `<div style='text-align:center;background:#f5f5f5;padding:8px 12px;border-radius:8px;'>
                        <div><strong>${new Date(date).toLocaleDateString(undefined, {weekday:'short', month:'short', day:'numeric'})}</strong></div>
                        <img src='https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png' alt='${forecast.weather[0].main}'>
                        <div>${Math.round(forecast.main.temp)}°C</div>
                        <div style='font-size:0.9em;'>${forecast.weather[0].main}</div>
                    </div>`;
                    count++;
                    if (count >= 3) break;
                }
                html += '</div>';
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
