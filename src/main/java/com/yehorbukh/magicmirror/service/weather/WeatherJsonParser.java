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

    /**
     * Parses required information of json
     */
    private void parseDay(JSONObject jsonObj, Weather weatherModel) {
        int weatherValue = jsonObj.getJSONArray("weather").getJSONObject(0).getInt("id");
        setWeatherType(weatherModel, weatherValue);

        int temperature = (int) Math.round(
                kelvinToCelsius(jsonObj.getJSONObject("main").getDouble("temp")));
        weatherModel.setTemperature(temperature);
    }

    /**
     * This method has some magic numbers which relates to the structure of json response.
     * @param weatherJson json response which contains information about weather
     * @param daysRequire a number of days of the forecast
     * @return {@code Weather} object which contains today weather info and forecast
     */
    public Weather parseWeatherJson(String weatherJson, int daysRequire) {
        if (daysRequire > 5)
            daysRequire = 5;

        var daysArray = new JSONObject(weatherJson).getJSONArray("list");

        // the parsed result
        var weatherModel = new Weather();
        JSONObject dayJson;
        int jsonIndex = 0;

        // daysRequire + 1 to include current day
        for (int i = 0; i < daysRequire + 1; i++) {
            if (i == 0) {
                dayJson = daysArray.getJSONObject(jsonIndex++);
                parseDay(dayJson, weatherModel);

                int currentDay = Integer.parseInt(dayJson.getString("dt_txt").substring(8, 10));
                int parsedDay = currentDay;

                while (parsedDay == currentDay) {
                    dayJson = daysArray.getJSONObject(jsonIndex++);
                    parsedDay = Integer.parseInt(dayJson.getString("dt_txt").substring(8, 10));
                }

                jsonIndex--;
            } else {
                jsonIndex += 4;
                var forecast = new Weather();
                dayJson = daysArray.getJSONObject(jsonIndex);
                parseDay(dayJson, forecast);
                weatherModel.getForecast().add(forecast);
                jsonIndex += 4;
            }
        }
        return weatherModel;
    }
}
