import React from 'react'

/*
    int: indexOfBlock
    array: days
    int: dayOfWeek
    string: weatherType
    int: temperature
 */

function WeatherForecast(props) {

    let imageExtension;

    if (props.weatherType === "loading") imageExtension = ".gif";
    else imageExtension = ".png";

    return (
        <div className={"forecast-block-" + props.indexOfBlock}>
            <div className="forecast-day-name">
                <p>{props.days[props.dayOfWeek]}</p>
            </div>
            <div className="forecast-weather-image-description">
                <img className="weather-icon" src={"/images/weather/" + props.weatherType + imageExtension} alt="weather"/>
                <div className="forecast-weather-description">
                    <p>temp: {props.temperature}°</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherForecast