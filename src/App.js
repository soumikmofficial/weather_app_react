import "./App.css";

const api = {
  key: "7760ff7ca228f062d559622ef8fc9d40",
  base: "http://api.openweathermap.org/data/2.5/forecast?",
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
  console.log(date.getMonth());
  return (
    <div className="App sunny">
      <div className="main">
        <div className="search-box">
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        <div className="location-box">
          <h3 className="location">Canada</h3>
          <p className="date">{dateBuilder(new Date())}</p>
        </div>
        <div className="weather-box">
          <div className="temp">
            <h1>
              33<span>&#176;</span>c
            </h1>
          </div>
          <p className="weather">Sunny</p>
        </div>
      </div>
    </div>
  );
}

export default App;
