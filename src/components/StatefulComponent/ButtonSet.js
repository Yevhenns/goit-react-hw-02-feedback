import React from "react";

const ButtonSet = ({ onIncrement }) => {
    return (
        <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={onIncrement}>Good</button>
        <button type="button" name="neutral" onClick={onIncrement}>Neutral</button>
        <button type="button" name="bad" onClick={onIncrement}>Bad</button>
    </div>) 
}

export default ButtonSet;