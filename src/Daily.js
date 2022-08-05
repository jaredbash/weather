import React, { useEffect, useState } from "react";
import "./css/daily.css";


export function Daily(props) {
    return (
        <React.Fragment>
            {props.dailyWeather.map((day) =>
                <div className={"daily_box frosted-glass"}>
                    <div className={"daily_box_top"}>
                        <span className={"highTemp"}>{day.max}</span>
                        <span className={"lowTemp"}>{day.min}</span>
                    </div>
                    <i className={`wi wi-owm-${day.id} daily_box_icon`} />
                    <div className={"daily_box_day"}>{day.dt}</div>
                </div>
            )}
        </React.Fragment>
    );
}