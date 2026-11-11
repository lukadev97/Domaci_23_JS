import {getCurrentLocationHandler} from "../handlers/getCurrentLocationHandler";

export function getCurrentLocationEvent() {
    document.querySelector("#currentGeoLocationBtn").addEventListener("click", getCurrentLocationHandler);
}