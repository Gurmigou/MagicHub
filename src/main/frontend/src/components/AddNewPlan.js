import React, {useState} from "react";
import axios from "axios";

import "./../modal_form.css"
import ModalIconContent from "./ModalIconContent";

function AddNewPlan({onToggle, setActivityState}) {

    const [deadlineDateState, setDeadlineDateState] = useState("");
    const [authorNameState, setAuthorNameState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");

    const addPlan = () => {
        const data = {
            authorName: authorNameState,
            description: descriptionState,
            deadlineDate: deadlineDateState
        }

        axios.post("http://localhost:8080/api/notes", data)
             .then(() => onToggle());
    }

    return (
        <ModalIconContent
            buttonText={"Add"}
            onButtonClickAction={() => {
                setActivityState("off");
                addPlan();
            }}
            deadlineObj={{
                deadlineDateState: deadlineDateState,
                setDeadlineDateState: setDeadlineDateState
            }}
            authorObj={{
                authorNameState: authorNameState,
                setAuthorNameState: setAuthorNameState
            }}
            descriptionObj={{
                descriptionState: descriptionState,
                setDescriptionState: setDescriptionState
            }}
        />
    );
}

export default AddNewPlan;
