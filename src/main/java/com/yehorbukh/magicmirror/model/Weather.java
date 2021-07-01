package com.yehorbukh.magicmirror.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Weather {
    private String locality;

    /** WeatherToday conditions */
    private boolean clear;
    private boolean clouds;
    private boolean atmosphere;
    private boolean rain;
    private boolean thunderstorm;
    private boolean snow;

    private int temperature;
}
