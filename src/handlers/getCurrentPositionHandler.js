import {getGeoLocation} from "../api/locationApi";
import {getLocation} from "../helpers/locationHelper";
import {displayCurrentWeather, displayUpcomingWeather} from "../services/weatherService";

export async function getCurrentPositionHandler(position) {
    try {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const coordinatesResponse = await getGeoLocation(latitude, longitude);

        if (!coordinatesResponse.data.length) {
            alert("Nije moguće odrediti naziv vaše lokacije!");
            return;
        }

        let locationName = coordinatesResponse.data[0].name;

        if (locationName.includes("Municipality")) {
            locationName = locationName.replace("Municipality", "").trim();
        }

        const isSuccessful = await displayCurrentWeather(locationName);

        if (!isSuccessful) {
            return;
        }

        await displayUpcomingWeather(getLocation(), 3);

    } catch (error) {
        alert("Preuzimanje trenutne lokacije nije uspjelo! Pokušajte ponovo.");
    }
}