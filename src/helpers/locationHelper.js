export function setLocation(location) {
    localStorage.setItem("location", location);
}

export function saveLastLocation() {
    localStorage.setItem("lastLocation", getLocation());
}

export function getLocation() {
    return localStorage.getItem("location");
}

export function getLastLocation() {
    return localStorage.getItem("lastLocation");
}

export function requestLocation() {
    let currentLocation = "";

    while (!currentLocation) {
        currentLocation = prompt("Unesite naziv grada");

        if (currentLocation === null) {
            return null;
        }

        currentLocation = currentLocation.trim();
    }

    return currentLocation;
}

