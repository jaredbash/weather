import "./css/App.css";
import "./css/weather-icons.css";
import "./css/weather-icons-wind.css";
import React, { useEffect, useState } from "react";
import { Top } from "./Top";
import { Middle } from "./Middle";
import { Bottom } from "./Bottom";
import { Daily } from "./Daily";

function App() {
    const [weather, setWeather] = useState(undefined);
    useEffect(() => {
        getWeatherData();
    }, []);

    function getWeatherData() {
        fetch("https://api.openweathermap.org/data/3.0/onecall?lat=48.1173&lon=1.6778&appid=43559232a64f1564bdaeecc4af4cd4af")
            .then((response) => response.json())
            .then((data) => {
                console.log("Received data!", data);
                setWeather({
                    currentTemp: kelvinToCelsius(data.current.temp),
                    conditions: data.current.weather[0].description.charAt(0).toUpperCase() + data.current.weather[0].description.substring(1),
                    max: kelvinToCelsius(data.daily[0].temp.max),
                    min: kelvinToCelsius(data.daily[0].temp.min),
                    humidity: data.current.humidity,
                    precipitation: data.daily[0].pop,
                    windDegree: data.current.wind_deg,
                    windSpeed: metersToKilometers(data.current.wind_speed),
                    dailyWeather: data.daily.slice(1, 6).map((day) => {
                        return {dt: new Date(day.dt*1000).toLocaleString('en-us', {weekday: "short"}), max: kelvinToCelsius(day.temp.max), min: kelvinToCelsius(day.temp.min), description: day.weather[0].description, id: day.weather[0].id};
                    })
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        weather ?
            <React.Fragment>
                <div className={"overlay"}>
                    <div className={"app"}>
                        <div className={"main frosted-glass"}>
                            <Top name={weather.name}  />
                            <Middle currentTemp={weather.currentTemp} conditions={weather.conditions} />
                            <Bottom
                                maxTemp={weather.max}
                                minTemp={weather.min}
                                humidity={weather.humidity}
                                precipitation={weather.precipitation}
                                windSpeed={weather.windSpeed}
                                windDegree={weather.windDegree}
                            />
                        </div>
                        <div className={"daily"}>
                            <Daily dailyWeather={weather.dailyWeather}/>
                        </div>
                    </div>
                </div>
        </React.Fragment> : <p>HOLD ON</p>
    );
}



function kelvinToCelsius(temp) {
    return Math.round(temp - 273.15);
}

function metersToKilometers(speed) {
    return Math.round(((speed * 3.6) * 10) / 10);
}



export default App;
