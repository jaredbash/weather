import React from "react";
import "./css/bottom.css";

export function Bottom({ maxTemp, minTemp, humidity, precipitation, windDegree, windSpeed }) {
    return (
        <div className={"main_bottom"}>
            <div className={"main_bottom_minmax"}>
                <i className="wi wi-direction-up"></i>
                {maxTemp}
                <i className="wi wi-direction-down"></i>
                {minTemp}
            </div>
            <div className={"main_bottom_stats"}>
                <div className={"main_bottom_humidity"}>
                    <i className={"wi wi-humidity"} />
                    {humidity}
                </div>
                <i className={"wi wi-raindrops"} />
                {precipitation}
            </div>

            <div className={"wind"}>
                <i className={"wi wi-wind towards-" + windDegree + "-deg"}></i>
                {windSpeed + " kmph"}
            </div>
        </div>
    );
}