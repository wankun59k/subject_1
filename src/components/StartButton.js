import React from "react";
const StartButton = ({onEvent}) => {
    const buttonStyle = {
        fontFamily: "Overpass revert-layer",
        fontSize: "40px",
    }

    const callbackClickStartButton = () =>{
        onEvent();
    }

    return (
    <div>
        <button id="button1" style={buttonStyle} onClick={callbackClickStartButton}>
        click to start
        </button>
    </div>);
};

export default StartButton;
