import React, {useState} from "react";
import axios from "axios";
import ModalIconContent from "./ModalIconContent";

function UpdateCurrentPlan({onToggle, setActivityState, curDeadLine, curAuthor, curDescription, indexInDB}) {
    const [deadlineDateState, setDeadlineDateState] = useState(curDeadLine);
    const [authorNameState, setAuthorNameState] = useState(curAuthor);
    const [descriptionState, setDescriptionState] = useState(curDescription);

    const updatePlan = () => {
        const data = {
            authorName: authorNameState,
            description: descriptionState,
            deadlineDate: deadlineDateState
        }

        axios.put("http://localhost:8080/api/notes/" + indexInDB, data)
             .then(() => onToggle());
    }

    return (
        <ModalIconContent
            buttonText={"Update"}
            onButtonClickAction={() => {
                setActivityState("off");
                updatePlan();
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

export default UpdateCurrentPlan;
