package com.yehorbukh.magicmirror.exception.weather;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * For usage see {@link com.yehorbukh.magicmirror.controller.WeatherController}.
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class WeatherNotFoundException extends RuntimeException {
}
