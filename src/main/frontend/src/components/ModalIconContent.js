import React from "react";

function ModalIconContent({buttonText, onButtonClickAction, deadlineObj, authorObj, descriptionObj}) {

    const changeState = (e) => {
        const {name, value} = e.target;

        if (name === "deadlineDate")
            deadlineObj.setDeadlineDateState(value);
        else if (name === "authorName")
            authorObj.setAuthorNameState(value);
        else if (name === "description")
            descriptionObj.setDescriptionState(value);
    }

    return (
        <div className="pop-up-div">
            <div className="pop-up-content">
                <form>
                    <input className="input-pop-up" name="deadlineDate"
                           value={deadlineObj.deadlineDateState}
                           placeholder="Enter deadline date of the task..."
                           onChange={changeState}/>
                    <input className="input-pop-up" name="authorName"
                           value={authorObj.authorNameState}
                           placeholder="Enter your name..."
                           onChange={changeState}/>
                    <input className="input-pop-up" name="description"
                           value={descriptionObj.descriptionState}
                           placeholder={"Enter description of the task..."}
                           onChange={changeState}/>
                </form>
                <div className="submit-button">
                    <button className="submit-pop-up" onClick={onButtonClickAction}>
                        <p>{buttonText}</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalIconContent