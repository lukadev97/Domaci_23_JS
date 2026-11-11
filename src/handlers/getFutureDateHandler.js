import {isValidFutureDate} from "../helpers/dateHelper";
import {displayFutureWeather} from "../services/weatherService";
import {getLocation} from "../helpers/locationHelper";

export async function getFutureDateHandler() {
    const date = document.querySelector("#futureDate").value;

    if (!date) {
        alert("Odaberite datum!");
        return;
    }

    if (!isValidFutureDate(date)) {
        alert("Datum mora biti u intervalu između 14 i 300 dana od današnjeg datuma u budućnosti!");
        return;
    }

    await displayFutureWeather(getLocation(), date);
}