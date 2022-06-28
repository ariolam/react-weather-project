import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
          <h1>Athens</h1>
          <ul>
            <li>Tuesday 13:00</li>
            <li>Partly cloudy</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather description"
              />
              33°C
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: 31%</li>
                <li>Wind: 26 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
