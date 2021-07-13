import React from "react";
import axios from "axios";

function PlanEditButtons({indexInDB, index, onToggle, openUpdatePopUp, setUpdatePlanIndex}) {

    const deletePlan = () => {
        axios.delete("http://localhost:8080/api/notes/" + indexInDB)
             .then(() => onToggle());
    }

    return (
        <div className="plan-edit-buttons">
            <button id="update-button" onClick={() => {
                console.log(index);
                setUpdatePlanIndex(index);
                openUpdatePopUp()
            }}>U</button>

            <button id="delete-button" onClick={() => deletePlan()}>D</button>
        </div>
    );
}

export default PlanEditButtons;