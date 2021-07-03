import React, {useState} from "react";

function EditButton() {

    const [icon, setIcon] = useState("weather");

    return (
        <div className="edit-plans-button-div">
            <button className="edit-plans-button">
                <img id="edit-img" src={"/images/plans/edit_plans.png"} alt="edit Plans"/>
            </button>
        </div>
    );
}

export default EditButton