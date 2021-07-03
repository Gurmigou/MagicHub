import React from 'react'
import Clock from "./Clock";
import Calendar from "./Calendar";
import WeatherBlock from "./WeatherBlock";
import EditButton from "./EditButton";
import PlansList from "./PlansList";

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
                      <EditButton/>
                      {/*<div className="edit-plans-button-div">*/}
                      {/*    <button className="edit-plans-button">*/}
                      {/*        <img id="edit-img" src={"/images/plans/edit_plans.png"} alt="edit Plans"/>*/}
                      {/*    </button>*/}
                      {/*</div>*/}
                  </div>
              </div>
                <PlansList/>
              {/*<div className="plans-list-block">*/}
              {/*    <div className="plan-block">*/}
              {/*        <div className="task-index">*/}
              {/*            <p>Task 1</p>*/}
              {/*        </div>*/}
              {/*        <div className="deadline">*/}
              {/*            <p>Deadline: <strong>01.07.2021</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="author">*/}
              {/*            <p>Author: <strong>Yehor</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="plan-description">*/}
              {/*            <p>Task: <strong>Repair table</strong></p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className="plan-block">*/}
              {/*        <div className="task-index">*/}
              {/*            <p>Task 2</p>*/}
              {/*        </div>*/}
              {/*        <div className="deadline">*/}
              {/*            <p>Deadline: <strong>01.07.2021</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="author">*/}
              {/*            <p>Author: <strong>Yehor</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="plan-description">*/}
              {/*            <p>Task: <strong>Repair table</strong></p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className="plan-block">*/}
              {/*        <div className="task-index">*/}
              {/*            <p>Task 3</p>*/}
              {/*        </div>*/}
              {/*        <div className="deadline">*/}
              {/*            <p>Deadline: <strong>01.07.2021</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="author">*/}
              {/*            <p>Author: <strong>Yehor</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="plan-description">*/}
              {/*            <p>Task: <strong>Repair table</strong></p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className="plan-block">*/}
              {/*        <div className="task-index">*/}
              {/*            <p>Task 4</p>*/}
              {/*        </div>*/}
              {/*        <div className="deadline">*/}
              {/*            <p>Deadline: <strong>01.07.2021</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="author">*/}
              {/*            <p>Author: <strong>Yehor</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="plan-description">*/}
              {/*            <p>Task: <strong>Repair table</strong></p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className="plan-block">*/}
              {/*        <div className="task-index">*/}
              {/*            <p>Task 5</p>*/}
              {/*        </div>*/}
              {/*        <div className="deadline">*/}
              {/*            <p>Deadline: <strong>01.07.2021</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="author">*/}
              {/*            <p>Author: <strong>Yehor</strong></p>*/}
              {/*        </div>*/}
              {/*        <div className="plan-description">*/}
              {/*            <p>Task: <strong>Repair table</strong></p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
          </article>
      </div>
    );
}

export default App;
