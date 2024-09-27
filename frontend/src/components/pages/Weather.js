import React, { useState,useEffect } from "react";
import axios from "axios";
import { FaTemperatureHigh, FaCloud, FaWater, FaWind } from "react-icons/fa"; // Importing icons
import "../styles/weather.css";
import "../styles/Layout.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/fetch-weather/?city=${city}`
      );
      console.log(response.data); // Log the full response
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("Could not fetch weather data. Please check the city name.");
      setWeather(null);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <div className="dashboard-banner">
          <h1 className="dashboard-title">Weather</h1>
        </div>
      <div className="weather-layout-container">
        <div className="weather-card">
          <form onSubmit={handleSearch} className="weather-form">
            <input
              type="text"
              className="weather-input"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="weather-button">Get Weather</button>
          </form>

          {error && <p className="weather-error">{error}</p>}

          {weather && weather.main ? (
            <div className="weather-info">
              <h2 className="weather-title">{weather.name.toUpperCase()}</h2>

              <div className="weather-details">
                <div className="weather-section">
                  <p className="weather-temp">
                    <FaTemperatureHigh /> Temperature: {(weather.main.temp).toFixed(2)} °C
                  </p>
                </div>
                <div className="weather-section">
                  <p className="weather-description">
                    <FaCloud /> Weather: {weather.weather[0].description}
                  </p>
                </div>
                <div className="weather-section">
                  <p className="weather-humidity">
                    <FaWater /> Humidity: {weather.main.humidity} %
                  </p>
                </div>
                <div className="weather-section">
                  <p className="weather-wind-speed">
                    <FaWind /> Wind Speed: {weather.wind.speed} m/s
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
            <br/>
            <p>No weather data available.</p>
            </>)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Weather;
