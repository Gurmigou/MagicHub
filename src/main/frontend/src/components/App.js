import React from 'react'
import Clock from "./Clock";
import Calendar from "./Calendar";
import WeatherBlock from "./WeatherBlock";
import PlansList from "./PlansList";
import ModalIcon from "./ModalIcon";

function App() {
    return (
      <div>
          <article className="article-left">
              <div className="data-time-block">
                  <Clock/>
                  <Calendar/>
              </div>
              <WeatherBlock/>
          </article>
          <article className="article-right">
              <div className="plans-title-block">
                  <div className="plans-title-block-inner">
                      <div className="title">
                        <p>Your plans</p>
                      </div>
                  </div>
              </div>
              <PlansList/>
          </article>
      </div>
    );
}

export default App;
