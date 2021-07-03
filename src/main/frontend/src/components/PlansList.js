import React, {useEffect, useState} from "react";

import axios from "axios";
import Plan from "./Plan";

function PlansList() {
    const plan = {
        authorName: "...",
        description: "...",
        creationDate: "0000:00:00",
        deadlineDate: "0000:00:00"
    }

    const plansAreEqual = (oldList, newList) => {
        if (oldList.length !== newList.length)
            return false;
        for (let i = 0; i < oldList.length; i++) {
            let oldPlan = oldList[i];
            let newPlan = newList[i];

            if (oldPlan.authorName !== newPlan.authorName
                || oldPlan.deadlineDate !== newPlan.deadlineDate
                || oldPlan.description !== newPlan.description) {
                return false;
            }
        }
        return true;
    }

    const defaultPlansList = [];

    const [planList, setPlanList] = useState(defaultPlansList);

    const updatePlanList = () => {
        axios.get("http://localhost:8080/api/notes")
             .then(res => {
                 if (!plansAreEqual(planList, res.data))
                     setPlanList(res.data)
             });
    }

    useEffect(() => updatePlanList(), []);

    // setInterval(updatePlanList, 5000);

    /*
    int: index
    string: deadline
    string: author
    string: task
 */

    const resultPlanList = [];
    for (let i = 0; i < planList.length; i++) {
        resultPlanList.push(<Plan index={i + 1}
                                  deadline={planList[i].deadlineDate}
                                  author={planList[i].authorName}
                                  task={planList[i].description}/>)
    }

    return (
        <div className="plans-list-block">
            {resultPlanList}
        </div>
    );
}

export default PlansList