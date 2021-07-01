package com.yehorbukh.magicmirror.service.weather;

import com.yehorbukh.magicmirror.exception.weather.WeatherNotSetException;
import com.yehorbukh.magicmirror.model.Weather;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
@Slf4j
public class WeatherService {
    /** An API key to get weather */
    private static final String KEY = "5a389c49c495639d5153758bca6606ac";


    private static final String apiURL = "https://api.openweathermap.org" +
            "/data/2.5/forecast/daily?q={REGION}&cnt=4&appid=" + KEY;

//    private static final String apiURL = "https://api.openweathermap.org" +
//                            "/data/2.5/weather?q={REGION}&appid=" + KEY;

    @Setter(onMethod=@__({@Autowired}))
    private WeatherJsonParser weatherJsonParser;

    private String insertRegionIntoApiUrl(String region) {
        return apiURL.replace("{REGION}", region);
    }

    /**
     * Updates the weather using <a href="https://openweathermap.org/">openweather</a> api.
     * @param locality a place where to find weather
     * @return weather model
     */
    public Weather getWeather(String locality)
            throws IOException, InterruptedException {
        String weatherJson = findNewWeatherJSON(locality);

        return parseWeatherJSON(weatherJson);
    }

    private Weather parseWeatherJSON(String weatherJson) {
        var weather = weatherJsonParser.parseWeatherJson(weatherJson);

        log.info("WeatherToday JSON have been parsed.");

        return weather;
    }

    private String findNewWeatherJSON(String locality) throws IOException, InterruptedException {
        // get an api url with correct region name
        String urlApiWithRegion = insertRegionIntoApiUrl(locality);

        var client = HttpClient.newBuilder().build();

        var request = HttpRequest.newBuilder()
                .uri(URI.create(urlApiWithRegion))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request,
                                        HttpResponse.BodyHandlers.ofString());

        log.info("WeatherToday in {} have been found.", locality);

        return response.body();
    }
}
