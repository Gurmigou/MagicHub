import React from 'react'
import Clock from "./Clock";
import Calendar from "./Calendar";
import WeatherBlock from "./WeatherBlock";

function App() {
    return (
      <div>
          <article className="article-left">
              <div className="data-time-block">
                  <Clock/>
                  <Calendar/>
              </div>
              <WeatherBlock/>
              {/*<div className="weather-block">*/}
              {/*    <div className="weather-icon-block">*/}
              {/*        <div className="day-name-today">*/}
              {/*            <p id="day-name-today-title">today - Thursday</p>*/}
              {/*        </div>*/}
              {/*        <div className="today-weather-image">*/}
              {/*            <img className="weather-icon" src={"/images/weather/clouds.png"} alt="weather"/>*/}
              {/*        </div>*/}
              {/*        <div className="today-weather-description">*/}
              {/*            <p>temp: <strong>25°</strong></p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className="weather-forecast">*/}
              {/*        <div className="forecast-block-1">*/}
              {/*            <div className="forecast-day-name">*/}
              {/*                <p>Friday</p>*/}
              {/*            </div>*/}
              {/*            <div className="forecast-weather-image-description">*/}
              {/*                <img className="weather-icon" id="2-weather-icon" src={"/images/weather/clouds.png"} alt="weather"/>*/}
              {/*                <div className="forecast-weather-description">*/}
              {/*                    <p>temp: 23°</p>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div className="forecast-block-2">*/}
              {/*            <div className="forecast-day-name">*/}
              {/*                <p>Saturday</p>*/}
              {/*            </div>*/}
              {/*            <div className="forecast-weather-image-description">*/}
              {/*                <img className="weather-icon" id="3-weather-icon" src={"/images/weather/clouds.png"} alt="weather"/>*/}
              {/*                <div className="forecast-weather-description">*/}
              {/*                    <p>temp: 21°</p>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div className="forecast-block-3">*/}
              {/*            <div className="forecast-day-name">*/}
              {/*                <p>Sunday</p>*/}
              {/*            </div>*/}
              {/*            <div className="forecast-weather-image-description">*/}
              {/*                <img className="weather-icon" id="4-weather-icon" src={"/images/weather/clouds.png"} alt="weather"/>*/}
              {/*                <div className="forecast-weather-description">*/}
              {/*                    <p>temp: 18°</p>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
          </article>
          <article className="article-right">
              <div className="plans-title-block">
                <p>Your plans</p>
              </div>
              <div className="plans-list-block">
                  <div className="plan-block">
                      <div className="task-index">
                          <p>Task 1</p>
                      </div>
                      <div className="deadline">
                          <p>Deadline: <strong>01.07.2021</strong></p>
                      </div>
                      <div className="author">
                          <p>Author: <strong>Yehor</strong></p>
                      </div>
                      <div className="plan-description">
                          <p>Task: <strong>Repair table</strong></p>
                      </div>
                  </div>
                  <div className="plan-block">
                      <div className="task-index">
                          <p>Task 2</p>
                      </div>
                      <div className="deadline">
                          <p>Deadline: <strong>01.07.2021</strong></p>
                      </div>
                      <div className="author">
                          <p>Author: <strong>Yehor</strong></p>
                      </div>
                      <div className="plan-description">
                          <p>Task: <strong>Repair table</strong></p>
                      </div>
                  </div>
                  <div className="plan-block">
                      <div className="task-index">
                          <p>Task 3</p>
                      </div>
                      <div className="deadline">
                          <p>Deadline: <strong>01.07.2021</strong></p>
                      </div>
                      <div className="author">
                          <p>Author: <strong>Yehor</strong></p>
                      </div>
                      <div className="plan-description">
                          <p>Task: <strong>Repair table</strong></p>
                      </div>
                  </div>
                  <div className="plan-block">
                      <div className="task-index">
                          <p>Task 4</p>
                      </div>
                      <div className="deadline">
                          <p>Deadline: <strong>01.07.2021</strong></p>
                      </div>
                      <div className="author">
                          <p>Author: <strong>Yehor</strong></p>
                      </div>
                      <div className="plan-description">
                          <p>Task: <strong>Repair table</strong></p>
                      </div>
                  </div>
                  <div className="plan-block">
                      <div className="task-index">
                          <p>Task 5</p>
                      </div>
                      <div className="deadline">
                          <p>Deadline: <strong>01.07.2021</strong></p>
                      </div>
                      <div className="author">
                          <p>Author: <strong>Yehor</strong></p>
                      </div>
                      <div className="plan-description">
                          <p>Task: <strong>Repair table</strong></p>
                      </div>
                  </div>
              </div>
          </article>
      </div>
    );
}

export default App;
