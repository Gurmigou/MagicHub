import React, {useEffect, useState} from "react";

import axios from "axios";
import Plan from "./Plan";
import ModalIcon from "./ModalIcon";
import AddNewPlan from "./AddNewPlan";
import UpdateCurrentPlan from "./UpdateCurrentPlan";

function PlansList() {
    const plan = {
        authorName: "...",
        description: "...",
        creationDate: "0000:00:00",
        deadlineDate: "0000:00:00",
        id: 0
    }

    const [planList, setPlanList] = useState([]);

    const rerenderPlanList = () => {
        axios.get("http://localhost:8080/api/notes")
             .then(res => setPlanList(res.data));
    }

    useEffect(() => rerenderPlanList(), []);

    const [editState, setEditState] = useState("display");

    const getOppositeEditState = curState => {
        return (curState === "display") ? "edit" : "display";
    }

    /*
        ModalTypes:
            off
            add
            update
     */
    const [updatePlanIndex, setUpdatePlanIndex] = useState(0);
    const [activityState, setActivityState] = useState("off");

    const createPlanList = (editState) => {
        const resultPlanList = [];
        for (let i = 0; i < planList.length && i < 5; i++) {
            resultPlanList.push(<Plan index={i + 1}
                                      deadline={planList[i].deadlineDate}
                                      author={planList[i].authorName}
                                      task={planList[i].description}
                                      indexInDB={planList[i].id}
                                      editState={editState}
                                      onToggle={() => rerenderPlanList()}
                                      openUpdatePopUp={() => setActivityState("update")}
                                      setUpdatePlanIndex={setUpdatePlanIndex}/>)
        }
        return resultPlanList;
    }

    return (
        <div className="list-block">
            <div className="edit-button-block">
                <button className="edit-button"
                        onClick={() => setEditState(getOppositeEditState(editState))}>
                    <p>Edit</p>
                </button>
                <button className="create-button" onClick={() => setActivityState("add")}>
                    <p>+</p>
                </button>
            </div>
            <div className="plans-list-block">
                {createPlanList(editState)}
            </div>
            <ModalIcon activityState={activityState} setActivityState={setActivityState}>
                {activityState === "add" && <AddNewPlan
                        onToggle={() => rerenderPlanList()}
                        setActivityState={setActivityState}/>}

                {activityState === "update" && <UpdateCurrentPlan
                        onToggle={() => rerenderPlanList()}
                        setActivityState={setActivityState}
                        curDeadLine={planList[updatePlanIndex - 1].deadlineDate}
                        curAuthor={planList[updatePlanIndex - 1].authorName}
                        curDescription={planList[updatePlanIndex - 1].description}
                        indexInDB={planList[updatePlanIndex - 1].id}/>}
            </ModalIcon>
        </div>
    );
}

export default PlansList