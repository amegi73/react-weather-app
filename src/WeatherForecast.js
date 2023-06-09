import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="clear-sky"
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">22 °C</span>
            <span className="WeatherForecast-temperature-min">15 °C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
