import React, { useEffect, useState } from "react";
import "./css/top.css";

export function Top({ name }) {
    let time = new Date().toLocaleTimeString("en-US", { hour12: false, timeStyle: "short" });
    const [currentTime, setTime] = useState(time);
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(() => {
                let newTime = new Date().toLocaleTimeString("en-US", { hour12: false, timeStyle: "short" });
                return newTime;
            });
        }, 1000);
        return () => clearInterval(interval);
    });
    return (
        <div className={"main_top"}>
            <div className={"main_top_city"}>
                {name}
            </div>
            <div className={"main_top_datetime"}>
                {currentTime}
            </div>
        </div>
    );
}