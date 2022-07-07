import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay day={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longtitude = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=81816ad955060b90cb48be234d7ed923&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
