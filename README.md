
# 🌤️ Weather Forecast App

## 📌 About the Project

Weather Forecast App is a web application built using HTML, CSS, and Vanilla JavaScript. It allows users to check current weather conditions and forecasts for any city around the world.

The application provides today's weather forecast, a three-day forecast (including the current day), and the option to select a specific future date within a range of 14 to 300 days ahead to check the expected weather conditions.

Users can search for any city or manually retrieve weather information based on their current geographical location using a dedicated button.

The application remembers the last displayed location and automatically loads it when opened again.

The interface dynamically adapts to the local time of the selected location, switching between a light theme during the day and a dark theme at night.

---

## ✨ Features

- **Current Weather:** View current weather conditions and detailed weather information.
- **Three-Day Forecast:** Check the weather forecast for three days, including the current day.
- **Future Date Selection:** Select a specific future date within a range of 14 to 300 days ahead to view the weather forecast.
- **City Search:** Search for weather information in any city around the world.
- **Current Location:** Use a dedicated button to retrieve weather information based on your current geographical location.
- **Location Persistence:** The application remembers and displays the last selected location when reopened.
- **Dynamic Day/Night Theme:** The application automatically switches between a light and dark theme depending on the local time of the selected location.
- **Dynamic Weather Updates:** Weather information updates according to the selected city or geographical location.
- **Serbian Language:** The entire application is available in Serbian, including the user interface, weather descriptions, days of the week, and months.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- WeatherAPI.com
- OpenWeatherMap Reverse Geocoding API
- Browser Geolocation API

---

## 🌐 APIs Used

### WeatherAPI.com

Used to retrieve:

- Current weather conditions.
- Daily weather forecasts.
- Weather forecasts for selected future dates (14–300 days ahead).

### OpenWeatherMap Reverse Geocoding API

Used to:

- Convert geographical coordinates (latitude and longitude) into city names.
- Identify the city based on the user's current geographical location.

### Browser Geolocation API

Used to:

- Retrieve the user's current geographical coordinates when the current location button is clicked.
- Provide latitude and longitude coordinates for reverse geocoding.

---

## 🚀 How to Use

1. Open the application to view the last displayed location.
2. Enter a city name to search for its weather forecast.
3. Use the current location button to retrieve weather information for your current geographical location.
4. View current weather conditions and the three-day forecast.
5. Select a future date within the allowed range of 14 to 300 days to check the weather forecast.
6. The application automatically adjusts its appearance based on the local time of the selected location.

---

## 🌍 Language

- Serbian (complete application localization).
