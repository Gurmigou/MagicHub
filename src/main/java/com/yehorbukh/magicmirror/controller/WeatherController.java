package com.yehorbukh.magicmirror.controller;

import com.yehorbukh.magicmirror.exception.weather.WeatherNotSetException;
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

    @Setter(onMethod=@__({@Autowired}))
    private WeatherService weatherService;

//    public ResponseEntity<?> weather() {
//        try {
//            return ResponseEntity.ok(weatherService.getCurrentWeather());
//        } catch (WeatherNotSetException e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }

    @GetMapping
    public ResponseEntity<?> weather(@RequestParam("locality") String locality) {
        try {
            return ResponseEntity.ok(weatherService.getWeather(locality));
        } catch (IOException | InterruptedException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
