import {setLocation, saveLastLocation} from "../helpers/locationHelper";
import {getCurrentWeather, getUpcomingWeather, getFutureWeather} from "../api/weatherApi";
import {createCurrentWeatherElement} from "../components/createCurrentWeather";
import {createUpcomingWeatherElements} from "../components/createUpcomingWeather";
import {createFutureWeatherElement} from "../components/createFutureWeather";

export async function displayCurrentWeather(location) {
    try {
        const currentResponse = await getCurrentWeather(location);
        const forecastResponse = await getUpcomingWeather(location, 1);

        const data = {
            location: currentResponse.data.location,
            current: currentResponse.data.current,
            forecast: forecastResponse.data.forecast
        };

        const weatherElement = createCurrentWeatherElement(data);

        const container = document.querySelector("#weatherContainer");

        saveLastLocation();
        setLocation(location);

        container.innerHTML = "";
        container.appendChild(weatherElement);

        if (currentResponse.data.current.is_day === 1) {
            document.body.classList.remove("night-mode");
        } else {
            document.body.classList.add("night-mode");
        }

        return true;

    } catch (error) {
        alert("Učitavanje vremenske prognoze nije uspjelo! Pokušajte ponovo.");

        return false;
    }
}

export async function displayUpcomingWeather(location, days) {
    try {
        const upcomingResponse = await getUpcomingWeather(location, days);

        const weatherElement = createUpcomingWeatherElements(
            upcomingResponse.data,
            days
        );

        const container = document.querySelector("#upcomingWeatherContainer");
        container.innerHTML = "";
        container.appendChild(weatherElement);

    } catch (error) {
        alert("Učitavanje vremenske prognoze nije uspjelo! Pokušajte ponovo.");
    }
}

export async function displayFutureWeather(location, date) {
    try {
        const futureResponse = await getFutureWeather(location, date);

        const weatherElement = createFutureWeatherElement(
            futureResponse.data
        );

        const container = document.querySelector("#futureWeatherContainer");
        container.innerHTML = "";
        container.appendChild(weatherElement);

    } catch (error) {
        alert("Učitavanje vremenske prognoze za odabrani datum nije uspjelo! Pokušajte ponovo.");
    }
}

