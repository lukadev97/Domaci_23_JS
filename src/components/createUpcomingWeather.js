import {formatDate, toLocalTime} from "../helpers/dateHelper";
import {translateWeatherCondition} from "../helpers/weatherHelper";

export function createUpcomingWeatherElements(forecastData, days) {
    const container = document.createElement("section");
    container.classList.add("upcoming-weather");

    const title = document.createElement("h2");
    title.textContent = `Prognoza za naredna/ih ${days} dana`;

    const daysContainer = document.createElement("div");
    daysContainer.classList.add("forecast-days");

    for (const day of forecastData.forecast.forecastday) {
        const dayElement = document.createElement("article");
        dayElement.classList.add("forecast-day");

        const date = new Date(day.date);
        const formattedDate = formatDate(date);

        dayElement.innerHTML = `
            <div class="forecast-date"></div>

            <img alt="" class="weather-icon">

            <p class="forecast-condition"></p>

            <div class="forecast-temperature">
                <strong class="max-temperature"></strong>
                <span class="min-temperature"></span>
            </div>

            <div class="forecast-info">
                <span class="humidity-value"></span>
                <span class="rain-chance"></span>
                <span class="snow-chance"></span>
            </div>

            <div class="sun-info">
                <span class="sunrise-time"></span>
                <span class="sunset-time"></span>
            </div>
        `;

        // Date
        dayElement.querySelector(".forecast-date").textContent = formattedDate;

        // Weather icon
        const weatherIcon = dayElement.querySelector(".weather-icon");
        weatherIcon.src = `https:${day.day.condition.icon}`;
        weatherIcon.alt = day.day.condition.text;

        // Weather condition description
        dayElement.querySelector(".forecast-condition").textContent = translateWeatherCondition(day.day.condition.code);

        // Temperatures
        dayElement.querySelector(".max-temperature").textContent = `${Math.round(day.day.maxtemp_c)}°C`;
        dayElement.querySelector(".min-temperature").textContent = `${Math.round(day.day.mintemp_c)}°C`;

        // Additional information
        dayElement.querySelector(".humidity-value").textContent = `💧 ${day.day.avghumidity}%`;
        dayElement.querySelector(".rain-chance").textContent = `🌧 ${day.day.daily_chance_of_rain}%`;
        dayElement.querySelector(".snow-chance").textContent = `❄️ ${day.day.daily_chance_of_snow}%`;

        // Sunrise and sunset
        dayElement.querySelector(".sunrise-time").textContent = `🌅 ${toLocalTime(day.astro.sunrise)}`;
        dayElement.querySelector(".sunset-time").textContent = `🌇 ${toLocalTime(day.astro.sunset)}`;

        daysContainer.appendChild(dayElement);
    }

    container.appendChild(title);
    container.appendChild(daysContainer);

    return container;
}
