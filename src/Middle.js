import React from "react";
import "./css/middle.css";

export function Middle({ currentTemp, conditions }) {
    return (
        <div className={"main_middle"}>
            <div className={"main_middle_temp"}>
                {currentTemp}
            </div>
            <div className={"main_middle_description"}>
                {conditions}
            </div>
        </div>
    );
}