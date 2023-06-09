import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(event) {}

  let apiKey = "9a0e0d34f1bf60b115a34e7o3fdf2a7t";
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
