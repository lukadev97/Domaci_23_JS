import {getLastLocation, getLocation, requestLocation} from "./helpers/locationHelper";
import {displayCurrentWeather, displayUpcomingWeather} from "./services/weatherService";
import {changeLocationEvent} from "./events/changeLocationEvent";
import {getCurrentLocationEvent} from "./events/getCurrentLocationEvent";
import {getFutureDateEvent} from "./events/getFutureDateEvent";

async function init() {
    let location = getLocation() || getLastLocation();

    while (true) {
        if (!location) {
            location = requestLocation();
        }

        if (!location) {
            continue;
        }

        const isSuccessful = await displayCurrentWeather(location);

        if (isSuccessful) {
            break;
        }

        location = null;
    }

    await displayUpcomingWeather(getLocation(), 3);

    changeLocationEvent();
    getCurrentLocationEvent();
    getFutureDateEvent();
}

await init();


