import React from "react";

/*
    int: index
    string: deadline
    string: author
    string: task
 */

function Plan(props) {
    return (
        <div className="plan-block">
            <div className="task-index">
                <p>Task {props.index}</p>
            </div>
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
    );
}

export default Plan