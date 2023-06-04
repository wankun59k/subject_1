import React from "react";
const AddButton = ({onEvent}) => {
    const buttonStyle = {
        fontFamily: "Overpass revert-layer",
        fontSize: "40px",
    }

    const callbackClickAddButton = () =>{
        onEvent();
    }

    return (
    <div>
        <button id="button1" style={buttonStyle} onClick={callbackClickAddButton}>
        +1 ms
        </button>
    </div>);
};

export default AddButton;
