
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


## 📥 Installation and Running the Project

Follow these steps to download and run the Weather Forecast App locally using WebStorm.

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/lukadev97/Domaci_23_JS.git
```

### 2. Navigate to the Project Directory

```bash
cd Domaci_23_JS
```

### 3. Open the Project in WebStorm

- Start WebStorm.
- Select **File → Open**.
- Navigate to the downloaded project folder.
- Open the project.

### 4. Configure Environment Variables

API keys are stored in a `.env` file to keep sensitive information separate from the application source code.

- Create a `.env` file in the root directory of the project.
- Add the required API keys using the following format:

```env
API_KEY=your_weatherapi_key
API_URL = https://api.weatherapi.com

OPENWEATHER_API_KEY=your_openweathermap_api_key
OPENWEATHER_API_URL = https://api.openweathermap.org/geo
```

- Replace the placeholder values with your actual API keys.

You can obtain the required API keys from:

- [WeatherAPI.com](https://www.weatherapi.com/)
- [OpenWeatherMap](https://openweathermap.org/api)

### 5. Run the Application

- Open the `index.html` file in WebStorm.
- Right-click on the file.
- Select **Open in Browser** or use WebStorm's built-in browser preview.
- Alternatively, configure and use a local development server.

The application will open in your browser and be ready to use.

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
