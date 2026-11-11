export function isValidFutureDate(dateString) {
    const selectedDate = new Date(`${dateString}T00:00:00`);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const minDate = new Date(currentDate);
    minDate.setDate(currentDate.getDate() + 14);

    const maxDate = new Date(currentDate);
    maxDate.setDate(currentDate.getDate() + 300);

    return selectedDate >= minDate && selectedDate <= maxDate;
}

export function toLocalTime(time) {
    const parts = time.split(" ");
    const clock = parts[0];
    const period = parts[1];

    const clockParts = clock.split(":");
    let hours = Number(clockParts[0]);
    const minutes = clockParts[1];

    if (period === "PM" && hours !== 12) {
        hours += 12;
    }

    if (period === "AM" && hours === 12) {
        hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}`;
}

const days = [
    "Nedjelja",
    "Ponedjeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota"
];

const months = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar"
];

export function formatDate(date) {
    return `${days[date.getDay()]}, ${date.getDate()}. ${months[date.getMonth()]}`;
}
