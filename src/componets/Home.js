import React, { useState } from "react";
import Weather from "../componets/Weather";
import { toast } from "react-toastify";

const Home = () => {
  // APi Key
  const APIKEY = "2344b8518dad4a5de3e32d5b1d95bbf6";
  const [weather, setWeather] = useState([]);
  const [getWeather, setGetWeather] = useState({
    city: "",
    country: "",
  });

  // Api calling  get weather  data from weather
  async function weatherData(e) {
    e.preventDefault();
    if (getWeather.city === "") {
      toast.error("Please enter a City name and Country");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${getWeather.city},${getWeather.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setWeather({ data: data });
      toast.success(
        `Weather About a City is ${getWeather.city}  and Country is ${getWeather.country}`
      );
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setGetWeather({ ...getWeather, city: value });
    }
    if (name === "country") {
      setGetWeather({ ...getWeather, country: value });
    }
  };

  return (
    <>
      <div className="weather">
        <span className="title fw-bold fst-italic">
          Weather <span className="text-success  fst-italic">App</span>{" "}
        </span>
        <hr className="hr-color" />
        <form>
          <div class="row">
            <div class="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City "
                name="city"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Country "
                name="country"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col">
              <button className="btn btn-info " onClick={(e) => weatherData(e)}>
                Submit
              </button>
            </div>
          </div>
        </form>

        {weather.data !== undefined ? (
          <div>
            <Weather data={weather.data} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
