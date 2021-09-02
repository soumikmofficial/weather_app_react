import "./App.css";
import { useState, useRef } from "react";

const api = {
  key: "7760ff7ca228f062d559622ef8fc9d40",
  base: "http://api.openweathermap.org/data/2.5/weather?",
};

const dateBuilder = (d) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${month}, ${date}, ${year}`;
};
function App() {
  const date = new Date();
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const locationRef = useRef();

  const getWeather = (e) => {
    e.preventDefault();
    setLocation(locationRef.current.value);
    fetch(
      `${api.base}q=${locationRef.current.value}&units=metric&APPID=${api.key}`
    )
      .then((r) => r.json())
      .then((res) => {
        setWeather(res);
        locationRef.current.value = "";
      });
  };

  return (
    <div className={`App ${weather.weather ? weather.weather[0].main : ""}`}>
      <div className="main">
        <div className="search-box">
          <form action="" onSubmit={getWeather}>
            <input
              type="text"
              placeholder="City name"
              className="search-bar"
              // onChange={(e) => setLocation(e.target.value)}
              ref={locationRef}
              // value={location}
              // onKeyPress={getWeather}
            />
          </form>
        </div>
        {weather.weather && (
          <>
            <div className="location-box">
              <h3 className="location">
                {weather.name}, {weather.sys.country}
              </h3>
              <p className="date">{dateBuilder(new Date())}</p>
            </div>
            <div className="weather-box">
              <div className="temp">
                <h1>
                  {Math.round(weather.main.temp)}
                  <span>&#176;</span>c
                </h1>
              </div>
              <p className="weather">{weather.weather[0].main}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
