import React, {useEffect, useState} from 'react'
import axios from "axios";
import WeatherToday from "./WeatherToday";

function WeatherBlock() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hourTimeout = 3_600_000; // 1000 * 60 * 60;

    const defaultWeather = {
        locality: "Chernihiv",
        clouds: false,
        atmosphere: false,
        rain: false,
        thunderstorm: false,
        snow: false,
        temperature: 0
    }

    const [weather, setWeather] = useState(defaultWeather);

    const getWeatherType = (weatherDate) => {
        if (weatherDate.clear)
            return "clear";
        if (weatherDate.clouds)
            return "clouds";
        if (weatherDate.atmosphere)
            return "atmosphere";
        if (weatherDate.rain)
            return "rain";
        if (weatherDate.thunderstorm)
            return "thunderstorm";
        if (weatherDate.snow)
            return "snow";
        return "loading";
    }

    const updateWeather = () => {
        axios.get("http://localhost:8080/api/weather?locality=Chernihiv").then(res => {
            const data = res.data;
            setWeather(data);
        });
    }

    useEffect(() => {
        updateWeather();
    }, []);

    let dayOfWeek = new Date().getDay();

    const updateDay = () => {
        const day = new Date().getDay();
        if (dayOfWeek !== day) {
            dayOfWeek = day;
        }
    }

    setInterval(updateWeather, hourTimeout);
    setInterval(updateDay, 1000);

    return (
        <div className="weather-block">
            <WeatherToday days={days} dayOfWeek={dayOfWeek} weatherType={getWeatherType(weather)} temperature={weather.temperature}/>

            <div className="weather-forecast">
                <div className="forecast-block-1">
                    <div className="forecast-day-name">
                        <p>Friday</p>
                    </div>
                    <div className="forecast-weather-image-description">
                        <img className="weather-icon" id="2-weather-icon" src={"/images/weather/clouds.png"} alt="weather"/>
                        <div className="forecast-weather-description">
                            <p>temp: 23°</p>
                        </div>
                    </div>
                </div>
                <div className="forecast-block-2">
                    <div className="forecast-day-name">
                        <p>Saturday</p>
                    </div>
                    <div className="forecast-weather-image-description">
                        <img className="weather-icon" id="3-weather-icon" src={"/images/weather/clouds.png"} alt="weather"/>
                        <div className="forecast-weather-description">
                            <p>temp: 21°</p>
                        </div>
                    </div>
                </div>
                <div className="forecast-block-3">
                    <div className="forecast-day-name">
                        <p>Sunday</p>
                    </div>
                    <div className="forecast-weather-image-description">
                        <img className="weather-icon" id="4-weather-icon" src={"/images/weather/clouds.png"} alt="weather"/>
                        <div className="forecast-weather-description">
                            <p>temp: 18°</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherBlock;