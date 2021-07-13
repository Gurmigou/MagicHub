import React from "react";
import PlanEditButtons from "./PlanEditButtons";

/*
    int: index
    string: deadline
    string: author
    string: task
    int: indexInDB
    string: editState
    function: onToggle
    function: openUpdatePopUp
    function: setUpdatePlanIndex
 */

function Plan(props) {
    return (
        <div className="plan-block">
            <div className="task-index-block">
                <div className="plan-task-index">
                    <p>Task {props.index}</p>
                </div>
                {props.editState === "edit" && <PlanEditButtons indexInDB={props.indexInDB}
                                                                index={props.index}
                                                                onToggle={props.onToggle}
                                                                openUpdatePopUp={props.openUpdatePopUp}
                                                                setUpdatePlanIndex={props.setUpdatePlanIndex}/>}
            </div>
            <div className="other-plan-info">
                <div className="deadline">
                    <p>Deadline: <strong>{props.deadline}</strong></p>
                </div>
                <div className="author">
                    <p>Author: <strong>{props.author}</strong></p>
                </div>
                <div className="plan-description">
                    <p>Task: <strong>{props.task}</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Plan