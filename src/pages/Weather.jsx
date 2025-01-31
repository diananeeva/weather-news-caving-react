import React, { useState } from "react";
import "../styles/Weather.css";
import axios from "axios";

const News = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "890aa1463436e6d7ad563a58f55201a4";

  const getWeather = async () => {
    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      getWeather();
    }
  };

  return (
    <main className="weather-app">
      <header>
        <h1>Don't forget to check the weather before you go.</h1>
      </header>

      <section>
        <form onSubmit={handleSearch}>
          <label htmlFor="city-search" className="visually-hidden">
            Enter city name:
          </label>
          <input
            id="city-search"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>
      </section>

      {error && (
        <section>
          <p className="error">{error}</p>
        </section>
      )}

{weatherData && (
  <section className="weather-info">
    <header>
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <img 
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
        alt={weatherData.weather[0].description} 
      />
    </header>
    <article>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </article>
  </section>
)}

    </main>
  );
};

export default News;
