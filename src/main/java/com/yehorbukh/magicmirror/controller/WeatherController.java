package com.yehorbukh.magicmirror.controller;

import com.yehorbukh.magicmirror.service.weather.WeatherService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("api/weather")
@CrossOrigin("*")
public class WeatherController {
    private static final int DAYS_FORECAST = 3;

    @Setter(onMethod=@__({@Autowired}))
    private WeatherService weatherService;

    @GetMapping
    public ResponseEntity<?> weather(@RequestParam("locality") String locality) {
        try {
            return ResponseEntity.ok(weatherService.getWeather(locality, DAYS_FORECAST));
        } catch (IOException | InterruptedException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
