package com.yehorbukh.magicmirror.service.weather;

import com.yehorbukh.magicmirror.model.Weather;
import org.springframework.stereotype.Component;

import org.json.JSONObject;

@Component
public class WeatherJsonParser {
    /**
     * These methods define the weather type.
     * The definitions of magic numbers below you can read from the
     * <a href="https://openweathermap.org/weather-conditions">openweather</a> site.
     */
    private boolean isThunderstorm(int value) {
        return value >= 200 && value <= 232;
    }

    private boolean isRain(int value) {
        return value >= 500 && value <= 531 || value >= 300 && value <= 321;
    }

    private boolean isSnow(int value) {
        return value >= 600 && value <= 622;
    }

    private boolean isAtmosphere(int value) {
        return value >= 701 && value <= 781;
    }

    private boolean isClear(int value) {
        return value == 800;
    }

    private boolean isClouds(int value) {
        return value >= 801 && value <= 804;
    }

    private void setWeatherType(Weather weatherType, int weatherValue) {
        if (isClear(weatherValue))
            weatherType.setClear(true);
        else if (isClouds(weatherValue))
            weatherType.setClouds(true);
        else if (isRain(weatherValue))
            weatherType.setRain(true);
        else if (isSnow(weatherValue))
            weatherType.setRain(true);
        else if (isThunderstorm(weatherValue))
            weatherType.setThunderstorm(true);
        else if (isAtmosphere(weatherValue))
            weatherType.setAtmosphere(true);
    }

    private double kelvinToCelsius(double kelvinTemp) {
        return kelvinTemp - 273.15;
    }

    public Weather parseWeatherJson(String weatherJson) {
        var parser = new JSONObject(weatherJson);
        var weatherModel = new Weather();

        int weatherValue = parser.getJSONArray("weather").getJSONObject(0).getInt("id");
        setWeatherType(weatherModel, weatherValue);

        int temperature = (int) Math.round(
                kelvinToCelsius(parser.getJSONObject("main").getDouble("temp")));
        weatherModel.setTemperature(temperature);

        weatherModel.setLocality(parser.getString("name"));
        return weatherModel;
    }
}
