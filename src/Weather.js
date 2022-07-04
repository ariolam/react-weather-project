import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        {" "}
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
            <h1>{props.city}</h1>
            <ul>
              <li>
                {" "}
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weather description"
                />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=81816ad955060b90cb48be234d7ed923&units=metric`;
    axios.get(url).then(displayWeather);
    return "Loading...";
  }
}
