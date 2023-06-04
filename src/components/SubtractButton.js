import React from "react";
const SubtractButton = ({onEvent}) => {
    const buttonStyle = {
        fontFamily: "Overpass revert-layer",
        fontSize: "40px",
    }

    const callbackClickSubtractButton = () =>{
        onEvent();
    }

    return (
    <div>
        <button id="button1" style={buttonStyle} onClick={callbackClickSubtractButton}>
        -1 ms
        </button>
    </div>);
};

export default SubtractButton;
