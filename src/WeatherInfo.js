import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="description">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize text-primary">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-inline">
          <WeatherIcon code={props.data.icon} size={52} />
          <WeatherTemp celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
