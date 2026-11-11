import {toLocalTime} from "../helpers/dateHelper";

export function createCurrentWeatherElement(data) {
    const container = document.createElement("section");
    container.classList.add("current-weather", "weather-card");

    container.innerHTML = `
        <div class="weather-location">
            <div>
                <span class="label">Trenutno vrijeme</span>
                <h2 class="location-name"></h2>
                <p class="location-country"></p>
            </div>

            <img alt="" class="weather-icon">
        </div>

        <div class="current-temperature">
            <strong class="temperature-value"></strong>
        </div>

        <p class="feels-like">
            Subjektivni osjećaj
            <strong class="feels-like-value"></strong>
        </p>

        <div class="weather-details">
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

            <div class="weather-detail">
                <span>👁 Vidljivost</span>
                <strong class="visibility-value"></strong>
            </div>
        </div>

        <div class="today-extra">
            <div>
                <span>Min. temperatura</span>
                <strong class="min-temperature"></strong>
            </div>

            <div>
                <span>Maks. temperatura</span>
                <strong class="max-temperature"></strong>
            </div>

            <div>
                <span>Izlazak sunca</span>
                <strong class="sunrise-time"></strong>
            </div>

            <div>
                <span>Zalazak sunca</span>
                <strong class="sunset-time"></strong>
            </div>
        </div>
    `;

    // Location
    container.querySelector(".location-name").textContent = data.location.name;
    container.querySelector(".location-country").textContent = data.location.country;

    // Weather icon
    const weatherIcon = container.querySelector(".weather-icon");
    weatherIcon.src = `https:${data.current.condition.icon}`;
    weatherIcon.alt = data.current.condition.text;

    // Current temperature
    container.querySelector(".temperature-value").textContent = `${Math.round(data.current.temp_c)}°C`;

    // Feels-like temperature
    container.querySelector(".feels-like-value").textContent = `${Math.round(data.current.feelslike_c)}°C`;

    // Weather details
    container.querySelector(".humidity-value").textContent = `${data.current.humidity}%`;
    container.querySelector(".wind-value").textContent = `${data.current.wind_kph} km/h`;
    container.querySelector(".uv-value").textContent = data.current.uv;
    container.querySelector(".visibility-value").textContent = `${data.current.vis_km} km`;

    // Additional data for today
    const today = data.forecast.forecastday[0];

    container.querySelector(".min-temperature").textContent = `${Math.round(today.day.mintemp_c)}°C`;
    container.querySelector(".max-temperature").textContent = `${Math.round(today.day.maxtemp_c)}°C`;
    container.querySelector(".sunrise-time").textContent = toLocalTime(today.astro.sunrise);
    container.querySelector(".sunset-time").textContent = toLocalTime(today.astro.sunset);

    return container;
}
