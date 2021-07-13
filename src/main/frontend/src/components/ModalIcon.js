import React from "react";
import "./../modal.css"

function ModalIcon({activityState, setActivityState, children}) {
    return (
        <div className={(activityState !== "off") ? "modal active" : "modal"} onClick={() => setActivityState("off")}>
            <div className="modal-content" onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalIcon