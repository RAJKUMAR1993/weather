import React from "react";

const weather = (props) => {
  const { data } = props;

  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";

  console.log(iconurl);
  return (
    <>
      <div className="displayweather">
        {data.cod !== 404 ? (
          <React.Fragment>
            <div className="maincard">
              <span className="cardtitle text-info">
                {data.name} , {data.sys.country}. Weather
                <span className="text-danger fs-4"> As of </span>
                {new Date().toLocaleTimeString()}
              </span>

              <h1 className="mt-1 text-success">
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
              </h1>
              <span className="weather-main mt-4 text-primary">
                {data.weather[0].main}
              </span>
              <img
                className="weather-icon mt-3"
                src={iconurl}
                alt=""
                srcSet=""
              />
              <span className="weather-description text-dark fs-5">
                {data.weather[0].description}
              </span>
            </div>
            <div className="weatherdetails py-4">
              <div className="section1">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">High/Low</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>
                          {Math.floor(data.main.temp_max - 273.15)}/
                          {Math.floor(data.main.temp_min - 273.15)}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">Humidity</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>{data.main.humidity} %</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">Pressure</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>{data.main.pressure} hPa</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">Visibility</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>{data.visibility / 1000} Km</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="section2 py-3">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">Wind</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>
                          {Math.floor((data.wind.speed * 18) / 5)} km/hr
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">Wind Direction</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>
                          {data.wind.deg}
                          <sup>o</sup> deg
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">Sunrise</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>
                          {new Date(
                            data.sys.sunrise * 1000
                          ).toLocaleTimeString()}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="text-bold fs-4">Sunset</h4>
                        <hr className="bg-info " style={{ height: "5px" }} />
                      </td>
                      <td>
                        <span>
                          {new Date(
                            data.sys.sunset * 1000
                          ).toLocaleTimeString()}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="maincard">
            <h2>{data.message}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default weather;
