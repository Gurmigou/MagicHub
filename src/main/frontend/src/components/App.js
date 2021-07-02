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
