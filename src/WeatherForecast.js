import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let latitude = props.coordinates.lat;
  let longtitude = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=81816ad955060b90cb48be234d7ed923&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day mt-4">Mon</div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast-temperature">
            <span className="Forecast-temperature-max"> 20°</span>
            <span className="Forecast-temperature-min"> 15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
