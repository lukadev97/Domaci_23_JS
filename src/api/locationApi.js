import axios from "axios";

export async function getGeoLocation(latitude, longitude) {
    return axios.get(process.env.OPENWEATHER_API_URL + "/1.0/reverse", {
        params: {
            lat: latitude,
            lon: longitude,
            limit: 1,
            appid: process.env.OPENWEATHER_API_KEY
        }
    });
}