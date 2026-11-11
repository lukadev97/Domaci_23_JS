import {getLocation, requestLocation} from "../helpers/locationHelper";
import {displayCurrentWeather, displayUpcomingWeather} from "../services/weatherService";

export async function changeLocationHandler() {
    const newLocation = requestLocation();

    if (!newLocation) {
        return;
    }

    const isSuccessful = await displayCurrentWeather(newLocation);

    if (!isSuccessful) {
        return;
    }

    await displayUpcomingWeather(getLocation(), 3);
}