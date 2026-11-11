import {getCurrentPositionHandler} from "./getCurrentPositionHandler";

export function getCurrentLocationHandler() {
    if (!navigator.geolocation) {
        alert("Vaš browser ne podržava geolokaciju!");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        getCurrentPositionHandler,
        () => {
            alert("Trenutno nije dostupna vaša lokacija. Pokušajte ponovo.");
        }
    );
}