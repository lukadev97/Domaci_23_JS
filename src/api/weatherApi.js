import axios from "axios";

export async function getCurrentWeather(location) {
    return axios.get(process.env.API_URL + "/v1/current.json", {
        params: {
            key: process.env.API_KEY,
            q: location,
            aqi: "no"
        }
    });
}

export async function getUpcomingWeather(location, days) {
    return axios.get(process.env.API_URL + "/v1/forecast.json", {
        params: {
            key: process.env.API_KEY,
            q: location,
            days: days,
            aqi: "no",
            alerts: "no"
        }
    });
}

export async function getFutureWeather(location, date) {
    return axios.get(process.env.API_URL + "/v1/future.json", {
        params: {
            key: process.env.API_KEY,
            q: location,
            dt: date
        }
    });
}