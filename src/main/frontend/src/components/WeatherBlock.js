import React, {useEffect, useState} from 'react'
import axios from "axios";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";

function WeatherBlock() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hourTimeout = 3_600_000; // 1000 * 60 * 60;

    const defaultJsonTemplate = {
        locality: "Chernihiv",
        clouds: false,
        atmosphere: false,
        rain: false,
        thunderstorm: false,
        snow: false,
        temperature: 0,
        forecast: []
    }

    const defaultWeather = {
        locality: "Chernihiv",
        clouds: false,
        atmosphere: false,
        rain: false,
        thunderstorm: false,
        snow: false,
        temperature: 0,
        forecast: [defaultJsonTemplate, defaultJsonTemplate, defaultJsonTemplate]
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
            console.log(data.forecast);
            setWeather(data);
        });
    }

    useEffect(() => {
        updateWeather();
    }, []);

    let dayOfWeek = new Date().getDay();

    const getCorrectDayOfWeek = (day) => {
        return (day < 7) ? day : (day % 7);
    }

    const updateDay = () => {
        const day = new Date().getDay();
        if (dayOfWeek !== day) {
            dayOfWeek = day;
        }
    }

    setInterval(updateWeather, hourTimeout);
    setInterval(updateDay, 1000);

    const forecast = [];
    for (let i = 1; i < 4; i++) {
        forecast.push(<WeatherForecast days={days}
                                       dayOfWeek={getCorrectDayOfWeek(dayOfWeek + i)}
                                       indexOfBlock={i}
                                       weatherType={getWeatherType(weather.forecast[i - 1])}
                                       temperature={weather.forecast[i - 1].temperature}/>);
    }

    return (
        <div className="weather-block">
            <WeatherToday days={days} dayOfWeek={dayOfWeek} weatherType={getWeatherType(weather)} temperature={weather.temperature}/>
            <div className="weather-forecast">
                {forecast}
            </div>
        </div>
    );
}

export default WeatherBlock;