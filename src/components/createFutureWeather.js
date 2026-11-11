export function createFutureWeatherElement(data) {
    const container = document.createElement("section");
    container.classList.add("future-weather", "weather-card");

    const day = data.forecast.forecastday[0];

    container.innerHTML = `
        <div class="weather-location">
            <div>
                <span class="label">Prognoza za</span>
                <h2 class="forecast-date"></h2>
                <p class="location-info"></p>
            </div>

            <img alt="" class="weather-icon">
        </div>

        <div class="current-temperature">
            <strong class="average-temperature"></strong>
            <span>°C</span>
        </div>

        <div class="weather-details">
            <div class="weather-detail">
                <span>🌡 Minimalna</span>
                <strong class="min-temperature"></strong>
            </div>

            <div class="weather-detail">
                <span>🌡 Maksimalna</span>
                <strong class="max-temperature"></strong>
            </div>

            <div class="weather-detail">
                <span>💧 Vlažnost</span>
                <strong class="humidity-value"></strong>
            </div>

            <div class="weather-detail">
                <span>💨 Vjetar</span>
                <strong class="wind-value"></strong>
            </div>

            <div class="weather-detail">
                <span>☀️ UV indeks</span>
                <strong class="uv-value"></strong>
            </div>
        </div>

        <div class="today-extra">
            <div>
                <span>🌅 Izlazak sunca</span>
                <strong class="sunrise-time"></strong>
            </div>

            <div>
                <span>🌇 Zalazak sunca</span>
                <strong class="sunset-time"></strong>
            </div>

            <div>
                <span>🌧 Ukupno kiše</span>
                <strong class="total-precipitation"></strong>
            </div>

            <div>
                <span>💨 Maks. udar vjetra</span>
                <strong class="max-wind-value"></strong>
            </div>
        </div>
    `;

    // Forecast date and location
    container.querySelector(".forecast-date").textContent = day.date;
    container.querySelector(".location-info").textContent = `${data.location.name}, ${data.location.country}`;

    // Weather icon
    const weatherIcon = container.querySelector(".weather-icon");
    weatherIcon.src = `https:${day.day.condition.icon}`;
    weatherIcon.alt = day.day.condition.text;

    // Average temperature
    container.querySelector(".average-temperature").textContent = `${Math.round(day.day.avgtemp_c)}°C`;

    // Weather details
    container.querySelector(".min-temperature").textContent = `${Math.round(day.day.mintemp_c)}°C`;
    container.querySelector(".max-temperature").textContent = `${Math.round(day.day.maxtemp_c)}°C`;
    container.querySelector(".humidity-value").textContent = `${day.day.avghumidity}%`;
    container.querySelector(".wind-value").textContent = `${day.day.maxwind_kph} km/h`;
    container.querySelector(".uv-value").textContent = day.day.uv;

    // Additional data
    container.querySelector(".sunrise-time").textContent = day.astro.sunrise;
    container.querySelector(".sunset-time").textContent = day.astro.sunset;
    container.querySelector(".total-precipitation").textContent = `${day.day.totalprecip_mm} mm`;
    container.querySelector(".max-wind-value").textContent = `${day.day.maxwind_kph} km/h`;

    return container;
}
