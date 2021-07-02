import React from 'react'

/*
props = {
    array: days
    int: dayOfWeek
    string: weatherType
    int: temperature
}
 */

function WeatherToday(props) {

    let imageExtension;

    if (props.weatherType === "loading") imageExtension = ".gif";
    else imageExtension = ".png";

    return (
        <div className="weather-icon-block">
            <div className="day-name-today">
                <p id="day-name-today-title">today - {props.days[props.dayOfWeek]}</p>
            </div>
            <div className="today-weather-image">
                <img className="weather-icon" src={
                    "/images/weather/" + props.weatherType + imageExtension} alt="weather"/>
            </div>
            <div className="today-weather-description">
                <p>temp: <strong>{props.temperature}°</strong></p>
            </div>
        </div>
    );
}

export default WeatherToday;